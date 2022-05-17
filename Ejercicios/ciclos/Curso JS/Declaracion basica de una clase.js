//Declaracion
class Persona{
  constructor(nombre){
    this.nombre = nombre;
  }
  decirNombre(){
    console.log(this.nombre);
  }
}
let nom = new Persona("Maria");

nom.decirNombre(); //Maria

//instance of = confirmar el tipo de un objeto

console.log(nom instanceof Persona); //true
console.log(nom instanceof Object); //true
console.log(typeof Persona) //function

