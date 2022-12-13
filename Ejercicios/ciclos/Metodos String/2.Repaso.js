// charAt
var apellidoB = 'Baquero ';
var caracter = apellidoB.charAt('2');
console.log(caracter); // q 

// charCodeAt
var apellidoO = 'Otalvaro ';
var caracter_ascii = apellidoO.charCodeAt('3');
console.log(caracter_ascii); // 108

// concat
var concatenar = apellidoB.concat(apellidoO);
console.log(concatenar);

// endsWith
var termina_en = apellidoB.endsWith('o ');
console.log(termina_en); // true

// fromCharCode
var nombre_ascii = String.fromCharCode(65, 108, 101, 106, 97);
console.log(nombre_ascii); // aleja

// fromCodePoint
var simbolos = String.fromCodePoint(1234, 4567, 8912, 2345);
console.log(simbolos) // Ӓᇗ⋐ऩ

// includes
var incluye = nombre_ascii.includes('j');
console.log(incluye); // true

// indexOf
var indice = nombre_ascii.indexOf('l');
console.log(indice);

// lastIndexOf
var ultimo_caracter = nombre_ascii.lastIndexOf('a');
console.log(ultimo_caracter);

// padEnd
var nuevo_nombre_f = nombre_ascii.padEnd(15, ' Rodriguez');
console.log(nuevo_nombre_f);

// padStart
var nuevo_nombre_i = nombre_ascii.padStart(11, 'Maria ');
console.log(nuevo_nombre_i);

// repeat
var cadena = prompt('Digite la cadena');
var cantidad_repetir = parseInt(prompt('Digite la cantidad de veces que desea repetir la cadena'));
if(cantidad_repetir > 400){
  console.log('Digite un numero menor que 400')
} else {
  var repeticion = cadena.repeat(cantidad_repetir);
  console.log(repeticion);
}

// replace
var cadena_nombre = 'Maria Alejandra Otalvaro Rodriguez';
console.log(cadena_nombre.replace('Otalvaro', ''));
console.log(cadena_nombre.replace('Alejandra', ''));

// replaceAll
var cadena_ = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
var reemplazar_todo = cadena_.replaceAll('lazy', '¡!');
console.log(reemplazar_todo);

//slice
var nuevo_string = 'Nueva Cantidad';
console.log(nuevo_string.slice(0, 6));

// startsWith
var apellidoR = '¿Rodriguez?';
var comienza_en = apellidoR.startsWith('¿');
console.log(comienza_en); // true

// substring
var caracter = 'CANTIDAD';
console.log(caracter.substring(0, 4));
console.log(caracter.substring(0));
console.log(caracter.substring(4, 8));

// toLowerCase
var minusculas = caracter.toLowerCase();
console.log(minusculas);

// toUpperCase
var caracter_ = 'Cantidad';
var mayusculas = caracter_.toUpperCase();
console.log(mayusculas);

// trim
var espacios = '     Hola         ';
console.log(espacios.trim());

// trimEnd
var espacios_finales = '     Hola         ';
console.log(espacios_finales.trimEnd());

//trimStart
var espacios_iniciales = '     Hola         ';
console.log(espacios_iniciales.trimStart());

// valueOf
var valor = espacios.valueOf();
console.log(valor);