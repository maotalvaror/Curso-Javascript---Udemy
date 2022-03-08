//Creacion de un array (Strings)
var arr_String = ['Cadena', 'de', 'texto'];

//Creacion de un array (Numeros);
var arr_Numeros = [214, 872, 32];

//Creacion de un array (Objetos);
var arr_Objetos = [{}, {}, {}];

//Longitud del array
var Longitud = arr_String.length;
console.log(Longitud);

console.log(arr_String.length);

//Posicion de un array
var posicion_arr = arr_Numeros[0];
console.log(posicion_arr);

console.log(arr_Numeros[2]);

//Recorrer un array
for (let i = 0; i < arr_String.length; i++) {
  const Recorrer_arr = arr_String[i];
  console.log(Recorrer_arr, i);
}

//Añadir un nuevo elemento al final del array

var nuevoElemento = arr_String.push("UltimoElemento");
console.log(arr_String); // ==> [ "Cadena", "de", "texto", "UltimoElemento" ]

//Elimina el ultimo elemento del array

var Eliminar_Ultimo_Elemento = arr_Numeros.pop(2);
console.log(arr_Numeros); // ==> Array [ 214, 872 ]

//Añadir un nuevo elemento al principio de un array

var nuevoElemento_ = arr_String.unshift("PrimerElemento");
console.log(arr_String); // ==>  [ "PrimerElemento", "Cadena", "de", "texto", "UltimoElemento" ]

//Elimina el primer elemento del array

var Eliminar_Primer_Elemento = arr_Numeros.shift(0);
console.log(arr_Numeros) // ==> [ 872 ]


//ELIMINAR UN SOLO ELEMENTO MEDIANTE SU POSICIÓN
var arr_frutas = ["Manzana", "Banana", "Fresa"]; //crea un array de strings ("frutas")
//Obtiene la posicion en la variable (posicion_fruta);
var posicion_fruta = arr_frutas.indexOf('Manzana');

console.log(posicion_fruta); // 1

var elemento_Eliminado = arr_frutas.splice(posicion_fruta, 1);
console.log(arr_frutas); // ["Banana", "Fresa"]


//ELIMINAR VARIOS ELEMENTOS Y GUARDARLOS EN UN NUEVO ARRAY
var arr_vegetales = ['Habichuela', 'Tomate', 'Cebolla', 'Zanahoria']
console.log(arr_vegetales)  // ["Habichuela", "Tomate", "Cebolla", "Zanahoria"]

var posicion_de_string = 1;
var Cantidad_Elementos = 2;

var Nuevo_array = arr_vegetales.splice(posicion_de_string, Cantidad_Elementos);
console.log(Nuevo_array); // ["Tomate", "Cebolla"] ==> Lo que se ha guardado en "Nuevo_array"
console.log(arr_vegetales);   // ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales" 

//Copiar un array
var copia_array = Nuevo_array.slice();
console.log(copia_array);

var copia_array_vegetales = arr_vegetales.slice();
console.log(copia_array_vegetales);