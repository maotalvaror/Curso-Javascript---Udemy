var str = 'Yeison no se baña';
var arr = [];

var primerCaracter = arr.push(str.split('no se baña')[0][0]);
var segunda_palabra = str.split('Yeison')[1];
var ultimoCaracter = arr.push(segunda_palabra[segunda_palabra.length - 1]);

console.log(arr);

//Unir con el metodo join
var unir_arr = arr.join('');
console.log(unir_arr);

//Unir con el metodo reduce
var unir_arr2 = arr.reduce(function(a, b){
  return a.concat(b);
});
console.log(unir_arr2);