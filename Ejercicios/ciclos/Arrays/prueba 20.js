var arr = [];
var posiciones_arr = parseInt(prompt('Digite la cantidad de numeros que desea ingresar en el array'));
var numero_menor = Number.MAX_VALUE;

for(let i = 0; i < posiciones_arr; i++){
  var numero = parseInt(prompt(`Digite el ${i} numero`));
  arr.push(numero);

  if( arr[i] < numero_menor ){
    numero_menor = arr[i];
  }
}
console.log(numero_menor);