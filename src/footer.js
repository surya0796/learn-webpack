// const top = "top";
// const bottom = "bottom";
import footercss from "./footer.css";

console.log(footercss);

const footer = () => {
  const footerHtml = document.createElement("footer");
  footerHtml.textContent = "This is the footer";
  return footerHtml;
};

export default footer;

// export { top, bottom };
// export const top = "top";
// export const bottom = "bottom";
// export default top;
