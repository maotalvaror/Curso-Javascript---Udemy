console.log(document.title); //muestra el titulo de la pagina
document.title = 'Prueba de titulo'; //cambia el titulo de la pagina
console.log(document.title);//llama al nuevo nombre de la pagina
console.log(document.body); //muestra todo el cuerpo de la pagina
var h1 = document.getElementsByTagName('h1'); //Dice cuantos <h1></h1> hay en el programa
console.log(h1);//Dice cuantos <h1></h1> hay en el programa añadiendose otro.
h1[0].innerHTML = 'Prueba'; //en el encabezado de <h1></h1> se le cambio el nombre
console.log(h1)//Ya cambiado el nombre 
var botón = document.getElementById('botón');//que se pueda visualizar el boton en la consola
console.log(botón);//lo llama para poder visualizarlo en consola
botón.addEventListener('click', mensaje);
function mensaje (){//muestra una alerta de tipo mensaje 
  alert('Mensaje'); //muestra entre '' (comillas simples) el tipo de mensaje que se mostrara en la alerta
}