// at
var str = 'Yeison no se baña y huele a feo';
var indice_caracter = -8;
console.log( str.at(indice_caracter)); // l

// charAt
var indice = str.charAt(7);
console.log(indice); // n

// charCodeAt
var codigo_ascii = str.charCodeAt(15);
console.log(codigo_ascii); // 241 == ñ

// codePointAt
var simbolos = '😂😇😋😎😍';
var codigo_simbolos = simbolos.codePointAt(2);
console.log(codigo_simbolos); // 128519 == 😇

// concat
var concatenar = simbolos.concat(simbolos);
console.log(concatenar); // 😂😇😋😎😍😂😇😋😎😍

// endsWith
var termina_en = concatenar.endsWith('😎'); 
console.log(termina_en); // false

// fromCharCode
var codigoAscii_de = String.fromCharCode(65);
console.log(codigoAscii_de); // A

// fromCodePoint
var codigoAscii_simbolo = String.fromCodePoint(128520);
console.log(codigoAscii_simbolo); // 😈

// includes
var incluye = str.includes('no se baña');
console.log(incluye); // true

// indexOf
var indice_de = str.indexOf('o');
console.log(indice_de); // 4

// lastIndexOf
var ultimo_indice_de = str.lastIndexOf('o');
console.log(ultimo_indice_de); // 30

// match
var expresion_regular = /[A-Z]/g;
console.log(str.match(expresion_regular)); // Y

// padEnd
var str_2 = 'Dana es fea';
var str_3 = str_2.padEnd(14, '!!!');
console.log(str_3); // Dana es fea!!!

// padStart
console.log(str_3.padStart(17, '¡¡¡')); // ¡¡¡Dana es fea!!!

// repeat
var palabra = 'hola' //prompt('Digite una palabra'); // hola
var cantidad_repeticion = 3 //prompt('Digite la cantidad de veces que se repetira'); // 3
if(cantidad_repeticion > 499){
  console.log('Digite un numero menor que 499');
} else {
  var repetir = palabra.repeat(cantidad_repeticion);
  console.log(repetir); // holaholahola
}

// replace
var nombre = 'maria' //prompt('Digite su nombre'); // maria
var str_4 = 'Hola () ¿Cómo estas?';
var reemplazar = str_4.replace('()', nombre);
console.log(reemplazar); // Hola maria ¿Cómo estas?

// replaceAll
var str_5 = 'Yeison no se baña, Mariana no se baña, y Yeraldin no se baña';
var reemplazar_todo = str_5.replaceAll('no', 'SI');
console.log(reemplazar_todo); // Yeison SI se baña, Mariana SI se baña, y Yeraldin SI se baña

// slice
var nuevostr_ = str_5.slice(19, 37);
console.log(nuevostr_);

// split
var dividir = str_5.split(' ');
console.log(dividir);

// startsWith
var comienza_en = str_5.startsWith('¿'); 
console.log(comienza_en); // false

// substring
var parte_string = str_5.substring(41, 61);
console.log(parte_string);

// toLowerCase
var minusculas = str_5.toLowerCase();
console.log(minusculas);

// toUpperCase
var mayusculas = str_5.toUpperCase();
console.log(mayusculas);

// trim
var string_espacios = '   Holaaaa     ';
var quitar_espacios = string_espacios.trim();
console.log(quitar_espacios);

// trimEnd 
var quitar_espaciosF = string_espacios.trimEnd();
console.log(quitar_espaciosF);

// trimStart
var quitar_espaciosI = string_espacios.trimStart();
console.log(quitar_espaciosI);

// valueOf
var valor = string_espacios.valueOf();
console.log(valor)