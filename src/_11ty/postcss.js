const postcss = require('postcss');
const tailwind = require('tailwindcss');
const lightningcss = require('postcss-lightningcss');

const fs = require('fs');
const path = require('path');
const inputFile = './src/styles.css';
const outputFile = './_site/styles.css';
const inputFileContents = fs.readFileSync(inputFile, 'utf-8');

module.exports = (eleventyConfig) => {

  // write file via eleventy.after
  eleventyConfig.on('eleventy.after', async () => {
    try {
      const result = await postcss([
        tailwind,
        lightningcss({
          browsers: 'defaults',
          lightningcssOptions: {
            minify: (process.env.NODE_ENV === "production")
          },
        }),
      ]).
        process(inputFileContents, { from: inputFile, to: outputFile });

      // Create the output directory if it doesn't exist
      const outputDir = path.dirname(outputFile);
      if (!fs.existsSync(outputDir)) {
        await fs.promises.mkdir(outputDir, { recursive: true });
      }

      // Write the output file contents to disk
      await fs.promises.writeFile(outputFile, result.css);
    } catch (error) {
      console.error(error);
    }
  });

};