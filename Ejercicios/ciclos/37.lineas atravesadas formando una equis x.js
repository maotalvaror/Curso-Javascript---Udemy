/*
  crear una linea atravesada de derecha a izquierda

  Entrada: 3

  salidad: * *
            *
           * *

  Entrada: 7

  salida: *     *
           *   * 
            * *  
             *   
            * *  
           *   * 
          *     *


*/

function llamarFuncion(numeroRecibido) {
  var concatenacion = '';
 if ( numeroRecibido % 2 != 0){
  for (let i = 0; i < numeroRecibido; i++) {
    for (let j = 0; j < numeroRecibido; j++){
      if (i + j == (numeroRecibido - 1) || i == j){
        concatenacion += '*';
      } else {
        concatenacion += ' ';
      }
    }
    concatenacion += '\n'
  }
  console.log(concatenacion)
  } else {
    console.log('El programa solo funciona si el numero ingresado es Impar')
  }
 }