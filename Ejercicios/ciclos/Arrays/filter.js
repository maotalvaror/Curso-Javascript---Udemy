/* filter() : crea un nuevo array con todos los elementos
que cumplan la condicion por la funcion dada.*/

const nombres = ['Maria', 'Elizabeth', 'Yeison', 'Jose', 'Betsy'];
const nuevo_array = nombres.filter( name => name.length > 5);
console.log(nuevo_array);

const nombres_2 = ["Elizabeth", 'Betsy', 'Jose', "Maria"];
const condicion = nombres_2.filter( nombre => nombre.includes("o"));
console.log(condicion);