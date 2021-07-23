// Programa para mostrar las tablas de multiplcar dependiendo el numero ingresdo, y dependiendo si su resultado es par

console.log('Programa que digita las tablas de multiplicar cuando el resultado sea par');
var numero = prompt('Digite un numero');
var _numero = parseInt(numero)

for(let i=1; i <= _numero; i++){
  for(let j=1; j<=12; j++){
    var resultado = i*j;
    if (resultado % 2 == 0) {
      console.log(i,'x',j,'=',resultado)
    }
  }
}