//ECMAScript 5

function crearPersona( nombre, apellido, edad ) {
  return {
    nombre: nombre,
    apellido: apellido,
    edad: edad
  }
}

var DatosPersona = crearPersona("Maria", "Otalvaro", 14);
console.log(DatosPersona);

//ECMAScript 6

function crearPersona2( nombre2, apellido2, edad2 ) {
  return {
    nombre2,
    apellido2,
    edad2
  }
}

var DatosPersona2 = crearPersona2("Elizabeth", "Baquero", 52);
console.log(DatosPersona2);
