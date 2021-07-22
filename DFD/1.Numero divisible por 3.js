//instrucción para solicitar los datos al usuario 
console.log('Programa que recibe 3 numeros y verifica si son divisibles por 3');

const numArr = [];

var numerosProcesar = prompt("Digite cantidad de numeros a procesar");

if (numerosProcesar.length) {
  var _numeroProcesar = parseInt(numerosProcesar);

  for(let i=0; i < _numeroProcesar; i++){
    var numIngresado = parseInt(prompt("Digite numero " + i.toString()));

    numArr.push(numIngresado);
  }
  
  for(let j=0; j < _numeroProcesar; j++){
    const num = numArr[j];
    if(num % 3 == 0){
      console.log(num,' Si es divisible por 3')
    }
  }
}