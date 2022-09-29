//Array.from = Creacion de un arreglo con un solo objeto
//Crea un arreglo con los valores enviados, este metodo solo recibe un objeto iterable
const letras = Array.from("ABCDEFGHI");
console.log(letras)
/*
Valor final :

Array(9) [ "A", "B", "C", "D", "E", "F", "G", "H", "I" ]
*/

//-------------------------------------------------------------------

//Array.isArray = Valor booleano si los valores enviados son un arreglo
//Verifica si los valores enviados son un array, este retorna un valor booleano

var balones_deportes = ["Tenis", "Baloncesto", "Voleibol"];
var datos_ = 
  {
    nombre: "Maria",
    edad: 15
  };

var comparacion = Array.isArray(balones_deportes);
console.log(comparacion, "Balones de deportes")
comparacion = Array.isArray(datos_, "Datos");
console.log(comparacion, "datos de objeto");
/*
Valor final :

true "Balones de deportes"
false "datos de objeto"
*/

//-------------------------------------------------------------------

//Array.of = crea un nuevo arreglo con TODOS los valores enviados
//Crea un nuevo array con los valores enviados
var array_of = Array.of({}, true, false, undefined, "Manzana", "Voleibol", {});
console.log(array_of);
/*
Valor final :

Array(7) [ {}, true, false, undefined, "Manzana", "Voleibol", {} ]
*/

//-------------------------------------------------------------------

//concat = Une los arreglos que se deseen
//concatena 2 o mas arrays
var concatenacion = balones_deportes.concat(frutas, array_of, balones_deportes);
console.log(concatenacion);
/*
Valor final :

Array(14) [ "Tenis", "Baloncesto", "Voleibol", undefined, {}, true, false, undefined, "Manzana", "Voleibol", … ]
*/

//-------------------------------------------------------------------

//entries = itera el array con el for of y devuelve el indice y el elemento 
//este metodo itera el array con el for of, regresa el indice y el elemento en un array nuevo

var array = ["A", "T", "F", "K"];
var iteracion = array.entries();

for (let i of iteracion){
  console.log(i);
};

/*
Valor final :

Array [ 0, "A" ]
Array [ 1, "T" ]
Array [ 2, "F" ]
Array [ 3, "K" ]

*/

//-------------------------------------------------------------------

//every = Devuelve valor booleano si TODOS cumplen la condicion
//retorna un valor booleano (true o false) si TODOS los elementos del array cumplen con la condicion

let numeros = [10, 20, 30, 40, 50];
let condicion_ = (num) => num < 30;
console.log(numeros.every(condicion_));

/*
Valor final : false

Ya que todos los elementos del array no cumplen con la condicion ( < 30 )
*/

//-------------------------------------------------------------------

//fill = cambia un array recibiendo tres parametros
/*
1.) El valor por el cual se cambiara
2.) Desde que posicion se empezara a cambiar
3.) Hasta que posicion se cambiara (pero sin incluirla)
*/
var array_Aa = [{nombre: "Maria"}, [1, 2, 3], true, undefined, false, [[]]];
var cambio_array = array_Aa.fill("Cambio", 1, 4);
console.log(cambio_array);

/*
Valor final :

Array(6) [ {…}, "Cambio", "Cambio", "Cambio", false, (1) […] ]
*/

//-------------------------------------------------------------------

//filter = Crea un nuevo array con los que cumplan la condicion
//crea un nuevo array con los elementos que cumplan con la condicion

var edades = [33, 18, 48, 15, 4, 3, 6, 27, 53];
var array_Mayores_de_edad = edades.filter(name => name >= 18 );
console.log(edades);
console.log(array_Mayores_de_edad);

/*
Valor final :

Array(9) [ 33, 18, 48, 15, 4, 3, 6, 27, 53 ]
Array(5) [ 33, 18, 48, 27, 53 ]
*/

//-------------------------------------------------------------------

//find = devuelve el valor del que cumpla la condicion
//Regresa el valor del elemento que cumpla con la condicion
var colores = ["Rojo", "Negro", "Morado", "Blanco"];
var array_colores = colores.find(color => color.length > 5);
console.log(colores);
console.log(array_colores);

