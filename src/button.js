// take a str, the button label and return a element
/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */
import "./button.css";
const makeButton = (buttonName) => {
  const ele = document.createElement("button");
  ele.textContent = buttonName;
  return ele;
};

export default makeButton;

// module.exports = makeButton;
