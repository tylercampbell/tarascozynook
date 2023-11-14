const Image = require('@11ty/eleventy-img');

async function asyncImageShortcode(
  src,
  alt,
  tailwind = '',
  style = '',
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async'
) {
  let metadata = await Image(src, {
    widths: [375, 430, 768],
    formats: ['webp', 'jpeg'],
    urlPath: '/img/',
    outputDir: './_site/img/',
  });

  let imageAttributes = {
    alt,
    class: tailwind,
    style,
    sizes,
    loading,
    decoding,
  };

  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: 'inline',
  });
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addAsyncShortcode('pic', asyncImageShortcode);
};
