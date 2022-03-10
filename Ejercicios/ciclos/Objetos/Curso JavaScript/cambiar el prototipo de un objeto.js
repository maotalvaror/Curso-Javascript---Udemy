/*
El método Object.getPrototypeOf() =
devuelve el prototipo (el valor de la propiedad interna
del objeto especificado)
*/

let gato = {
  sonido(){
    console.log("Miau!");
  },
  chillido(){
    console.log("MIAU!!!");
  }
};

let perro = {
  sonido(){
    console.log("Guau!!!");
  }
};

//Crea un nuevo objeto con los nombres y las propiedades de gato

let mascota = Object.create( gato );
console.log( Object.getPrototypeOf( mascota ) === gato ); 
//Se verifica si el nuevo objeto es igual a gato
//true

//Llama las propiedades
mascota.sonido(); // Miau!
mascota.chillido(); // MIAU!!!

//copia el objeto perro seteando el nombre y propiedades de gato
Object.setPrototypeOf( mascota, perro );
console.log(Object.getPrototypeOf( mascota ) === gato );  
//verifica si el objeto (mascota) es igual a gato
// false


mascota.sonido(); // Guau!!! unica propiedad
mascota.chillido(); // ERROR ya que  perro no contiene chillido