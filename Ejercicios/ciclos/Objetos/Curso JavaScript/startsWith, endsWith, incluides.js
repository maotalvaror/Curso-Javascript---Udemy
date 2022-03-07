//var arr_funciones = [];
// for (let i = 0; i < 10; i++){
//   arr_funciones.push( function (){ console.log(i); } );  }
// var fn = function(func, i){
//   func(i)
// }
// arr_funciones.forEach(fn);


var nombre = 'Yeison';
console.log( nombre.substring(0,1) === 'Y') 
//true = si termina en Y (Mayuscula)

var Saludo = "Hola Mundo!"
console.log( Saludo.startsWith("h")) 
//false = no termina en h (Minuscula)

var apellidos = 'Rodriguez Baquero';
console.log( apellidos.endsWith("Baquero") ); 
//true = termina en Baquero

var Metodo_incluides = 'Camila';
console.log( Metodo_incluides.includes('t'));
//false = no contiene la letra t en el nombre

var name = 'Betsy Elizabeth';
console.log( name.startsWith('Eli', 6) ) 
//true = En la posicion 6 de el string name contiene Eli

console.log( name.includes('b', 11))
//true ya que b si esta incluida en el caracter 11