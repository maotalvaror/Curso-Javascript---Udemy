function Persona( nombre ) {
  this.nombre = nombre;
}

//expandir funcionalidades de Persona
Persona.prototype.decirNombre = function(){
  console.log( this.nombre ); // Maria
}


function Persona_( nombre_ ) {
  this.nombre_ = nombre_;
  this.gritarNombre = function(){
    console.log( this.nombre_.toUpperCase() ); // MARIA
  }
}

//Si no se declara con new se revienta el codigo
let nombrePersona = new Persona("Maria");
nombrePersona.decirNombre();

let nombrePersona_ = new Persona_("Maria");
nombrePersona_.gritarNombre();


console.log(nombrePersona instanceof Persona); // true
console.log(nombrePersona_ instanceof Object); //true
