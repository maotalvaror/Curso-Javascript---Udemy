/*
Symbol es un tipo de datos cuyos valores son únicos.
Dichos valores pueden ser utilizados como identificadores (claves)
de las propiedades de los objetos.
*/

let primerNombre = Symbol();
let persona = {};
persona[primerNombre] = "María";
console.log( persona[primerNombre] );
console.log(primerNombre)

let segundoNombre = Symbol();
let persona_ = {
  [segundoNombre]: "Alejandra"
};
console.log( persona_[segundoNombre] );



let simbolo1 = Symbol('Simbolo')
let simbolo2 = Symbol('Simbolo')

console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log(Object.is(simbolo1, simbolo2));
console.log(typeof simbolo1);



let Persona_A = {};
let nombreA = Symbol();

Persona_A[nombreA] = "Elizabeth";
console.log(Persona_A[nombreA])