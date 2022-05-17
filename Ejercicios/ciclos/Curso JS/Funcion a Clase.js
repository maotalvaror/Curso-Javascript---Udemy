let miFuncion = function(){
  console.log("Hola mundo");
}
let OtraFuncion = miFuncion;

console.log(typeof OtraFuncion);

OtraFuncion();

let Persona = class{
  
  constructor(){
    this.nombre = "";
    this.edad = 15;
  }

  decirNombre(){
    console.log("Hola mundo");
  }
}

let Maria = new Persona();

console.log(typeof Maria)
console.log(Maria instanceof Persona)