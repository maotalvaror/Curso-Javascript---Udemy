var cadena = 'Mi nombre es Maria y tengo 15 años';

// Reemplazar Maria por el nombre ingresado
var nombre = prompt('Digite su nombre');
var reemplazar_nombre = cadena.replace('Maria', nombre);
console.log(reemplazar_nombre);

// Reemplazar 15 por la edad ingresada
var edad = parseInt(prompt('Digite su edad'));
var reemplazar_edad = cadena. replace('15', edad);
console.log(reemplazar_edad);