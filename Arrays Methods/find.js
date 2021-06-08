//Esta funcion solamente mostrara la primera condicion que se halla cumplido 
//Crea un nuevo arreglo basado en la condicion que se este revisando
const carrito = [
  { nombre: 'Monitor de 27 pulgadas', precio: 500},
  { nombre: 'Television', precio: 100},
  { nombre: 'Tablet', precio: 200},
  { nombre: 'Audifonos', precio: 300},
  { nombre: 'Teclado', precio: 400},
  { nombre: 'Celular', precio: 700}
]
//Con un .forEach
let resul = '';
carrito.forEach((producto, index)=>{
  if(producto.nombre === 'Tablet'){
    resul = carrito[index]
  }
})
console.log(resul)

//Con un .find
const resul2 = carrito.find(producto => producto.nombre=== 'Tablet');
console.log(resul2)