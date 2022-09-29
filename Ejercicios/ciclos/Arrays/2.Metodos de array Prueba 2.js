//Array.from = Regresa un array de el valor enviado
var arr = Array.from("MARIAOTALVARO");
console.log(arr);

var de_todo = Array.from("CSCDYSLAY97531");
console.log(de_todo);

//Array.isArray = Regresa un valor booleano si es un array
var array_ = [1, 2, [], "AEIOU", {nombre:"María"}];
var verificar = Array.isArray(array_);
console.log(verificar);

//Array.of = Crea un array con todos los valores enviados
var nuevoArr = Array.of("AEIOU", 123, 456, ["ABCDE"]);
console.log(nuevoArr);

//concat = concatena varios arrays
var unirArrays = array_.concat(nuevoArr);
console.log(unirArrays);

//entries = Itera el array con el for of, devolviendo el elemento y el indice en un solo array el elemento y el indice que le corresponde
var nombres = ["Lesdy", "Camila", "Jose", "Yeison"];
var iterador = nombres.entries();
for( i of iterador ){
  console.log(i);
}

//every = Regresa un valor booleano si todos los elementos cumplen la condicion
var nombres_2 = ["Yeraldin", "Elizabeth", "Junior", "Betsy"];
var condicion = ( (nombre) => nombre.length > 4);
console.log(nombres_2.every(condicion));

//fill = Modifica el array, recibiendo el valor por el cual se va a modificar, desde que indice se comenzara a modificar y hasta donde sin incluir la posicion
var array_modificado = array_.fill("Modificado", 1, 4);
console.log(array_modificado);

//filter = Crea un nuevo array con los elementos que cumplan con la condicion
var num = [1020, 398, 23444, 832, 832487329, 34353];
var a = num.filter( numero => numero > 10000);
console.log(a);

//find

//findIndex

//flat

//forEach = Regresa el elemento y el indice en un string
var Meses = ["Enero", "Febrero", "Marzo", "Abril"];
var iterar = Meses.forEach(function(elemento, indice, array){
  console.log("Elemento: ", elemento, " Indice: ", indice);
})

//includes = Devuelve un valor booleano si encuentra el elemento en el array
var incluye = Meses.includes("Enero");
console.log(incluye);

//indexOf = indice del elemento del array
var indice = Meses.indexOf("Marzo");
console.log(indice);

//join = une los elementos del array
var unir = Meses.join("-");
console.log(unir);

//keys


//lastIndexOf
var elemento = Meses.lastIndexOf("Marzo");
console.log(elemento)

//length = longitud del array
var longitud = Meses.length;
console.log(longitud);

//pop = Elimina el ultimo elemento
var Materias = ["Español", "Matematicas", "Ingles", "Ed. Fisica", "Filosofia"];
var Eli_Ult_elem = Materias.pop();
console.log(Materias);

//push = agrega los elementos al final del array
var Agr_Ult_elem = Materias.push("Fisica", "Quimica");
console.log(Materias);

//reduce

//reverse = revierte el array
var Numeros_ = [9, 8, 7, 6, 5, 4, 3, 2, 1];
var cambiar_arr = Numeros_.reverse();
console.log(cambiar_arr);

//shift = Elimina el Primer elemento del array
var Eli_Pri_Elem = Numeros_.shift();
console.log(Numeros_);

//slice = Copia el array
var Original = ["O", "T", "A", "L", "V", "A", "R", "O"];
var Copia = Original.slice();
console.log(Copia);

//some

//sort

//splice = Elimina los elementos segun el numero que se le indique
var pos = "";
var arr = ["Lucia", "Daniel", "Paola", "Jhon", "Sara"];
let Eliminar_elem = arr.splice(pos, 1);
console.log(Eliminar_elem);
console.log(arr)


//toString = Regresa los elementos del array en string
var String = Original.toString();
console.log(String);

//unshift = Agrega elementos al principio del array
var Agr_Pri_Elem = nombres_2.unshift("Maria");
console.log(nombres_2);

//values
var años = [2000, 2001, 2002, 2003, 2005, 2006, 2007, 2008, 2009, 2010];
var valores = años.values();

console.log( valores.next().value );
console.log( valores.next().value );
console.log( valores.next().value );
console.log( valores.next().value );
console.log( valores.next().value );
console.log( valores.next().value );
console.log( valores.next().value );
console.log( valores.next().value );
console.log( valores.next().value );
console.log( valores.next().value );