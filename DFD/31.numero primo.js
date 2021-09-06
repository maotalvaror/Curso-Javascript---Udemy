console.log('Programa que recibe un numero y me dice si es primo o no')
var numero = parseInt(prompt('Digite un numero'));

function primo(numero) {
  var conteo = 0;

  for (let i = 0; i <= numero; i++) {
    if (numero % i == 0) {
      conteo = conteo + 1;
    }
  } 
  
  if (conteo > 2 ) {
    console.log('NO es primo')
  } else {
    console.log('SI es primo')
  }
}

primo(numero)