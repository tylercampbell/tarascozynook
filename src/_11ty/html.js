const htmlnano = require('htmlnano');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform('htmlmin', async function (content) {
    if (
      this.page.outputPath &&
      this.page.outputPath.endsWith('.html') &&
      isProduction
    ) {
      try {
        const result = await htmlnano.process(content);
        return result.html;
      } catch (err) {
        console.error('HTMLNano error:', err);
      }
    }

    return content;
  });
};
