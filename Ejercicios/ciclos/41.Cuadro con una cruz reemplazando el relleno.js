/* LlamarFuncion(9);
Salida:
  *********
  *   *   *
  *   *   *
  *   *   *
  *********
  *   *   *
  *   *   *
  *   *   *
  *********
*/
function llamarFuncion(numero) {
  var concatenacionAsteriscos = '';
  if ( numero % 2 != 0){
  var Resultado = parseInt(numero / 2);
  
  for (let a = 0; a < numero; a++){
    for (let b = 0; b < numero; b++){
    if (b == (numero - 1) || b == 0 || a == (numero -1) || a == 0 || a == Resultado || b == Resultado){
        concatenacionAsteriscos += '*';
      } else {
        concatenacionAsteriscos += ' ';
      }
    }
    concatenacionAsteriscos += '\n';
  }
  console.log(concatenacionAsteriscos);
} else {
  console.log('El numero debe de ser IMPAR');
  }
}

/*
var nuevaVariable = parseInt(numero / 2 + 1);
    => parseInt(7 / 2 + 1)
      => 3.5 = 3 + 1 = 4

    => parseInt(9 / 2 + 1)
      => 4.5 = 4 + 1 = 5
*/