//Array.from
//Este metodo recibe un String (Un solo valor) y lo convierte en un array
var objeto_iterable = Array.from("AE1G5IH3O6LU565Ñ");
console.log(objeto_iterable);

//--------------------------------------------------------------

//Array.isArray
//Devuelve un valor booleano si este es un array
var letras = ["Y", "P", "X", "H", "Z"];
var verificar_array = Array.isArray(letras);
console.log(verificar_array);

//--------------------------------------------------------------

//Array.of
//Recibe cualquier valor y lo devuelve dentro de un array
var array_variedad = Array.of({}, 234, ["A", "B", "C"], true, undefined, "Luisa", "Maria");
console.log(array_variedad);

//--------------------------------------------------------------

//concat
//Concatena arrays
var concatenacion = objeto_iterable.concat(letras);
console.log(concatenacion);

//--------------------------------------------------------------

//entries
console.log("Itera un array con el for of devolviendo el indice y el elemento")
var iteracion = letras.entries();
for(i of iteracion){
  console.log(i);
}

//--------------------------------------------------------------

//every
console.log("Regresa un valor booleano si TODOS los elementos cumplen la condicion");
var numeros = [15, 6, 28, 32, 4];
var condicion_ = (num) => num < 40;
console.log(numeros.every(condicion_));

//--------------------------------------------------------------

//fill
/*Cambia el array
lo primero que recibe es el valor por el cual se cambiara
lo segundo es desde que elemento se hara el cambio
lo tercero es hasta donde se hara el cambio sin incluir dicha posicion
*/
var array_variedades =  ["A", {}, "B", [[[]]], "C", 1234];
var cambio_array_variedades = array_variedades.fill([[[[]]]], 1, 2);
console.log(cambio_array_variedades);
cambio_array_variedades = array_variedades.fill([[[[]]]], 5, 6);
console.log(cambio_array_variedades);

//--------------------------------------------------------------

//filter
console.log("Crea otro array con los elementos que cumplan la condicion");
var arr_nombres = ["Dana", "Yeison", "Camila", "Lesdy"];
var condicion_nombres = arr_nombres.filter(name => name.length > 5);
console.log(condicion_nombres);

//--------------------------------------------------------------

//find
console.log("devuelve el primer elemento que cumpla con la condicion");
var arr_nombres_2 = ["Jose", "Eliza", "Maria", "Junior"];
var primer_elemento = arr_nombres_2.find(name => name.length < 6);
console.log(primer_elemento);

//--------------------------------------------------------------

//findIndex
console.log("Devuelve el indice del primer elemento que cumpla con la condicion");
var num = [439, 76, 34, 98, 986, 456, 754, 723, 544, 877];
var indice_primerElemento = (numero) => numero > 789;
console.log(num.findIndex(indice_primerElemento));

//--------------------------------------------------------------

//flat
console.log("crea un nuevo array con todos los elementos del sub-arr concatenados hasta la profundidad deseada");
var arr1 = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10]]]];
var nuevo_arr = arr1.flat(2);
console.log(nuevo_arr);

//--------------------------------------------------------------

//forEach
console.log("Regresa el elemento y el indice del array");
var nombres = ["Yeraldin", "Camila", "Dana", "Jose", "Eliza"];
nombres.forEach(function(elemento, indice){
  console.log(elemento, indice);
})

//--------------------------------------------------------------

//incluides
console.log("Regresa un valor booleano si el array incluye un cierto elemento");
var arr2 = nombres.includes("Dana");
console.log(arr2);

//--------------------------------------------------------------

//indexOf
console.log("Regresa el indice del elemento");
var indice = nombres.indexOf("Camila");
console.log(indice);

//--------------------------------------------------------------

//join
console.log("Une los elementos del array, y se puede especificar con que los quiere unir ( - ), ( / ), etc");
var arr = ["Martes", 30, "Agosto", 2022];
//Une los elementos del array, y de igual manera recibe una especificacion de como quiere que los separe
var unirElemento = arr.join("/");
console.log(unirElemento);

//--------------------------------------------------------------

//keys
console.log("Retorna el indice y el elemento");
var arr3 = ["D", 234, "C", 432, "S", 342, "C"];
var indiceYElemento = arr3.keys();

for (const key of indiceYElemento){
  console.log(key, arr3[key]);
}

//--------------------------------------------------------------

//lastIndexOf
console.log("Retorna el indice del elemento");
var animales = ["Pato", "Oso", "Canguro", "Elefante"];
var indice_animales = animales.lastIndexOf("Canguro");
console.log(indice_animales, "Indice Animales");


