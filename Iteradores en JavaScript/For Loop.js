//El codigo se ejecuta hasta que una condicion se cumpla o se deje de cumplir
// for(let i = 0; i < 10; i++){
//   console.log(`Numero ${i}`)
//  }//es un ciclo for que comienza desde 0 que termina en < que 10


//Un ciclo for que va desde 0 hasta menor o igual que 20 (Nos dice cual es Par e Impar)
// for(let m = 0; m <= 20; m++){
//   if(m % 2 === 0 ){
//   console.log(`Èl numero ${m} es PAR`);
// }else{
//   console.log(`El numero ${m} es IMPAR`)
//   } 
// }


//
const carrito = [
  {nombre: 'Monitor de 27 pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200},
  {nombre: 'Audifonos', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Celular', precio: 700},
]

console.log(carrito.length);


for(let n = 0; n < carrito.length; n++){
  console.log(carrito[n].nombre)
}