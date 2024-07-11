const esbuild = require('esbuild');

module.exports = (eleventyConfig) => {
  eleventyConfig.addTemplateFormats('js');

  eleventyConfig.addExtension('js', {
    outputFileExtension: 'js',
    compile: async (inputContent, inputPath) => {
      const minify = process.env.NODE_ENV === 'production';

      if (inputPath !== './src/app.js') {
        return;
      }

      return async () => {
        let output = await esbuild.build({
          entryPoints: [inputPath],
          bundle: true,
          minify: minify,
          write: false,
        });

        return output.outputFiles[0].text;
      };
    },
  });

  eleventyConfig.addNunjucksAsyncFilter('jsmin', function (code, callback) {
    esbuild
      .transform(code, {
        minify: process.env.NODE_ENV === 'production',
      })
      .then((result) => callback(null, result.code));
  });
};
