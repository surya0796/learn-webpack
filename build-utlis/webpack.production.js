module.exports = (mode) => {
  console.log(mode);
  return {
    output: {
      filename: "[chunkhash].js",
    },
  };
};
