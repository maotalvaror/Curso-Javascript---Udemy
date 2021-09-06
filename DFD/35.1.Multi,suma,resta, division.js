console.log('Este programa da la suma, resta, multiplicacion y division de dos numeros');
var num1 = parseInt(prompt('Digite el primer numero'));
var num2 = parseInt(prompt('Digite el segundo numero'));

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
console.log('la suma es',suma)
console.log('la resta es',resta)
console.log('la multiplicacion es',multiplicacion)

if (num2 > 0) {
  var division = num1 / num2;
  console.log('la division de los numeros es',division)
} else {
  console.log('No se podra dividir')
}