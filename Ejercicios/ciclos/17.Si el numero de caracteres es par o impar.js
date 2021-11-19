/*
  fun(['Yeison','raul','rodriguez','BAQUERO'])

  Salida: Imprimir por consola

  0 => yn
  1 => rl
  2 => riz
  3 => buo

*/

function llamarFuncion(arr) {
  for (let i = 0; i < arr.length; i++) {
    var palabra = arr[i]
    var primerCaracter = palabra[0]
    var ultimoCaracter = palabra[palabra.length -1]
    var concatenacion = (primerCaracter + ultimoCaracter).toLowerCase();

    if (palabra.length % 2 == 0) {
      console.log(concatenacion)
     } else {
        var Division = parseInt(palabra.length / 2);

        var concatenacionDos = (primerCaracter + palabra[Division] + ultimoCaracter).toLowerCase()
        console.log(concatenacionDos)
    }
  }
}

/*
  fun(['Yeison','raul','rodriguez','BAQUERO'])

  Salida: Imprimir por consola

  0 => YeIsOn
  1 => RaUl
  2 => RoDrIgUeZ
  3 => BaQuErO

*/

