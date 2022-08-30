//Retorna un true si todos los elementos en el array cumplen con la condicion
//Retorna false si los elementos no cumplen con la condicion
let numeros = [17, 87, 32, 50, 99, 3];
let condicion = (num) => num < 100;

console.log(numeros.every(condicion));

let num = ['1', '2', '3', '4', '5'];
let condicion_ = (pares) => pares > 4;

console.log(num.every(condicion_));