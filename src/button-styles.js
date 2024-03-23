const red = "color: red;";
const blue = "color: blue;";
const makeColorStyle = (color) => `color: ${color};`;

// Using ES5 module syntax doesn't provide Tree shaking benefits
// module.exports = {
//   red,
//   blue,
//   makeColorStyle,
// };
// export default makeColorStyle;

// exports.red = red;
// exports.blue = blue;
// exports.makeColorStyle = makeColorStyle;

export { red, blue, makeColorStyle };
