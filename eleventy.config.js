const metagen = require('eleventy-plugin-metagen');
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {

  // passhthrough static files
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.setServerPassthroughCopyBehavior("copy");

  // add plugins
  eleventyConfig.addPlugin(metagen);
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://shop.134.house",
    },
  });

  // import external configs
  eleventyConfig.addPlugin(require('./src/_11ty/image.js'))
  eleventyConfig.addPlugin(require('./src/_11ty/esbuild.js'))
  eleventyConfig.addPlugin(require('./src/_11ty/postcss.js'))
  eleventyConfig.addPlugin(require('./src/_11ty/html.js'))

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
    }
  };
};