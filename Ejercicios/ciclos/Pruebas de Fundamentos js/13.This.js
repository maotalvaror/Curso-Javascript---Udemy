//Forma de usar objetos
usuario = {
  FuncionUsuario: function() {
    alert("Hello");
  }
};

usuario = {
  FuncionUsuario() {
    alert("Hello");
  }
};
console.log(usuario)

//This = Durante la ejecucion this es el objeto user
let usuarioThis = {
  nombre: "lesdy",
  edad: 30,

  saludo() {
    // "this" es el "objeto actual"
    alert(this.name);
  }

};


//User en vez de this


let user = {
  name: "Mariana",
  age: 30,

  FuncionUsuario2() {
    alert(user.name); // "user" en vez de "this"
  }

};

//Funcion constructora

function User2() {
  alert(new.target);
}

/*
sin new =

function User() {
  alert(new.target);
}
*/
User2(); // undefined

//con new
new User2();

/*sin paréntesis
let user3 = new user3;
con paréntesis
let user4 = new user4();
*/

//Encadenamiento opcional
// cuando el usuario no tiene direccion 
var encadenamiento = {}

encadenamiento.noExiste?.TampocoExiste;

//En el caso de no tener definido "Encadenamiento" mostrara error
encadenamiento?.address;

/*
Otro error es cuando tampoco tiene declarado "Encadenamiento" (en este caso es el objeto)

encadenamiento?.noExiste?.TampocoExiste?;
*/

//Delete
//delete encadenamientoPrueba?.name; // Eliminar user.name si el usuario existe

//encadenamiento opcional ? con ()
let UsuarioPrincipal = {
  Principal() {
    alert("Principal");
  }
};

let OtroObjeto = {};

UsuarioPrincipal.Principal?.(); //Principal

OtroObjeto.admin?.(); //no existe

//encadenamiento opcional ? con []

let PruebaCorchetes= "PrimerNombre";

let usuarioPrueba = {
  PrimerNombre: "Raul"
};

let prueba = null;

alert( usuarioPrueba?.[PruebaCorchetes] ); // Raul
alert( prueba?.[PruebaCorchetes] ); // undefined
