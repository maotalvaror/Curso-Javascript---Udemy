function Persona (nombre){
  this.nombre = nombre;

  this.decirNombre_= function(){
    console.log(this.nombre);
  }
}

Persona.prototype.decirNombre = function(){
  console.log(this.nombre);
}

var nom = new Persona("Maria");

nom.decirNombre_();
nom.decirNombre();

console.log(nom instanceof Persona);
console.log(nom instanceof Object);