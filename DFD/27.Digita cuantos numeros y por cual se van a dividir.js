console.log('Este programa dice si la cantidad de numeros dados por el usuario son divisibles por el numero que escoja');

var cantidadNumerosAProcesar = parseInt(prompt('Digite la cantidad de numeros a procesar'));
var arreglo = [];
var resultado = 0;

console.log('Ingrese sus',cantidadNumerosAProcesar,'numeros:');

for (let i = 0; i < cantidadNumerosAProcesar; i++) {
  var numerosDigitados = parseInt(prompt(`Digite el numero ${i+1}`))
  arreglo.push(numerosDigitados);
}

var numeroDivisible = parseInt(prompt('Digite el numero por el cual se sabra si es divisible o no'))

for (let j = 0; j < cantidadNumerosAProcesar; j++) {
  resultado = arreglo[j] % numeroDivisible;

  if (resultado == 0) {
  console.log('El numero ',arreglo[j],' es divisible por ',numeroDivisible)
  } else {
    console.log('El numero ',arreglo[j],' No es divisible por ',numeroDivisible)
  }
}