//Operadores Logicos ! O !! , and && , or ||

/*La respuesta seria 2 ya que es verdadero 
y los demas valores son falsos
*/
alert( null || 2 || undefined );

/*La respuesta seria null ya que es el primer valor falso
los demas son verdaderos
*/
alert( 6 && null && 8 );


/*
Escribe una condición “if” para comprobar que age(edad) está entre 14 y 90 inclusive.
“Inclusive” significa que la edad puede llegar a ser uno de los extremos, 14 o 90
*/

var edad = prompt('Digita tu edad');

if (edad >= 14 && edad <= 90){
alert('Felicidades')
}

/*Operador ! Not*/
alert(!0); // true
alert(!!null); // false