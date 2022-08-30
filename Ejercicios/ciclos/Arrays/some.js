//comprueba si al menos un elemento del array cumple con la condición

let array = [1, 3, 5, 7, 9];
let condicion = (e) => e % 2 === 0;

console.log(array.some(condicion)); // false
let array_ = [2, 4, 6, 8];
let condicion_ = (e) => e % 2 === 0;

console.log(array_.some(condicion_)); // true