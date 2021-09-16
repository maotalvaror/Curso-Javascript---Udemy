console.log('Numero factorial ')
var numero = parseInt(prompt('Digite un numero'));
var i = 1;
var factorial = 1;
while (i<=numero) {
  factorial = factorial*i;
  i = i + 1;
}
console.log('El factorial es: ',factorial)