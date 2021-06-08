//El arreglo se mantiene intacto con el spread operator
//Si utilizamos .push se agregara 'Agosto' en el arreglo 
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito =[
  { nombre: 'Monitor de 27 pulgadas', precio: 500},
  { nombre: 'Television', precio: 100},
  { nombre: 'Tablet', precio: 200},
  { nombre: 'Audifonos', precio: 300},
  { nombre: 'Teclado', precio: 400},
  { nombre: 'Celular', precio: 700}
]
meses.push('Agosto')
const meses2= [...meses, 'Agosto']
console.log(meses2)
