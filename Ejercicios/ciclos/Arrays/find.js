/* find : Devuelve el valor del primer elemento que cumpla
con la condicion dada.*/

const numeros = [1, 4, 8, 9, 3, 5, 7, 2, 6];
const nuevo_arr_numeros = numeros.find( num => num > 4);
console.log(nuevo_arr_numeros);


const Array = ["Yeison", "Elizabeth", "Betsy", "Alejandra"];
const nuevo_arr = Array.find(nombre => nombre.includes("a"));
console.log(nuevo_arr);