/*
Valor final : Morado

Array(4) [ "Rojo", "Negro", "Morado", "Blanco" ]
Ya que Morado contiene mas de 5 letras y fue el primer elemento que cumplio la condicion
*/

//-------------------------------------------------------------------

//findIndex = Regresa el indice del primero que cumpla la condicion
//devuelve el indice del primer elemento que cumpla con la condicion

var colores_2 = ["Cafe", "Gris", "Amarillo", "Rosado"];
var array_indice = (color_2) => color_2.length > 7; 
console.log(colores_2.findIndex(array_indice));

/*
Valor final :

2 = Amarillo que contiene mas de 7 letras
*/

//-------------------------------------------------------------------

//flat
//Crea una nuevo array con todos los elementos de sub-array
var array_ = [1, 2, 3, [4, 5, [6, 7, [8, 9, 10]]]];
var subArray = array_.flat();
console.log(subArray);

/*
Valor final :

Array(6) [ 1, 2, 3, 4, 5, (3) […] ]
*/

//-------------------------------------------------------------------

//forEach = Es una funcion que recibe otra funcion que como argumentos recibe el elemento, el indice y el array
//Recorrer un array 

var frutas = ["Mora", "Pera", "Fresa", "Mango"];
const recorrer_array = frutas.forEach(function(elemento, indice, array){
  console.log( 'Elemento:', elemento, 'Indice:', indice);
});

/*
Valor final :

Elemento: Mora Indice: 0
Elemento: Pera Indice: 1
Elemento: Fresa Indice: 2
Elemento: Mango Indice: 3
*/

//-------------------------------------------------------------------

//includes = Devuelve valor booleano si el elemento esta incluido
//Verifica si el elemento esta incluido en el array devolviendo un valor booleano (true, false)
var verduras = ["Tomate", "Zanahoria", "Cebolla", "Papa"];
var verificacion = verduras.includes("Zanahoria")
console.log(verificacion);

/*
Valor final :

true
*/

//-------------------------------------------------------------------

//indexOf
//Para saber cual es el indice del elemento del array
var letras_Mayusculas = ["Z", "D", "H", "T", "P", "O"];
var letras_indice = letras_Mayusculas.indexOf("T");
console.log(letras_indice);

/*
Valor final :

3
*/

//-------------------------------------------------------------------

//join
//une todos los elementos de un array

const tiempo = [1, 27, 59];
console.log(tiempo.join(':'));

/*
Valor final :

1:27:59
*/

//-------------------------------------------------------------------

//keys
//Devuelve un objeto que contiene los indices de cada elemento
var letras_minusculas = ["m", "h", "d", "f", "s", "v"];
var indices_letras_m = letras_minusculas.keys();

for( const i of indices_letras_m ) {
  console.log(i, letras_minusculas[i]);
}

/*
Valor final :

0 m
1 h
2 d
3 f
4 s
5 v
*/

//-------------------------------------------------------------------

//lastIndexOf
//Devuelve el indice de un elemento en especifico
var colores_ = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Morado"];
var posicion = colores_.lastIndexOf("Verde");
console.log(colores_);
console.log(posicion);

/*
Valor final :

Array(6) [ "Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Morado" ]
3
*/

//-------------------------------------------------------------------

//lenght
//Para saber cual es la longitud del arreglo

var instrumentos = ['Guitarra', 'Trompeta'];
let longitud_instrumentos = instrumentos.length;
console.log(longitud_instrumentos);

/*
Valor final :

2
*/

//-------------------------------------------------------------------

//pop
//para eliminar el ultimo elemento del array
var familia = ["Padres", "Hermanos", "Tios", "Primos", "Abuelos"];
var nuevo_arr_familia = familia.pop();
console.log(familia, "Eliminar ultimo elemento");

/*
Valor final :

Array(4) [ "Padres", "Hermanos", "Tios", "Primos" ] Eliminar ultimo elemento
*/

//-------------------------------------------------------------------

//push
//para añadir un elemento al final del array

var ropa = ["Camisa", "Pantalon", "Medias", "Chaqueta"];
var nuevo_arr = ropa.push('Pantaloneta');
console.log(ropa, "Añadir al final");

