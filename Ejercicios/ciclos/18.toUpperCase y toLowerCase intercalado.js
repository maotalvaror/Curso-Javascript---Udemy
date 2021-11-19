/*
  fun(['Yeison','raul','rodriguez','BAQUERO'])

  Salida: Imprimir por consola

  0 => YeIsOn
  1 => RaUl
  2 => RoDrIgUeZ
  3 => BaQuErO

*/

function llamarFuncion(arr) {
  var cadena = '';
  for (let i = 0; i < arr.length; i++) {
    var palabra = arr[i];

    for (let j = 0; j < palabra.length; j++) {
      
      if (j % 2 == 0){
        cadena += palabra[j].toUpperCase()
      } else {
        cadena += palabra[j].toLowerCase()
      }

    } 
    
    console.log(cadena)
    cadena = '';
  }
}