/*  
    1. fun(['Yeison','raul','rodriguez','BAQUERO'])

    Salida: Imprimir por consola

    => Yeison Baquero
    => Raul Rodriguez
    => Rodriguez Raul
    => Baquero Yeison
*/

function llamarFuncion(arr) {
  var palabra = ''
  for (let i = 0; i < arr.length; i++) {
    palabra = arr[i] + ' ';
    palabra += arr[(arr.length - 1) - i]
    
    console.log(palabra)
  }
}