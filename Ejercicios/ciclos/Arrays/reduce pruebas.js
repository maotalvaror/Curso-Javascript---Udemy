/*
1. El metodo reduce ejecuta una funcion reductora para cada elemento del array
2. El metodo retorna un solo valor
3. El metodo no cambia el array original
*/

//Sumar los numeros del array
var a = [14, 23, 32, 41];
var b = a.reduce(function(num1, num2){
  return num1 + num2
})

console.log(b);


//Concatenar las letras
var c = ['M', 'A', 'O', 'R'];
var d = c.reduce(function(LetraA, LetraB){
  return LetraA.concat(LetraB)
}).includes("A");

console.log(d);