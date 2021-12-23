/*Expresiones Logicas Booleanas =
Los tres primeros ejemplos son true
*/

//True (Verdadero)

alert(true || true); 
alert(false || true);
alert(true || false);

/*Expresiones Logicas Booleanas =
Excepto si los dos operadores son false
*/

//False (Falso)

alert(false || false);

/*
El uno (1) es verdadero en cambio el cero (0) siempre sera falso
*/
var a = prompt('Digite 1 o 0')

if (a == 1 || a == 0){
alert('valor verdadero')
}


let hora = prompt('Digite un numero');

if (hora < 5 || hora > 22) {
  alert( 'El centro comercial esta cerrado' );
}
/*________________________________________________________________________________________________________

AND &&
*/

//Otro caso de Operadores logicos

//True (Verdadero)

alert(true && true);

//False (Falso)

alert(false && true);
alert(true && false);
alert(false && false);

/*________________________________________________________________________________________________________

NOT ! o tambien !!
*/

//Convierte el operando al tipo booleano (true o false) ademas de eso retorna el valor contrario

//Uno !
alert(!true); //Devuelve Falso
alert(!0); //Devuelve True

//Doble !!
alert(!!"cadena de texto no vacía"); //Devuelve true
alert(!!null); //false