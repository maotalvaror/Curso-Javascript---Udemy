function llamarFuncion(numero) {
  var concatenacionAsteriscos = '';
  for (let i = numero; i >= 1; i--) {
    for (let j = 0; j < numero; j++) {
      if (j == (numero-1) || j == 0 || i == numero || i == 1 || i == j){
        concatenacionAsteriscos += '*';
        } else {
          concatenacionAsteriscos += ' ';
        }
    }concatenacionAsteriscos += "\n"
    }
    console.log(concatenacionAsteriscos)
      concatenacionAsteriscos = '';
  }
