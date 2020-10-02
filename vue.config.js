const path = require("path");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const ImageminPngquant = require("imagemin-pngquant");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;

    return {
      plugins: [
        new ImageminPlugin({
          disable: process.env.NODE_ENV !== "production",
          plugins: [
            ImageminMozjpeg({
              quality: 70
            }),
            ImageminPngquant({
              quality: [0.5, 0.6]
            })
          ]
        }),
        new PrerenderSPAPlugin({
          // Required - The path to the webpack-outputted app to prerender.
          staticDir: path.join(__dirname, "dist"),
          // Required - Routes to render.
          routes: ["/"]
        })
      ]
    };
  }
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/imports.styl")]
    });
}
