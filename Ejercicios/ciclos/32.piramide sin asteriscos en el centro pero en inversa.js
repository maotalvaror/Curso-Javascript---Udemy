function llamarFuncion(numero) {
  var VecesIteracion = 1;
  var concatenacionAsteriscos = '';

  for (let i = numero; i >= 0; i--){
    VecesIteracion = i + (i - 1)
    for (let j = 0; j < VecesIteracion ; j++) {
      if (j == (VecesIteracion-1) || j == 0 || i == numero || i == 1) {
      concatenacionAsteriscos += '*';
     } else {
      concatenacionAsteriscos += ' ';
      }
    }
    
    Espacios = ( numero - i  );
    concatenacionAsteriscos = "".padStart(Espacios, ' ') + concatenacionAsteriscos + "".padEnd(Espacios, ' ')
    console.log(concatenacionAsteriscos)
    concatenacionAsteriscos = '';
  }
}