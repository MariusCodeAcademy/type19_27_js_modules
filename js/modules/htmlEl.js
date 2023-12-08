// iskelti makeEl i htmlEl moduli, exportuoti, importuoti ir isitikinti kad veikia main.js
function createHtmlEL(tagName, className, text) {
  // kuriam el
  const newEl = document.createElement(tagName);
  // sudeti visus atributus
  // sukti cikla per attr obj
  // el.setAttribute('class', 'd-none')
  newEl.className = className;
  // ikelem text jei yra paduotas
  newEl.textContent = text;
  return newEl;
}

export function sayHi() {
  console.log('hi');
}

// norim galeti prideti bet koki atributa createHtmlEL funkcija

createHtmlEL(
  'img',
  {
    src: '/img/cat.jpg',
    alt: 'image of a cat',
    class: 'img-fluid',
  },
  null
);
createHtmlEL('h2', { class: 'bd-primary' }, 'Hello world');

export default createHtmlEL;
