console.log('Saber si el numero es cero, positivo o negativo')
var numero = parseInt(prompt('Digite el numero'));

function resultado(numero) {
  if (numero == 0) {
    console.log('El numero es cero');
  } else if (numero > 0) {
    console.log('El numero es Positivo')
  } else {
    console.log('El numero es Negativo')
  }
}
resultado(numero)