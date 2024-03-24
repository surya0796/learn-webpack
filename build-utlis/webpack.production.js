const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (mode) => {
  console.log(mode);
  return {
    output: {
      filename: "[chunkhash].js",
    },
    plugins: [new MiniCssExtractPlugin()],
    modules: {
      rules: [
        {
          test: /\.css/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
  };
};
