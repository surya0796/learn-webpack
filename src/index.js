import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
// const button = require("./button"); // CommonJS is also working

// console.log(
//   nav(),
//   top,
//   bottom,
//   makeButton("my first button"),
//   makeColorStyle("red")
// );

const body = document.body;
const button = makeButton("button rendered by webpack");
button.style = makeColorStyle("red");
body.appendChild(button);