/*
Valor final :

Array(5) [ "Camisa", "Pantalon", "Medias", "Chaqueta", "Pantaloneta" ] Añadir al final
*/

//-------------------------------------------------------------------

//reduce
//ejecuta una función reductora sobre cada elemento de un array devolviendo como resultado un único valor.
let array_numeros = [3, 6, 9, 12];

const sumatoria = array_numeros.reduce(
  (_a, _b) => _a + _b
);

console.log(sumatoria, "reduce");

/*
Valor final :

30 reduce
*/

//-------------------------------------------------------------------

//reverse
//este metodo invierte el array, el primer elemento pasa a ser el ultimo como el ultimo pasa a ser el primero
var arr_num = [1, 2, 3, 4, 5];
console.log(arr_num.reverse(), "Invertir el array"); //Array(5) [ 5, 4, 3, 2, 1 ]

/*
Valor final :

Array(5) [ 5, 4, 3, 2, 1 ] Invertir el array
*/

//-------------------------------------------------------------------

//shift
//Elimina el primer elemento del array
var materias = ["Matematicas", "Español", "Ingles", "Etica", "Fisica"];
var nuevo_arr_materias = materias.shift();
console.log(materias, "Eliminar primer elemento"); //Se borra Matematicas

/*
Valor final :

Array(4) [ "Español", "Ingles", "Etica", "Fisica" ] Eliminar primer elemento
*/

//-------------------------------------------------------------------

//slice
//Copiar un array
var array_original = ["Lunes", "Miercoles", "Viernes", "Domingo"];
var array_copia = array_original.slice();
console.log(array_original);
console.log(array_copia);

/*
Valor final :

Array(4) [ "Lunes", "Miercoles", "Viernes", "Domingo" ]
*/

//-------------------------------------------------------------------

//some
//verifica si al menos un elemento del array cumple con la condicion
let arr_numeros = [1, 3, 5, 7, 9];
let condicion = (n) => n % 2 === 0;
console.log(array.some(condicion)); 

/*
Valor final :

false
*/

//-------------------------------------------------------------------

//sort
// Ordena los elementos de un arreglo
var Combinadas = ["Aaa", "Bb", "A", "BC", "bA", "B", "Baa"];
console.log(Combinadas.sort());

/*
Valor final :

Array(7) [ "A", "Aaa", "B", "BC", "Baa", "Bb", "bA" ]
*/

//-------------------------------------------------------------------

//splice
//Para eliminar un elemento especificando su posicion desde donde se iniciara el cambio, hasta donde se cambiara y agregar un elemento para reemplazar
var meses =["Enero", "Febrero", "Marzo", "Abril"];
var eliminar_ = meses.splice(1, 1, "Mayo");
console.log(eliminar_);
console.log(meses);

/*
Valor final :

Array [ "Febrero" ] Eliminado o cambiado
Array(4) [ "Enero", "Mayo", "Marzo", "Abril" ]
*/

//-------------------------------------------------------------------

//toString
//Convierte el array en una cadena de caracteres (string)

var Utiles = ["Colores", " Cuaderno", " Libro", " Esferos"];
var arr_Utiles = Utiles.toString();
console.log(arr_Utiles);

/*
Valor final :

Colores, Cuaderno, Libro, Esferos
*/

//-------------------------------------------------------------------

//unshift
//Para agregar un elemento al principio del array
var arr_nombres =["Eliza", "Yeison", "Jose", "Maria"];
var nuevo_arr_nombres = arr_nombres.unshift("Dana");
console.log(arr_nombres);

/*
Valor final :

Array(5) [ "Dana", "Eliza", "Yeison", "Jose", "Maria" ]
*/

//-------------------------------------------------------------------

//values
//Obtiene los valores de un array
let vocales = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
let Iterador_ = vocales.values();

console.log(Iterador_.next().value);
console.log(Iterador_.next().value);
console.log(Iterador_.next().value);
console.log(Iterador_.next().value);
console.log(Iterador_.next().value);
console.log(Iterador_.next().value);
console.log(Iterador_.next().value);
console.log(Iterador_.next().value);
console.log(Iterador_.next().value);
console.log(Iterador_.next().value);

/*
Valor final :

A
a
E
e
I
i
O
o
U
u

*/