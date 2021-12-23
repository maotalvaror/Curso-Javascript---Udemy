/*ATAJOS para comentarios

Control + Shift + 7       = //
Control + Shift + A       = /* */ 

//


//Alert 
//Al final con punto y coma (;)
console.log('Hola'); console.log('Mundo');

/*
Para que el codigo sea mas facil de leer
por lo general estas vienen en linea diferente
*/

console.log('Hola');
console.log('Mundo');

//En la mayoria de casos se puede omitir un punto y coma

console.log('Hola')
console.log('Mundo')

//Una nueva linea no significa (;)

console.log(3 +
  1
  + 2)

/*En este caso esta mostrando una alerta que dice ("Hello");
en la siguiente linea un array de dos posiciones, ademas de eso
un .forEach que sirve para Recorrer arrays
*/

console.log("Hello");
[1, 2].forEach(alert);

/*
En el primer alert ("Hello") no contiene (;)
por lo que este solo toma como resultado Hello
Despues de esa ejecucion aparece error
*/

console.log("Hi");
[1, 2].forEach(alert);

//Comentarios explicando lo que hace

//Este comentario ocupa una línea propia.
console.log('Hi');
console.log('World'); //sigue a la sentencia.

/* Un ejemplo con dos mensajes.
Este es un comentario multilínea.
*/
console.log('Hola');
console.log('Mundo');
 
//Este codigo esta bien ya que tiene que estar al principio

"use strict";
console.log("algo de código");

//El "use strict" de abajo es ignorado
console.log("algo de código");
"use strict";

/*----------------------------------------------------------------------*/

//TIPOS DE VARIABLES

//let

let datosPersona;

//Agregar datos a esa variable
datosPersona = "Yeison";

let edad = 32;

console.log(datosPersona)       // Yeison
console.log(edad)               // 32
console.log(datosPersona, edad) // Yeison 32

var NombreVariable2;

//const = no se puede reasignar 

const Cumpleaños = '8/8/2003';


/*
TAREAS

1.
Declara dos variables: admin y name.
Asigna el valor "John" a name.
Copia el valor de name a admin.
Muestra el valor de admin usando alert (debe salir “John”).

2.
Crea una variable con el nombre de nuestro planeta. ¿Cómo nombrarías a dicha variable?
Crea una variable para almacenar el nombre del usuario actual de un sitio web. ¿Cómo nombrarías a dicha variable?

*/

let name;
let admin;

name = "John"
admin = name

console.log(admin)



let NombrePlaneta = "Tierra"
console.log(NombrePlaneta)

let UsuarioActual = prompt('Ingrese su nombre')
console.log('Usuario:',UsuarioActual)


//Tipos de datos

/*
Una variable puede almacenar un string y despues un numero
El numero puede ser entero o flotante 
*/

let StringANumero = "Primero sera un String"
console.log(StringANumero);

StringANumero = 1234567890;
console.log(StringANumero,'Numero entero');

StringANumero = 12.43210;
console.log(StringANumero,'Numero flotante')


/*
¿Como saber cual es el tipo de dato? = typeof
*/

console.log(typeof 2)       // number
console.log(typeof 'Hola')  // string
console.log(typeof true)    // boolean
console.log(typeof 12345n)  // bigint


//Alert, prompt, confirm

//El usuario ingresa su nombre
let nombre = prompt('Ingrese su nombre');
console.log(nombre)

//El usuario confirma si trabaja o no
let nombreUsuario = confirm('¿Esta trabajando actualmente?');
console.log(nombreUsuario);


/*
Operadores Matematicos = unario, binario, operando
*/

//Unario
let NegacionUnaria = 1;

NegacionUnaria = -NegacionUnaria;
console.log( NegacionUnaria ); // -1 = negación unaria

//Binario
let binario1 = 1, binario2 = 3;
console.log( binario2 - binario1 ); // 2 = resta valores


//Suma = 7
console.log( 5 + 2 );
//Resta = 3
console.log( 5 - 2 );
//Multiplicacion = 10
console.log( 5 * 2 );
//Division = 2.5
console.log( 5 / 2 );
//Exponenciacion = 25
console.log( 5 ** 2 );


//Concatenacion
let s = "La" + " " + "Concatenacion";
console.log(s); //La Concatenacion


/* 
Comparaciones 
( < Menor que, > Mayor que, <= Menor o igual que, >= Mayor o igual que, == igual que, != Diferente a, === igualdad estricta)
*/

console.log(4 < 6) // true
console.log(6 > 7) // false
console.log("apple" < "apples") // true 
console.log("apple" > "apples") //false
console.log(4 == 4) //true
console.log("Hola" != "ola") //true
console.log( 0 === false ); //false por que cero (0) es tipo numero y false es de tipo booleano


//Sentencia if 

