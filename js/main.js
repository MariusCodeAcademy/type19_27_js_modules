import { avg, total, sandaug } from './modules/numberFn.js';
import { makeEl } from './modules/htmlEl.js';
console.log('main.js file was loaded');

// function skills

total(4, 1, 5, 8, 7);
sandaug(4, 1, 5, 8, 7);

// sukurti funkcija kuri suskaiciuoja masyvo gauto argumento vidurki
// avgArr([4,1,5,8,7])

const el1 = makeEl('h1', 'bg-info', 'I am h1');
console.log(el1);

const vid1 = avg(4, 8, 9, 12);
console.log('vid1 ===', vid1);

const uzd1El = makeEl('h3', '', vid1);

document.body.append(uzd1El);
