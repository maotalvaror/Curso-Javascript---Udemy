//Hacer referencia a las propiedades de un objeto
var persona = {};
var apellido = "apellido";

persona["primer nombre"] = "Alejandra";
persona[apellido] = "Rodriguez";

console.log( persona["primer nombre"] );
console.log( persona[apellido] );


//Definir directamente

/* 
( primer nombre ) es un nombre "especial" por que
no se le puede hacer referencia a un nombre que
tenga espacio en la notacion de punto (.) saldria un error
por esta razon la notacion es con []
*/
var apellido2 = "primer apellido";

var persona2 = {
  "primer nombre": "María",
  [ apellido2 ]: "Otalvaro"
}

console.log( persona2["primer nombre"] );
console.log( persona2[apellido2] );

//Formas de llamar los objetos

var subFijo = " persona";
var ObjetoLiteral = {
  ["Primera" + subFijo]: "Elizabeth",
  ["Segunda" + subFijo]: "Yeison"
}
console.log(ObjetoLiteral["Primera persona"])
console.log(ObjetoLiteral["Segunda" + subFijo])