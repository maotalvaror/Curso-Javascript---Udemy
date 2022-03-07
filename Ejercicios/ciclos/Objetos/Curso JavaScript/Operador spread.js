// Math.max verifica que numero es mayor

var num1 = 10, num2 = 30;

var max = Math.max(num1, num2); 
console.log(max); // 30

let arr_numeros = [19, 100, 5, 20, 54];
let num_max = Math.max(...arr_numeros)
//operador spread
console.log(num_max); // 100



var num3 = 50, num4 = 42;

var min = Math.min(num3, num4); 
console.log(min); // 42


let arr_numeros2 = [45, 105, 7, 80, 23];
let num_min = Math.min(...arr_numeros2)
//operador spread

console.log(num_min); // 7