//sellar un objeto

//seal:permite modificar las llaves existentes de un objeto pero no se le pueden agregar ni eliminar.
"use strict";
const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio:  300,
  disponible: true,
}
Object.seal(producto);
// producto.disponible = false;
// producto.imagen = "imagen.jpg"
console.log(producto);

console.log(Object.isSealed(producto));
