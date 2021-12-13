/*
  crear una linea atravesada de izquiera a derecha

  Entrada: 3
  salidad: *
            *
             *

  Entrada: 5
  salida: *   
           *
            *
             * 
              *

*/

function llamarFuncion(numero) {
  var concatenacionAsteriscos = ''
  for (let i = 0; i < numero; i++) {
    for (let j = 0; j < numero; j++) {
      if ( i == j){
        concatenacionAsteriscos += '*';
      } else {
        concatenacionAsteriscos += ' ';
      }
    }
    console.log(concatenacionAsteriscos)
    concatenacionAsteriscos = '';
  }
}
