// GENERADORES = Son funciones que se pueden pausar
// Son utiles en las tareas asincronas
// Cuando se le agrega un * al principio de crear la funcion es por que es una funcion especial

// function * contar(){
//   console.log(`En el generador 1`);
//   yield 'UNO';
//   console.log(`En el generador 2`);
//   console.log(`En el generador ${yield 3}`);
// }

// const iterador = contar();
// const valor1 = iterador.next();
// console.log(valor1); // UNO
// const valor2 = iterador.next();
// console.log(valor2);
// const valor3 = iterador.next('ABC');
// console.log(valor3);

// --------------------------------------------

// function * conteoInfinito(){
//   let n = 0;
//   while (true) {
//     yield console.log(n);
//     n = n + 1;
//   }
// }

// const itera = conteoInfinito();
