//.sort : ordena los elementos de un arreglo y devuelve el arreglo ordenado

//ECMAScript 5

var numerosDesordenados = [5, 10, 11, 2, 1, 9, 20];

var ordenarNumeros = numerosDesordenados.sort(function(a, b){
  return a - b;
});
console.log(ordenarNumeros);

//ECMAScript 6

var numerosDesordenados2 = [6, 9, 1, 22, 19, 93, 20];

var ordenarNumerosES6 = numerosDesordenados2.sort( (a,b) => a>b)
console.log(ordenarNumerosES6);