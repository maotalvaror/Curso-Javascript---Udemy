/*
Entrada => 'Elizabeth'

salida: 'Eli'
        'zab'
        'eth'

nombre = 'Elizabeth'
nombre[0] + nombre[1] + nombre[2] = 'Eli'
nombre[3] + nombre[4] + nombre[5] = 'zab'
nombre[6] + nombre[7] + nombre[8] = 'eth'



Entrada => 'yeison' 

salida: 'yei'
        'son'

nombre = 'Elizabeth'
nombre[0] + nombre[1] + nombre[2] = 'yei'
nombre[3] + nombre[4] + nombre[5] = 'son'
*/


function main(palabraingresada) {
  var indice = 0;

  if (palabraingresada.length % 3 == 0) {
    var iteraciones = palabraingresada.length / 3;
    for (let i = 0; i < iteraciones; i++) {
      console.log(palabraingresada[indice] + palabraingresada[indice + 1] + palabraingresada[indice + 2])
      indice += 3
    } 
  } else {
    console.log('La cantidad de caracteres de la palabra no es multiplo de tres')
  }
}

// main('Yeison')
