console.log('Este programa imprime la tabla de multiplicar del número especificado');
var contador = 1;
var numero = parseInt(prompt('Digite el número'));


while (contador <= 12) {
  console.log(numero, ' x ', contador, ' = ', numero*contador )
  var contador = contador + 1;
}