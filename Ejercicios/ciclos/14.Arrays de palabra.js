/*
  fun(['Yeison','raul','rodriguez','BAQUERO'])

  Salida: Imprimir por consola

  Yeison
  Raul
  Rodriguez
  Baquero

*/


function llamarFuncion(arr) {
  for (let i = 0; i < arr.length; i++) {
    var M = arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length).toLowerCase();
    console.log(M)
  }
}