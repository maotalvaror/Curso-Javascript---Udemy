/*
  1. fun(['Yeison','raul','rodriguez','BAQUERO'])

    Salida: Imprimir por consola

    => Yeison rodriguez
    => raul BAQUERO


  2.

    fun(['Yeison','raul','rodriguez','BAQUERO', 'otro'])

    Salida: Imprimir por consola

    => Yeison rodriguez otro
    => raul BAQUERO
  3.

    fun(['Yeison','raul','rodriguez','BAQUERO', 'otro', 'otro2'])

    Salida: Imprimir por consola

    => Yeison rodriguez otro
    => raul BAQUERO otro2
*/


function llamarFuncion(arr) {
  var concatenacion = '';
  var concatenacion2 = '';

  var palabra = ''

  for (let i = 0; i < arr.length; i++) {
    palabra = arr[i];
    
    if(palabra){
      if(i % 2 == 0) {
        concatenacion = concatenacion + palabra + ' ';
      } else {
        concatenacion2 = concatenacion2 + palabra + ' ';
      }
    }
  }
  
  console.log(concatenacion)
  console.log(concatenacion2)
}