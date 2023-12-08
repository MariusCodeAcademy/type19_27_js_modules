// iskelti makeEl i htmlEl moduli, exportuoti, importuoti ir isitikinti kad veikia main.js
export default function createHtmlEL(tagName, className, text) {
  const newEl = document.createElement(tagName);
  newEl.className = className;
  newEl.textContent = text;
  return newEl;
}
