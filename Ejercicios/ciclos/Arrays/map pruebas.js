// Aplica la Raiz cuadrada en los elementos (numeros) del array
var arr = [1, 2, 3, 4, 5, 6];

var a = arr.map(function(num){
  return num * num;
})

console.log(a);


//Multiplica los elementos (numeros) del array
var arr = [112, 223, 334, 445, 556, 667];

var a = arr.map(function(num){
  return num * 2;
}).reverse()

console.log(a);