// Math.abs = Devuelve el valor absoluto de un número
// Ejemplo = Math.abs( 4.3234432 - 1.12334324 ); = 3.2000999599999997

// Math.ceil = Devuelve el entero MAYOR o igual de un número ( mas proximo )
// Ejemplo = Math.ceil( 4.1 ) = 5

// Math.exp = Devuelve ex donde x es el argumento y e es el número de Euler
// Ejemplo = Math.exp(0); = 1

// Math.floor = Devuelve el MINIMO entero o igual a un número
// Ejemplo = Math.floor(-2.212); = -3

// Math.imul = Devuelve una multiplicacion entre dos parametros A y B
// Ejemplo = Math.imul(6, 9); = 54

// Math.log = Devuelve la base neutral de un número
/* Ejemplo =

function BaseNeutral(x, y) {
  return Math.log(y) / Math.log(x);
}
// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));

*/

// Math.max = Devuelve el número mayor de cero o mas numeros dados
// Ejemplo = Math.max(1, 2, 3); = 3

// Math.min = Devuelve el número menor de cero o mas numeros dados
// Ejemplo = Math.min(-23, -328938, -21, -19);  = -328938

// Math.PI = Devuelve la longitud de la circunferencia de un circulo dependiendo su radio
/* Ejemplo =

function CalcularCircunferencia(num_veces, radio){
  return num_veces * Math.PI * radio;
}

console.log(CalcularCircunferencia(4, 3));
*/

// Math.pow = Devuelve la base elevada al exponente
/* Ejemplo =

function BaseElevada(base, exp){
  return  Math.pow(base, exp);
}
*/

// Math.random = Devuelve numeros aleatorios dependiendo el min y max
/* Ejemplo =

function NumerosAleatorios(min, max) {
  return Math.random() * (max - min) + min;
}
*/

// Math.sqrt = Devuelve la raiz cuadrada
// Ejemplo = Math(49); = 7