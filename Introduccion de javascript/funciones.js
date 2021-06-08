// /*TRES MANERAS DE EJECUTAR UN MENSAJE EN FUNCIONES

// PRIMERA MANERA DE EJECUTAR UNA FUNCIÓN

// function mensaje(mensaje){
//   console.log('Mensaje como argumento de la función');
// }
// mensaje(mensaje);


// SEGUNDA MANERA DE EJECUTAR UNA FUNCIÓN

// function mensaje(msj){
//   console.log(msj);
// }
// var msj= 'Mensaje como argumento de la función';
// mensaje(msj);

// TERCERA MANERA DE EJECUTAR UNA FUNCIÓN


// function mensaje(){
//   return 'mensaje como devolución de la función';
// }

// var msj = mensaje();
// console.log(msj);

 
// function sumar(a, b, c){
//   return a + b + c;
// }

// var result = sumar(2,4,7)
// console.log(result)

// function restar(a, b, c){
//   return -a - b - c;
// }

// var result = restar(2,4,3)
// console.log(result)

// function multiplicación(a, b, c){
//   return a * b * c;
// }

// var result = multiplicación(4,4,2)
// console.log(result)

// function division(a, b, c){
//   return a / b / c;
// }

// var result = division(44,2,2)
// console.log(result)

// function sumrestmultdiv(a, b, c, d, e){
//   return a+b-c*d/e;
// }
// var result =sumrestmultdiv(443,433,333,7,7)
// console.log(result)
// FUNCIONES RECURSIVAS

// */
// /*Funciones Recursivas*/
// /*var factorial = function(n){
//   if((n == 0) || (n == 1))
//     return 1;
//     else
//     return(n * factorial(n-1));
// }
// console.log(factorial(6));

// var factorial = function(n){
//   if((n == 0) || (n == 1))
//     return 1;
//     else
//     return(n * factorial(n-1));
// }
// console.log(factorial(5));

// var factorial = function(n){
//   if((n == 0) || (n == 1))
//     return 1;
//     else
//     return(n * factorial(n-1));
// }
// console.log(factorial(4));

// var factorial = function(n){
//   if((n == 0) || (n == 1))
//     return 1;
//     else
//     return(n * factorial(n-1));
// }
// console.log(factorial(3));

// var factorial = function(n){
//   if((n == 0) || (n == 1))
//     return 1;
//     else
//     return(n * factorial(n-1));
// }
// console.log(factorial(2));*/

//  //Funciones Basicas con arreglos.

// var nombres = ['Elizabeth', 'Jose', 'Yeison', 'Betsy', 'Camila','Maria','Mariana', 'Junior','Yeraldin', 'Esteban'];
// var Edad = new Array ('52', '46', '32', '27','26','14','6','4','3','2');

// console.log(nombres[0])
// console.log(Edad[0])

// console.log('Pruebas con varias funciones')
//  console.log(nombres.length)
//  for(var i = 0; i <=  (nombres.length - 1); i++){
//     console.log(nombres[i]);
// }

// //  for (let index = 1; index <= nombres.length; index++) {
// //    const element = nombres[index - 1];
// //    console.log(element)
// //  }

// // var imprimir = function(valor, indice, arr){
// //   console.log(`Valor: ${valor}, Indice: ${indice}, Arr; ${arr}`)
// // }

// // Edad.forEach(imprimir)


// // Edad.forEach(function(v, i){
// //   console.log(v, i)
// // })

// console.log(nombres);
// nombres.push('pedro');

// console.log(nombres);
// nombres.unshift('liliana')
// console.log(nombres)
// nombres.pop()
// console.log(nombres)
// // var ultimo = nombres.pop();
// // console.log("Ultimo elemento eliminado: ", ultimo)
// // ultimo = nombres.pop()
// //  console.log("Ultimo elemento eliminado: ", ultimo)
// nombres.shift();
// console.log(nombres)
// var pos = nombres.indexOf('Mariana')
// console.log(pos);
// var pos = Edad.indexOf('52')
// console.log(pos);

// nombres.splice(1, 1);
// console.log(nombres);
// nombres.splice(1, 2);
// console.log(nombres);
// nombres.splice(1, 3);
// console.log(nombres);

