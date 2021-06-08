const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito =[
  { nombre: 'Monitor de 27 pulgadas', precio: 500},
  { nombre: 'Television', precio: 100},
  { nombre: 'Tablet', precio: 200},
  { nombre: 'Audifonos', precio: 300},
  { nombre: 'Teclado', precio: 400},
  { nombre: 'Celular', precio: 700}
]
meses.forEach((mes, i) => {
console.log(i)
console.log(mes)
})
//Forma de hacerlo en forEach
meses.forEach((mes, i) => {
  if(mes=== 'Abril'){
  console.log(`Encontrado en el indice ${i}`)  
  }
  })

//Encontrar el indice de abril

const indice = meses.findIndex(mes => mes === 'Abril')
console.log(indice);
