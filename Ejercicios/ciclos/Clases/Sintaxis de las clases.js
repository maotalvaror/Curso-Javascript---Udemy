// let Persona = class{
//   constructor(){
//     this.nombre = "";
//     this.apellido = "Otalvaro"
//     this.edad = 15;
//   }
//   decirNombre(){
//     console.log("Hola");
//   }
// }
// let nombre_ = new Persona();
// console.log(typeof nombre_);
// console.log(nombre_ instanceof Persona);

class Persona_{
  constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 15;
  }
  decirNombre(){
    console.log(this.nombre, this.apellido, this.edad);
  }

  static CrearPersona(nombre, apellido, edad){
    if (isNaN(edad)){
      throw new Error('La edad no es válida.')
    }

    var p = new Persona_(nombre, apellido);
    p.edad = edad;

    return p
  }
}


let maria = new Persona_("Maria", "Otalvaro");
maria.decirNombre();


var p = Persona_.CrearPersona('yeison', 'rodriguez', 33);

p.decirNombre()