var edad1 = prompt('¿Su edad?', 18);

if (edad1 >= 18) {
  console.log('Eres mayor de edad');
}

//if, else
alert('Pregunta para persona menor o igual a 18 años');
var pregunta = prompt('¿Tienes 18?');

if (pregunta == 'Si') {
  console.log('Felicidades!');
} else if (pregunta == 'No'){
  console.log('Menor de edad');
}

//Operador ternario ? = Valor booleano
let edadPersona = prompt('¿Tu edad?')
let datoEdad = (edadPersona >= 18) ? true : false;

//Operador ternario ? = Mensaje
let edadPersona2 = prompt('¿Tu edad?', 18)
let datoEdad2 = (edadPersona2 >= 18) ? 'Eres Mayor de edad' : 'Eres Menor de edad';


//Operadores logicos ||, &&, !, ??

//    || = mostrara el valor verdadero que encuentre primero

let hora = prompt('Ingrese la hora actual');

if (hora < 10 || hora > 18) {
  alert( 'El centro comercial esta cerrado' );
}

let Vacio = "";
let Vacio2 = "";
let PrimerNombre = "Yeison";

console.log( Vacio || Vacio2 || PrimerNombre || "Anonimo")

//    && = Primero Mostrara el valor falso que encuentre

let hora_ = prompt('Digite la hora');
let minutos_ = prompt('Digite los minutos');

if (hora_ && minutos_ == 30) {
  console.log("La hora es 12:30");
}

//    ! = Valor contrario 
//    !! = Valor normal (true / false)

console.log(!true)        // false
console.log(!!true)       // true
console.log(!!'')         // Cadena vacia es igual a false cuando usa !!
console.log(!'Cadena')   // false


/*    ?? = Tomara la primera variable que tenga valor verdadero
  en este caso el resultado sera b = (1)
*/
var a;
var b = 1;

console.log(a ?? b)

//Tomara como resultado "k"
var v = null; 
var l;
var k = "k";

console.log(v ?? l ?? k);

//WHILE y FOR

let i = 0;
while (i < 3) { // muestra 0, luego 1, luego 2
  console.log(i);
  i++; //Aumenta de uno en uno
}

/*En el for la variable se crea dentro de los parentesis () y haci mismo aumenta con i++
en cambio el while crea la variable antes y el que aumenta dentro de las llaves {}
*/
for (let i = 0; i < 3; i++){ 
  console.log(i)
}

for (let j = 7; j > 0; j--){
console.log(j)
}

//Sentencia Switch

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


//Funciones
let NombreUsuario = prompt('Ingrese su nombre');

function FuncionSaludo() {
  let Mensaje = 'Hola, ' + NombreUsuario;
  console.log(Mensaje);
}

FuncionSaludo();

// Cambiar la variable externa
let NombreIngresado = 'Juan';

function CambiarNombre() {
  NombreIngresado = "Bob"; // <= Cambio a bob

  let MensajeSaludos = 'Hola, ' + NombreIngresado;
  console.log(MensajeSaludos);
}

console.log( NombreIngresado ); // Juan antes de llamar la función

CambiarNombre();

console.log( NombreIngresado ); // Bob, el valor fué modificado por la función

// Operadores matematicos con funciones
function suma(a, b) {
  return a + b;
}

function resta(c, d) {
  return c - d;
}

function mult(e, f) {
  return e * f;
}

function division(g, h) {
  return g / h;
}

function modulo(i, j) {
  return i % j;
}

function potencia(k, l) {
  return k ** l;
}

//funciones en flecha

let sumaFuncionFlecha = (a, b) => a + b;
console.log( sumaFuncionFlecha(6, 7) ); // 13

//Objetos Ejercicios
var Usuarionombre = 'Elizabeth';
var edadUsuario = 52;

var datosUsuario = {
  nombre: Usuarionombre,
  edad: edadUsuario,
}
console.log(datosUsuario);

//para quitar una propiedad de un objeto =

var Usuarionombre2 = 'Welmen';
var edadUsuario2 = 47;

var datosUsuario2 = {
  nombre: Usuarionombre2,
  edad: edadUsuario2,
}
console.log(datosUsuario2);

delete datosUsuario2.edad;

console.log(datosUsuario2);
console.log(Usuarionombre2.length);

//Objetos = Comparacion por referencia

//Copia de referencia
let ab = {};
let bc = ab; //Copia

alert( ab == bc );  // resultado = true ya que b copio la referencia de a 
alert( ab === bc ); // Comparacion estricta

//Independientes
let abc = {};
let bcd = {};
alert( abc == bcd ); // false por que son independientes

//Objetos
let user = {
  Firstname: "Usuario",
  dato: {
    altura: 182,
    Cumple: '1989/01/13'
  }
}
console.log( user); 
console.log( user.dato.altura); 