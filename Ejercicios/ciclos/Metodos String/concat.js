//Concatena
var Nombre = prompt('Digite su nombre');
var Palabra = 'Hola ';
var saludo = Palabra.concat(Nombre);
console.log(saludo);

var Apellido = prompt('Digite su Apellido');
var saludo_2 = saludo.concat(` ${Apellido}`);
console.log(saludo_2);