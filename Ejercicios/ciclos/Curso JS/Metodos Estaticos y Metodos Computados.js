/*
Los metodos estaticos =
Son metodos que se pueden llamar sin inicializar una nueva clase
*/
class Persona{
  constructor( nombre ){
    this.nombre = nombre;
  }
  decirNombre(){
    console.log( this.nombre );
  }

  static crear( nombre ){
    return new Persona(nombre);
  }
}

let yo = Persona.crear( "Alejandra" );
//Se crea un objeto con la clase Persona y este contiene el nombre
console.log(yo);


/*
Los metodos computados =
son metodos cuyo nombre se puede definir atraves de una variable
*/

let nombreMetodo = "gritarNombre";

class Persona_2{
  constructor( nombre2 ){
    this.nombre2 = nombre2;
  }
  decirNombre2(){
    console.log(this.nombre2);
  }
  [ nombreMetodo ](){
    console.log(this.nombre2.toUpperCase())
  }
  static crear(nombre2){
    return new Persona_2(nombre2);
  }
}

let yo_ = Persona_2.crear( "Alejandra" );
console.log(yo_);
