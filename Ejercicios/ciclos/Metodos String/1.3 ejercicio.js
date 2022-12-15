var frase = prompt('Digite la frase que desee');
const palabras = frase.split(' ').filter(e => e.length);
console.log(`La cantidad de palabras son ${palabras.length}`);
console.log(palabras);


var frase_ = prompt('Digite la frase que desee');
const palabras_ = frase_.split(' ');

for(i = 0; i < palabras_.length; i++) {
  if ((palabras_[i].length))
    var arr = palabras_.filter(e => e.length);
}

console.log(arr);
console.log(`La cantidad de palabras son ${arr.length}`);