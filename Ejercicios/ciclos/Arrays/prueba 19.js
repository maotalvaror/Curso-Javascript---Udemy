var arr = [];
var posiciones_arr = parseInt(prompt('Digite la cantidad de numeros que desea ingresar en el array'));
var numero_mayor = Number.MIN_VALUE;

for (let i = 0; i < posiciones_arr; i++){
  var numero = parseInt(prompt(`Digite el ${i + 1} numero`));
  arr.push(numero);

  if (arr[i] > numero_mayor){
    numero_mayor = arr[i];
  }
}

console.log(numero_mayor);