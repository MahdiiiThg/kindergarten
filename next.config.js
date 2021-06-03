
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = withPlugins([withImages], {
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };
    config.module.rules.push({
      test: /\.(glb|gltf|bin)$/,
      use: {
        loader: "file-loader",
      },
    });
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
});
