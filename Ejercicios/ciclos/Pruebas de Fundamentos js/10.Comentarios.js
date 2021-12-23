/*
Estos comentarios deben ser cortos pero a la vez que expliquen lo que hace
*/

//cuales numeros son primos dentro del que ingreso
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

//Retorna valor booleano (true / false)
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}


/*
Potencia dependiendo el parametro x
 que es el numero por el cual se multiplicara
Parametro n 
  que es la cantidad de veces que se multiplicara

pow(3, 2) = (3 * 3)             = 9       : (²)
pow(2, 3) = (2 * 2 * 2)         = 8       : (³)
pow(3, 5) = (3 * 3 * 3 * 3)     = 81      : (⁴)

*/

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}