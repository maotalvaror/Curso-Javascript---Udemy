//Convertir el array en un SET
let numeros = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7];
let setNumeros = new Set(numeros);
console.log(setNumeros);

//Convertir el SET en un array
let numeros_2 = [1, 2, 3, 4, 5, 5, 5, 6, 7];
let setNumeros_2 = new Set(numeros_2);
let arrayNumeros = [...setNumeros_2];
console.log(arrayNumeros);