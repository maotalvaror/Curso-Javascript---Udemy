const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito =[
  { nombre: 'Monitor de 27 pulgadas', precio: 500},
  { nombre: 'Television', precio: 100},
  { nombre: 'Tablet', precio: 200},
  { nombre: 'Audifonos', precio: 300},
  { nombre: 'Teclado', precio: 400},
  { nombre: 'Celular', precio: 700}
]
//Comprobar si un valor existe en un arreglo = Se utiliza un ForEach o un map para recorrer el arreglo
 //Forma de saber si existe un objeto
meses.forEach(mes => {
  if(mes === 'Enero'){
  console.log('Enero si existe')   
//ForEach:acepta 3 parámetros: el valor del elemento, el índice y una referencia al array que se está iterando
}
})
//Array metodos mas corto que el manual
const resultado=meses.includes('Enero');
console.log(resultado)

//En un arreglo de objetos se utiliza .some
const existe = carrito.some(producto=> { 
  return producto.nombre === 'Monitor curvo' 
})
console.log(existe);

//En un arreglo tradicional con .some
const existe2 = meses.some(mes => mes==='Febrero')  
console.log(existe2)