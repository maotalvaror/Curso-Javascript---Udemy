class Persona{
  constructor( nombre ){
    this.nombre = nombre;
  }
  decirNombre(){
    console.log(this.nombre);
  }
  static crear( nombre ){
    return new Persona(nombre);
  }
}

let NombrePersona = Persona.crear("Maria");
console.log(NombrePersona)