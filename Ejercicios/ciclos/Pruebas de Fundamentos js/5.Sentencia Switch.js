/*
Si el usuario ingresa (0) Dira 'Cero',
 si ingresa (1) Dira 'Uno',
  si ingresa (2) Dira 'Dos',
   si no se cumple ninguno Dira 'Valor desconocido'
*/

let valorIngresado = prompt("Ingrese un valor");

switch (valorIngresado) {
  case '0':
    alert( 'Cero' );
    break;
  case '1':
    alert( 'Uno' );
    break;
  case '2':
    alert( 'Dos' );
    break;

  default:
    alert( 'Valor desconocido' );
}

/*
Reescribe el código utilizando solo un argumento switch:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

let num = +prompt('Digite un numero');

switch (num) {
  case 0:
    alert( 'Numero Cero' );
    break;

  case 1:
    alert( 'Numero Uno' );
    break;

  case 2:
    alert( 'Numero Dos' );
    break;
  
  case 3:
    alert( 'Numero Tres' );
    break;
  
  case 4:
    alert('Numero Cuatro')

  }