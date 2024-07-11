const postcss = require('postcss');
const tailwind = require('tailwindcss');
const lightningcss = require('postcss-lightningcss');
const fs = require("fs/promises");

module.exports = (eleventyConfig) => {
  eleventyConfig.on("eleventy.before", async () => {
      await fs.mkdir("./_site", { recursive: true }, (err, path) => {
          if (err) throw err;
      });

      const sourceFile = "./src/styles.css";
      const distFile = "./_site/styles.min.css";

      const css = await fs.readFile(sourceFile, (err, css) => {
          if (err) throw err;
          return css;
      });

      await postcss([
        tailwind,
        lightningcss({
          browsers: 'defaults',
          lightningcssOptions: {
            minify: (process.env.NODE_ENV === "production")
          },
        }),
      ]).process(css, {
              from: sourceFile,
              to: distFile
          })
          .then((result) => {
              fs.writeFile(distFile, result.css, () => true);
              console.log("[msme] Wrote CSS");
          });
  });
};