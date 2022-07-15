class Persona{
  constructor(nombre){
    this.nombre = nombre;
  }
  //Persona.prototype.decirNombre
  decirNombre(){
    console.log( this.nombre.toUpperCase() );
  }
}

let nombrePersona = new Persona("Maria");
nombrePersona.decirNombre();


class DatosPersona{
  constructor(apellido){
    this.apellido = apellido;
  }
  decirApellido(){
    console.log( this.apellido.toLowerCase() );
  }
}

let apellidoPersona = new DatosPersona("OTALVARO");
apellidoPersona.decirApellido();


console.log(nombrePersona instanceof Persona);
console.log(apellidoPersona instanceof DatosPersona);

console.log(typeof Persona);
console.log(typeof Persona.prototype.decirNombre);