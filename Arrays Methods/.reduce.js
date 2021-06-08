//ejecuta una función reductora sobre cada elemento de un array devolviendo como resultado un único valor
const carrito = [
  { nombre: 'Monitor de 27 pulgadas', precio: 500},
  { nombre: 'Television', precio: 100},
  { nombre: 'Tablet', precio: 200},
  { nombre: 'Audifonos', precio: 300},
  { nombre: 'Teclado', precio: 400},
  { nombre: 'Celular', precio: 700}
]
//Con un forEach
//Cantidad de codigo con forEach
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total)

//Con un reduce
//Cantidad de codigo con Reduce
let resultado=carrito.reduce((total, producto) => total + producto.precio, 0)
console.log(resultado);
