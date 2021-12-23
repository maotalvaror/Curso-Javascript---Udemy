//nos permite ejecutar esto en una forma más corta y simple.

//En el caso del for se utiliza {} cando son varias lineas
var edad = prompt('Digite su edad');

if (edad >= 18){
  var a = 'Eres Mayor de edad';
  console.log(a)
} else {
  var b = 'Eres Menor de edad';
  console.log(b)
}

//Operador ternario "Con parentesis" al igual que sin parentesis en la condicion funciona igual
var edad2 = prompt('Digita tu edad');

var Prueba = (edad >= 18) ? 'Eres Mayor de edad' : 'Eres Menor de edad';
console.log(Prueba);

//Operadores ternarios Multiples "?"

var edad3 = prompt('Digite su edad');
if (edad3 <= 5) {
  console.log('Es un bebé!');
} else if (edad3 < 18) {
  console.log('¡Eres menor de edad!');
} else if (edad3 <= 79) {
  console.log('Eres un adulto');
} else if (edad3 <= 100){
  console.log('¡Felicidades!');
}