//charAt
var nombres = 'Dana Mariana';
var caracter = nombres.charAt(7);
console.log(caracter); // r

//charCodeAt
var codigo = nombres.charCodeAt(9);
console.log(codigo); // 97

//concat
var apellidos = ' Ortega Rodriguez';
var concatenar = nombres.concat(apellidos);
console.log(concatenar); // Dana Mariana Ortega Rodriguez

//endsWith
var termina_en = apellidos.endsWith('z');
console.log(termina_en); // true

//fromCharCode
var nombre_CodigoAscii = String.fromCharCode(89, 101, 114, 97, 108, 100, 105, 110);
console.log(nombre_CodigoAscii); // Yeraldin

//fromCodePoint
var codigo_ = String.fromCodePoint(3342, 2487, 9877);
console.log(codigo_); // എষ⚕

//includes
var incluye = nombre_CodigoAscii.includes('d');
console.log(incluye); // true

//indexOf
var indice_ = apellidos.indexOf('e');
console.log(indice_); // 4

//lastIndexOf
var ultimo_indice = apellidos.lastIndexOf('e'); 
console.log(ultimo_indice) // 15

//padEnd
var cadena_inicial = '0123';
var unirAlFinal = cadena_inicial.padEnd(10, '456789');
console.log(unirAlFinal); // 0123456789

//padStart
var cadena_final = '456789';
var unirAlPrincipio = cadena_final.padStart(10, '0123');
console.log(unirAlPrincipio); // 0123456789

//repeat
var cadena = prompt('Digite la cadena');
var cantidad_repeticion = parseInt(prompt('Digite la cantidad de veces que desea que se repite la cadena'));

if(cantidad_repeticion > 300){
  console.log('Digite un numero menor que 300');
} else {
  var repetir = cadena.repeat(cantidad_repeticion);
  console.log(repetir);
}

//replace
var nombre = 'Lesdy Valencia';
var nombre_digitado = prompt('Digite su primer nombre');
var apellido_digitado = prompt('Digite su primer apellido');
var reemplazar_nombre = nombre.replace('Lesdy', nombre_digitado);
console.log(reemplazar_nombre); // 'nombre' Valencia
var reemplazar_apellido = nombre.replace('Valencia', apellido_digitado);
console.log(reemplazar_apellido); // Lesdy 'Apellido'

//replaceAll
var nombres = 'Elizabeth Rodriguez, Betsy Rodriguez, Camila Rodriguez, Yeison Rodriguez';
var reemplazar_todo = nombres.replaceAll('Rodriguez', 'Baquero');
console.log(reemplazar_todo);// Elizabeth Baquero, Betsy Baquero, Camila Baquero, Yeison Baquero

//slice
var copia = nombres.slice(21, 36);
console.log(copia); // Betsy Rodriguez

//startsWith
var empieza_en = copia.startsWith('B');
console.log(empieza_en); // true

//substring
var apellido_R = 'RODRIGUEZ';
console.log(apellido_R.substring(0, 5)); // RODRI
console.log(apellido_R.substring(5, 9)); // GUEZ
console.log(apellido_R.substring(0, 9)); // RODRIGUEZ

//toLowerCase
var minusculas = apellido_R.toLowerCase();
console.log(minusculas); // rodriguez

//toUpperCase
var apellido_O = 'otalvaro'
var mayusculas = apellido_O.toUpperCase();
console.log(mayusculas); // OTALVARO

//trim
var cadena_con_espacios = '    Bogotá     ';
var elimina_espacios = cadena_con_espacios.trim();
console.log(elimina_espacios); // Bogotá

//trimEnd
var elimina_espaciosAlFinal = cadena_con_espacios.trimEnd();
console.log(elimina_espaciosAlFinal); //    Bogotá.

//trimStart
var elimina_espaciosAlInicio = cadena_con_espacios.trimStart();
console.log(elimina_espaciosAlInicio); //.Bogotá     

//valueOf
var valor_cadena = cadena_con_espacios.valueOf();
console.log(valor_cadena); //    .Bogotá.     