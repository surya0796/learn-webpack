import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
// const button = require("./button"); // CommonJS is also working

console.log(
  nav(),
  top,
  bottom,
  makeButton("my first button"),
  makeColorStyle("red")
);
