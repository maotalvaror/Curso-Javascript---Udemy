const carrito=[
  {nombre: 'Monitor 20 pulgadas', precio:100},
  {nombre: 'Celular', precio:200},
  {nombre: 'Telefono', precio:300},
  {nombre: 'Television', precio:400},
]

//Ciclo para se comporta igual que la funcion de abajo
for(let i=0; i< carrito.length; i++){
  console.log(`${carrito[i].nombre}- Precio: ${carrito[i].precio}`);
}

const nuevoArreglo=carrito.map(function(producto){
  return(`${producto.nombre}- Precio: ${producto.precio}`);
})

const nuevoArreglo2=carrito.forEach(function(producto){
  return(`${producto.nombre}- Precio: ${producto.precio}`);
})
