var Numero = parseInt(prompt('Digite el numero'));

console.log('Primer For');

for (let a = 1; a <= Numero; a++) {
  console.log(a);
}

console.log('Segundo For');

for (let b = Numero; b >= 1; b--) {
  console.log(b);
}

console.log('Primer While')

let nuevo = 1;

while (nuevo <= Numero) {
   console.log(nuevo);
   nuevo ++;
 }

console.log('Segundo While')

let _nuevo = Numero;

while (_nuevo >= 1) {
  console.log(_nuevo)
  _nuevo --;
}
