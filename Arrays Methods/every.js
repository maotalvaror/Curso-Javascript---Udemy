//Todos los elementos de un array deben cumplirse para que retorne un true
const carrito = [
  { nombre: 'Monitor de 27 pulgadas', precio: 500},
  { nombre: 'Television', precio: 100},
  { nombre: 'Tablet', precio: 200},
  { nombre: 'Audifonos', precio: 300},
  { nombre: 'Teclado', precio: 400},
  { nombre: 'Celular', precio: 700}
]

const resul = carrito.every(producto => producto.precio < 1000);
console.log(resul)