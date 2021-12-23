//Crear objetos vacios
let Objeto = new Object();
let objeto2 = {}

//Objetos con propiedades
let ObjetoConPropiedades = {
  nombre: "Yeison",
  edad: 32
};
console.log(ObjetoConPropiedades)

//Propiedades con valor booleano

function fn(){
let PropiedadesBooleanas = {
  Propiedad1: false,
  Propiedad2: true
}
console.log(PropiedadesBooleanas)
}

/*TAREAS

Crea un objeto user vacío.
Agrega la propiedad name con el valor John.
Agrega la propiedad surname con el valor Smith.
Cambia el valor de name a Pete.
Remueve la propiedad surname del objeto.
*/

function func() {
  console.log('Objeto sin cambio de nombre')
  let user = {};
  user.name = "Jhon"; // con punto (.)
  user["surname"] = "Smith"; // con corchetes ( [] )
  console.log(user)
}

function func2() {
  console.log('Se cambia el nombre a "Pete" y se elimina username (Smith)')  
  let user = {};

  user.name = "Jhon";
  user.surname = "Smith";
  
  user.name = "Pete";
  delete user.surname;
  console.log(user)
}

//Referencia Comparaciones

let a = {};
let b = a; // la variable b copia la referencia (a)

// true (verdadero) por que b esta copiando el valor de a, de esta manera si son iguales
alert( a == b );  

//Objetos independientes

let aIndependiente = {};
let bIndependiente = {};

//false (falso) por que son objetos independientes
alert(aIndependiente == bIndependiente)

//Reescribir una propiedad

let datosPersona = { name: "John" };

Object.assign(datosPersona, { name: "Pete" });

alert(datosPersona.name);

//acceder al objeto o propiedad que deseemos 
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }, 
  Datos: {
    nombre: "alejandra",
    edad: 14,
  }
};

console.log( user);
console.log( user.sizes.width);
console.log( user.Datos);
console.log( user.name);


alert('Hola'), alert('Mundo')