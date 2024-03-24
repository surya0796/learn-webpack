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

// Q/A Is it possible to create different Html template using webpack?
// Yes, for this you need to call all the entry points and create an HtmlWebpackPlugin for each entry point.
// what is the possibility of memory related issues while using webpack?
// The space complexity for webpack is linear to how many modules you are creating. So, it depends on the number of modules....but usually the number is very high
// to fully overload the memory, another scenario of memory leak could be, if you use [chunkhash].js filename in dev server, all the files created while editing
//  a app in dev mode will create a new file each time, this can memory full issue.
