const carrito=[
  {nombre: 'Monitor 20 pulgadas', precio:500},
  {nombre: 'Celular', precio:300},
  {nombre: 'Telefono', precio:600},
  {nombre: 'Television', precio:100},
]

const nuevoArreglo=carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`)

carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArreglo);