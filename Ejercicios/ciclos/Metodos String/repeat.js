//repite la palabra las veces que el usuario ingrese pero el numero repetido sera menor que 200
var palabra = prompt('Digite cualquier cosa');
var cantidad = parseInt(prompt('Digite la cantidad de veces que quiere que se repita'));
if(cantidad >= 200){
  console.log('Escoja un numero menor que 200');
} else {
console.log(palabra.repeat(cantidad));
}