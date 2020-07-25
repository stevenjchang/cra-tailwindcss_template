const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("autoprefixer"),
    purgecss({
      content: ["./src/*.js", "./src/**/*.js", "./src/**/**/*.js"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    cssnano({
      preset: "default",
    }),
  ],
};

//see REFERENCES.md - purgecss + watch + cssnano
