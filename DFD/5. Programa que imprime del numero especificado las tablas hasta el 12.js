console.log('Programa que imprime del numero especificado la tabla hasta el 12');
var num = prompt('Digite un numero');
var num2 = parseInt(num);

for (let i=1; i <= 12; i++) {
  var mult = i*num;
  console.log(num, ' x' , i, ' = ', mult)
}