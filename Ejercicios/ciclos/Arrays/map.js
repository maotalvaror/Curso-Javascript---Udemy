/*
map() crea un nuevo array con los resultados de la llamada
a la función indicada aplicados a cada uno de sus elementos
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
var multiplicacion = arr.map(function(numero){
  return numero * 2;
})
console.log(multiplicacion);


var Array_ = [
  {clave:1, valor:10},
  {clave:2, valor:20},
  {clave:3, valor: 30}
];

var cambio_array = Array_.map(function(obj){
var arrObj = {};
arrObj[obj.clave] = obj.valor;
return arrObj;
});

console.log(Array_);
console.log(cambio_array);