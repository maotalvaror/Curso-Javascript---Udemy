/*
  crear una linea atravesada de derecha a izquierda

  Entrada: 3
  salidad:   *
            *
           *

  Entrada: 5
  salida:     *   
             *
            *
           * 
          *

*/

function llamarFuncion(numero) {
  var concatenacionAsteriscos = '';
  for (let i = 0; i < numero; i++) {
    for (let j = 0; j < numero; j++){
      if (i + j == (numero - 1)){
        concatenacionAsteriscos += '*';
      } else {
        concatenacionAsteriscos += ' ';
      }
    }
    concatenacionAsteriscos += '\n'
  }
  console.log(concatenacionAsteriscos)
  
}