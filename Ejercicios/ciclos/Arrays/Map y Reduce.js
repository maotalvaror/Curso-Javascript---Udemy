//Map = retorna un array con todos los elementos multiplicados por 4
var arr = [13, 22, 376, 454, 533];
var mult = arr.map(function(num){
  if(num % 2 == 0){
    return num * 4;
  } else {
    return 'Impar';
  }
});

console.log(mult);

//-----------------------------------------------------

var arr1 = ["m", "a", "l", "e", "j", "a", "o", "r"];
var a = arr1.map((letra) => {
  return letra.toUpperCase();
})

console.log(a)

//Reduce = retorna un unico valor, el valor sera todos los elementos sumados
var arr2 = [13, 22, 376, 454, 533];
var suma = arr2.reduce(function(numA, numB){
  return numA + numB;
});

console.log(suma);

//-----------------------------------------------------

var arr3 = ["M", "A", "L", "E", "J", "A", "O", "R"];
var b = arr3.reduce((letra, letra2) => {
  return letra.concat(letra2).toLowerCase();
});

console.log(b);