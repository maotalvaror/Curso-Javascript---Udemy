/*
  fun(['Yeison','raul','rodriguez','BAQUERO'])

  Salida: Imprimir por consola

  0 => N
  1 => l
  2 => Z
  3 => o

*/

function LlamarFuncion(arrayPalabras) {
  for (let i = 0; i < arrayPalabras.length; i++) {
    var palabra = arrayPalabras[i]   
    var UltimoCaracter = palabra[palabra.length - 1];
    
    var letra;

    if (i % 2 == 0) {
      letra = UltimoCaracter.toUpperCase()
      console.log(letra)
    } else {   
      letra = UltimoCaracter.toLowerCase()
      console.log(letra)
    }
  }
}