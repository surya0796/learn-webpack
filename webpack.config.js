const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = (mode) => require(`./build-utlis/webpack.${mode}`)(mode);

module.exports = ({ mode }) => {
  return webpackMerge.merge(
    {
      mode,
      output: {
        filename: "bundle.js",
      },
      plugins: [new htmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  );
};
