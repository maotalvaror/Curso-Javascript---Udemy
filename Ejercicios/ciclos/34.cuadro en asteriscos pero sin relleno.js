/*
  crear un cuadro sin su relleno de acuerdo con el parametro de entrada

  Entrada: 3
  salidad: ***
           * *
           ***

  Entrada: 5
  salida: *****
          *   *
          *   *
          *   *
          *****

*/

function llamarFuncion(numero) {
  if (numero >= 2) {
    var concatenacionAsteriscos = '';
    
    for (let i = numero; i >= 1; i--){
      for (let j = 0; j < numero; j++){
      if (j == (numero-1) || j == 0 || i == numero || i == 1){
        concatenacionAsteriscos += '*';
        } else {
          concatenacionAsteriscos += ' ';
        }
      }concatenacionAsteriscos += "\n"
    }
    console.log(concatenacionAsteriscos)
      concatenacionAsteriscos = '';
  } else {
    console.log('El numero que digite debe de ser mayor o igual a Dos (2)')
  }
}