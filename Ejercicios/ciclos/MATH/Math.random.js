/*
DEVUELVE NUMEROS ALEATORIOS DEPENDIENDO EL MIN Y MAX 
El valor devuelto será mayor o igual que min y menor que max.
*/

function numerosAleatorios(min, max){
  return Math.random() * (max - min) + min;
}