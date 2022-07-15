// Array.isArray() : Devuelve true si el valor es un Array, false si es de otro tipo de valor.
var frutas = ['Manzana', 'Pera', 'Mango'];

let arr_isArray = Array.isArray(frutas);
console.log(arr_isArray); //  true



var objeto = {
  nombre: "Maria",
  apellido: "Otalvaro",
  edad: 15
};

let verificacion = Array.isArray(objeto);
console.log(verificacion); // false