//Crea un nuevo arreglo basado en el parametro evaluado
//Esta funcion mostrara todas las condiciones que se hallan cumplido
const carrito = [
  { nombre: 'Monitor de 27 pulgadas', precio: 500},
  { nombre: 'Television', precio: 100},
  { nombre: 'Tablet', precio: 200},
  { nombre: 'Audifonos', precio: 300},
  { nombre: 'Teclado', precio: 400},
  { nombre: 'Celular', precio: 700}
]
let resultado;
resultado = carrito.filter((producto) => producto.precio >= 400);
resultado = carrito.filter((producto) => producto.precio <600);


console.log(resultado)