//new.target = asegura de que el objeto siempre sea declarado con el objeto new cuando sea necesario

function Persona(nombre) {
  if( typeof new.target !== "undefined" ){
    this.nombre = nombre;
  } else {
    throw new Error('Esta función, debe ser utilizada con el new'); 
    // throw = Lanza una excepción, especificando el valor al cual se le pasara
  }

  this.nombre = nombre;

}

var persona = new Persona("Alejandra");
var NoEsPersona = Persona.call( persona, "Alejandra" );
// .call = permite que una función/método que pertenece a un objeto, sea asignada y llamada para un objeto diferente.