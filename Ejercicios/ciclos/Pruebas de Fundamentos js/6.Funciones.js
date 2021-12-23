//Funciones
//Recibe parametros y tambien se queda vacia

function PruebaFn() {
  alert( 'Prueba de la funcion' );
}

//"Variables Locales"
function Prueba() {
  let MensajeFinal = "Prueba de variables";
  alert( MensajeFinal );
  //MensajeFinal();// "Prueba de variables"
}

function pruebaFuncion(NombreUsuario) {
  let SaludoNombreIngresado  = 'Hola, ' + NombreUsuario;
  alert(SaludoNombreIngresado);
}


function Mensajes(Persona, texto) {
  alert(Persona + ' = ' + texto);
}
//llamando la Funcion
Mensajes('Juanito', 'Hola');
Mensajes('Pepito', 'Como esta');


