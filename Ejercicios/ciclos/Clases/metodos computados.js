let nombreMetodo = "gritarNombre";

class Persona{
  constructor( nombre ){
    this.nombre = nombre;
  }
  [ nombreMetodo ](){
    console.log(this.nombre.toUpperCase());
  }
  static crear( nombre ){
    return new Persona(nombre);
  }
}

let yo = Persona.crear("Maria");
console.log(yo)
