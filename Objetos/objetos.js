"use strict";
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio:  300,
  disponible: true,
}
//congelando un objeto
Object.freeze(producto);

//tratar de reasignar un valor 
// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// console.log(producto);

console.log(producto);
//para saber si esta congelado el objeto
console.log(Object.isFrozen(producto));
