//Itera sobre arreglos
const pendientes = ['Tarea', 'Comer', 'Proyectos', 'Estudiar JavaScript'];

const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200},
  {nombre: 'Audifonos', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Celular', precio: 700},
]
//"Version mas compacta"
for(let pendiente of pendientes){
console.log(pendiente)
}

for(let producto of carrito){
  console.log(producto.precio)//Se esta llamando el precio de las variables
}

for(let producto of carrito){
  console.log(producto.nombre)//Se esta llamando el nombre de las variables
}