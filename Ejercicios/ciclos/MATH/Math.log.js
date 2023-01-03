/*

DEVUELVE LA BASE NEUTRAL DE UN NUMERO

  Multiplica el 2 la cantidad de veces necesarias hasta que de como resultado 8
  en este caso son 3 veces
  
  Math.log(2, 8); = 2*2*2 = 8 = 3

*/

function BaseNeutral(x, y){
  return Math.log(y) / Math.log(x);
}