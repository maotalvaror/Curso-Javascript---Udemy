/*La función reductora recibe cuatro argumentos:

    1. Acumulador = acumula el valor devuelto por la función
    2. Valor Actual = El elemento actual que está siendo procesado en el array
    3. Indice Actual = El índice del elemento actual que está siendo procesado en el array.
    4. Array = El array sobre el cual se llamó el método
*/

//ejecuta una función reductora sobre cada elemento de un array, 
//devolviendo como resultado un único valor.

const valor_principal = 0;
let array_numeros = [1, 2, 3, 4];

const sumatoria = array_numeros.reduce(
  (_a, _b) => _a + _b,
  valor_principal
);

console.log(sumatoria);

// Con parametro inicial con un valor string vacio, no es requerido porque por defecto es un string vacio
// Se deja con fines educativos y de entendimiento 
const cadena = array_numeros.reduce(
  (_a, _b) => `${_a}${_b}`,
  ""
);
console.log(cadena);


array_numeros.push(5, 6, 7, 8, 9, 10, 11, 12)
const numeros_pares_concatenados = 
  array_numeros
    .filter(num => num % 2 == 0)
    .reduce((_a, _b) => {
      console.log(`_a: ${_a},  b: ${_b}`);
      return `${_a}${_b}` 
    }, "Numeros Pares: ");

console.log(numeros_pares_concatenados);

// _a = (acumulador) 
// _b = (valor actual) que se esta procesando en el array