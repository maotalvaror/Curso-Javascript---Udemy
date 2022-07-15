//Estructura de Código
alert('Hola'); alert('Mundo');

/*El Salto de linea tambien sirve para
reemplazar Punto y coma (;) 
*/
alert('Hola')
alert('Mundo')

//Error por no tener (;)
alert('Error por que este mensaje no tiene ;');
[1, 2].forEach(alert);

/*-----------------------------------------------------------------------*/

//Variables =estas variables pueden almacenar cualquier valor
let a = 2;
const b = 'Texto';
var c = true;

/*tipos de datos

number = Numeros (1, 2, 3, 4, etc);
string = 'Texto';
boolean = true / false;
null = (vacio o no existe)
undefined = (No asignado)
object = {}
*/

/*-----------------------------------------------------------------------*/

/*Interacciones = Donde el usuario pueda ingresar lo que se requiera para
el programa ya sea un string, numero... etc


prompt() // mensaje: string

confirm() // mensaje: string

//Hace una pregunta, y sugiere elegir entre Aceptar y Cancelar entonces tendria valor booleano (true/false)
*/

//if

let edad2 = prompt('Ingrese su Edad');

if (edad2 == 18){
  alert("Numero");
} else if (edad2 == '18'){
  alert("String");
} else{
  alert('Si el usuario no ingreso (18) Aparecera este mensaje');
}

//Funciones
function suma(a, b) {
  let resultado = a + b;

  return resultado;
}
