console.log('Programa que convierte un decimal a binario');
var binario = '';
var modulo = 0;

var numero = parseInt(prompt('Digite un numero'));
if (numero == 0 || numero == 1) {
console.log('Resultado = ',numero); 
} else {
  while (numero > 0) {
    modulo = numero % 2;
    numero = parseInt(numero/2);
    // console.log(numero);
    binario = modulo.toString() + binario;
  }
  console.log(binario);
}