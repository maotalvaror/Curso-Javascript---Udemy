/*
  crear un cuadro con una equis ( x ) de por medio.

  Entrada: 21
  Salida:

  **********
  **      **
  * *    * *
  *  *  *  *
  *   **   *
  *   **   *
  *  *  *  *
  * *    * *
  **      **
  **********

  */

function llamarFuncion(numero) {
  console.clear()
  var concatenacionAsteriscos = '';

  for (let i = 0; i < numero; i++){
    for (let j = 0; j < numero; j++){
      if ( (i == 0) || (i == j) ||  (j == (numero - 1)) || (j == 0) || (i == (numero - 1)) ||  (i+j== (numero - 1))){
        concatenacionAsteriscos += '*';
      } else {
        concatenacionAsteriscos += ' ';
      }
    }
    concatenacionAsteriscos += '\n'
  }
  console.log(concatenacionAsteriscos)
}
