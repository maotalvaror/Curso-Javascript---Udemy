/*
Entrada => 'Yeison'

salida: 'Ye'
        'is'
        'on

nombre = 'Yeison'
nombre[0] + nombre[1] = 'Ye'
nombre[2] + nombre[3] = 'is'
nombre[4] + nombre[5] = 'on'

nombre = 'Maria'
nombre[0] + nombre[1] = 'Ma'
nombre[2] + nombre[3] = 'ri'
nombre[4] + nombre[5] = 'a'
*/


var palabra = prompt('Digite una palabra');
var longuitud = palabra.length;

var iteraciones = Math.round(longuitud / 2)

var indice = 0;

for (let index = 0; index < iteraciones; index++) {  
  if (index == (iteraciones - 1) &&  longuitud % 2 != 0 )
    console.log(palabra[longuitud - 1])
  else
    console.log(palabra[indice] + palabra[indice + 1])
    indice += 2  
}

