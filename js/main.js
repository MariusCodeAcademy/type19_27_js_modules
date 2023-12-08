'use strict';
console.log('main.js file was loaded');

// function skills

// sukurti funkcija kuri suskaiciuoja 4 skaiciu vidurki
// avg(4,5,8,7) grazina vidurki
function avg(n1, n2, n3, n4) {
  const total = n1 + n2 + n3 + n4;
  return total / 4;
}
let avg1 = avg(4, 5, 8, 7);
console.log('avg1 ===', avg1);
// sukurti funkcija kuri suskaiciuoja masyvo gauto argumento vidurki
// avgArr([4,1,5,8,7])

// parasyti funkcija kuri pagamina ir grazina html elementa, argumentu paduodam elemento taga, classe, ir texta
// makeEl('h2', 'bg-primary', 'I am text')

function makeEl(tagName, className, text) {
  const newEl = document.createElement(tagName);
  newEl.className = className;
  newEl.textContent = text;
  return newEl;
}

const el1 = makeEl('h1', 'bg-info', 'I am h1');
console.log(el1);

const vid1 = avg(4, 8, 9, 12);
console.log('vid1 ===', vid1);

const uzd1El = makeEl('h3', '', vid1);

document.body.append(uzd1El);
