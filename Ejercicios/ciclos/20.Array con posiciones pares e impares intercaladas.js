/* 1. fun(['Yeison','raul','rodriguez','BAQUERO'])

    Salida: Imprimir por consola

    => Yeison Rodriguez
    => Raul Baquero

  2.

    fun(['Yeison','raul','rodriguez','BAQUERO', 'otro'])

    Salida: Imprimir por consola

    => Yeison Rodriguez Otro
    => Raul Baquero  
*/

function llamarFuncion(arr) {
  var concatenacion = '';
  var concatenacion2 = '';

  var palabra = '';

  for (let i = 0; i < arr.length; i++) {
    palabra = arr[i];

    if(palabra){
      nueva_palabra = palabra[0].toUpperCase() + palabra.substring(1, palabra.length).toLowerCase();

      if(i % 2 == 0) {
        concatenacion = concatenacion + nueva_palabra + ' '
      } else {

        concatenacion2 = concatenacion2 + nueva_palabra + ' ';
      }
    }
  }
  console.log(concatenacion)
  console.log(concatenacion2)
}