//nos permite ejecutar esto en una forma más corta y simple.

/*Usando el constructor if..else, escribe un código que obtenga a través de un prompt un número
 y entonces muestre en un alert:

  1, si el valor es mayor que cero,
  -1, si es menor que cero,
  0, si es igual a cero.

En la tarea asumimos que siempre el usuario introduce un número.*/

var numero = prompt('Digite un numero');

if (numero == 0){
  alert('el numero es cero');
} else if (numero == 1){
  alert('El numero es 1')
} else if (numero == -1){
  alert('es menor que cero');
}

/* Usando el constructor if..else, escribe el código que pregunta:
 ‘¿tienes sueño?’

Si el usuario escribe “Si”, entonces muestra: “Duerme un poco”,
 de lo contrario muestra: “Haz tus deberes”*/


var pregunta = prompt('¿Tienes sueño?');

if (pregunta == 'Si' || pregunta == 'SI' || pregunta == 'si' ){
  alert('Descansa')
} else {
  alert('Haz tus deberes')
}


/*Reescriba esta condición if usando el operador ternario '?':

let result;

if (a + b < 4) {
  result = 'Debajo';
} else {
  result = 'Encima';
}
*/

var result;
var a = prompt('Digite el primer valor');
var b = prompt('Digite el segundo valor');

result = a + b <= 4 ? 'Los dos valores sumados son menores a 4' : 'Los dos valores sumados son Mayor o igual a 4';

alert(result)

/*
Reescriba el if..else utilizando operadores ternarios múltiples '?'.

Para legibilidad, es recomendad dividirlo en múltiples lineas de código.

let message;

if (login == 'Empleado') {
  message = 'Hola';
} else if (login == 'Director') {
  message = 'Felicidades';
} else if (login == '') {
  message = 'Sin sesión';
} else {
  message = '';
}
*/

let Resultado = prompt('que haces');

var a = (Resultado == 'Trabajo') ? 'Muy bien'
: (Resultado == 'Duermo') ? 'que descanses' 
: (Resultado == 'Nada') ? 'Tienes deberes' :
 '';

alert(a);