console.log('Este programa imprime la tabla de multiplicar del número especificado.');
var contador = 1;
var numero = prompt('Digite el número');
var num2 = parseInt(numero);

while (contador <= 12) {
  console.log(numero, ' x ', contador, ' = ', numero*contador )
  var contador = contador + 1;
}