console.log('Recibe cantidad de numeros elegidos por usuario y verifica si alguno de los que digito son divisibles por 3');
var numeros = parseInt(prompt('Digite la cantidad de numeros'));

var arreglo = [];
var resultado = 0;

for (let i = 0; i < numeros; i++) {
  var numArr = parseInt(prompt(`Digite el numero ${i+1}`))
  arreglo.push(numArr);
}

for (let j = 0; j < numeros; j++) {
  resultado = arreglo[j] % 3;

  if (resultado == 0) {
    console.log('El numero',arreglo[j],' SI es divisible por 3')
  } else {
    console.log('El numero',arreglo[j],'NO es divisible por 3')
  }
}