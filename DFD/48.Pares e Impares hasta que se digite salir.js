console.log('Recibe la cantidad de palabras que desee el usuario siempre y cuando no digite salir; Despues de esto las palabras digitadas se concatenan segun si son pares o impares');
var palabra = prompt('Digite una palabra para continuar');
var Iteracion = 0;
var PalabrasPares = '';
var PalabrasImpares = '';

while (palabra != 'salir') {
  if (Iteracion % 2 == 0) {
    PalabrasPares += ' ' + palabra;
  } else {
    PalabrasImpares += ' ' + palabra;
  }
  palabra = prompt('Digite otra palabra, sino digite "salir"');
  Iteracion = Iteracion + 1;
} 

console.log(PalabrasPares);
console.log(PalabrasImpares);