//--------------------------------------------------------------

//length
console.log("Regresa la longitud del array");
var longitud = arr.length;
console.log(longitud);

//--------------------------------------------------------------

//pop
console.log("Elimina el ultimo elemento");
var array_primer_nombre = ["M", "A", "R", "I", "A"];
var Eliminar_ultimo_elemento = array_primer_nombre.pop();
console.log(array_primer_nombre); //Array nuevo, sin el ultimo elemento
console.log(Eliminar_ultimo_elemento); //Elemento que se elimino

//--------------------------------------------------------------

//push
console.log("Agregar nuevos elementos a el array");
var array_segundo_nombre = ["A", "L", "E", "J", "A"];
var Agregar_alFinal = array_segundo_nombre.push("N", "D", "R", "A"); // Lo que se va a agregar al final del array
console.log(array_segundo_nombre); //Array nuevo, agregando nuevos elementos al array

//--------------------------------------------------------------
//reduce
//SUMATORIA DE NUMEROS
var valor_principal = 0;
var numeros = [11, 22, 33, 44];
var suma = numeros.reduce(
  (_a, _b) => _a + _b,
  valor_principal
);
console.log("Sumatoria de numeros");
console.log(suma); // 110

//INTEGRAR UN ARRAY APARTIR DE VARIOS ARRAYS

console.log("integrar array");
var varios_arrays = [[1, 2], [3, 4], [5, 6]];
var integrar_array = varios_arrays.reduce(function(a, b){
  return a.concat(b);
});
console.log(integrar_array);

//--------------------------------------------------------------

//reverse
console.log("Revertir array");
var array_numeros = [0, 2, 4, 6, 8, 10];
var invertir_array = array_numeros.reverse();

console.log(invertir_array);

//--------------------------------------------------------------

//shift
console.log("Elimina el primer elemento del array");
var array_fecha = ["Miercoles", 31, "de", "Agosto", "del", 2022];
var eliminar_primerElemento = array_fecha.shift(); //Elemento eliminado
console.log(array_fecha); //nuevo array sin el primer elemento

//--------------------------------------------------------------

//slice
console.log("Extraer elementos de el array");
var array_Cosas = ["Esmalte", "Cargador", "Gafas", "Cuaderno", "Trapo"];
// Extrae los elementos desde la posicion inicial de un array hasta la posicion final sin incluirla
var copia_de_unArray = array_Cosas.slice(1, 4);
console.log(copia_de_unArray);

//--------------------------------------------------------------

//some
console.log("Valor booleano si algun elemento cumple la condicion");
var array_Cosas_2 = ["Pala", "Puerta", "Martillo", "Cajones"];
//Regresa un valor booleano dependiendo si un elemento del array cumple con la condicion
var condicion_cosas = (e) => e.includes("T");
console.log(array_Cosas_2.some(condicion_cosas));

//--------------------------------------------------------------

//sort
console.log("Ordenar el array");
var array_colores = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul"];
//Ordena el array
var Ordenar_arr = array_colores.sort();
console.log(Ordenar_arr);

//--------------------------------------------------------------

//splice
console.log("Elimina el elemento especificando su posicion");
var arr_meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
//Elimina un elemento especificando su posicion
/*
1. Desde donde se iniciara el cambio
2. Hasta donde se termina el cambio, eliminando las otras posiciones
3. Elemento por el cual se va a modificar
*/
var Cambio_de_array = arr_meses.splice(1, 3, "Octubre");
console.log(arr_meses);

//--------------------------------------------------------------

//toString
console.log("Devuelve un string");
//Cambia el array a un string
var Cambiar_array_aString = arr_meses.toString();
console.log(Cambiar_array_aString);

//--------------------------------------------------------------

//unshift
console.log("Agregar un elemento al principio del array");
var arr_meses2 = ["Febrero", "Marzo", "Abril", "Mayo"]
//Agrega el elemento al principio del array
var agregar_al_primerElemento = arr_meses2.unshift("Enero");
console.log(arr_meses2);

//--------------------------------------------------------------

//values
console.log("Retorna el valor de cada posicion");
var arr_frutas = ["Mango", "Fresa", "Melocoton", "Durazno"];
var iteracion_frutas = arr_frutas.values();

console.log(iteracion_frutas.next().value);
console.log(iteracion_frutas.next().value);
console.log(iteracion_frutas.next().value);
console.log(iteracion_frutas.next().value);