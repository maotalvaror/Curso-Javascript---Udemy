/*
Las funciones que son almacenadas en propiedades
de objeto son llamadas “metodo”.

Los métodos pueden hacer referencia al objeto con this.
Cuando una función es declarada,
puede usar this, pero ese this no tiene valor...
hasta que la función es llamada.


Una función puede ser copiada entre objetos.
Cuando una función es llamada en la sintaxis
objeto_User.metodoPrincipal(), el valor de this durante el llamado es objeto_User
*/



//Objeto sin this

console.log('Objeto sin "this"')

let Datos_Usuario = {
  Nombre: "Junior",
  edad: 3,

  Nuevo_Objeto() {
    // ( this ) es el objeto actual ademas el valor ( this ) sera Datos_Objeto
    console.log(this.Nombre);
    console.log(this.edad)
    console.log(`nombre: ${this.Nombre}, edad: ${this.edad}`)
  }

};

Datos_Usuario.Nuevo_Objeto(); // Junior


// Objeto actual con "this" (  en metodos )

console.log('Objeto con "this"')

let Datos_Objeto = {
  Nombre: "Junior",
  edad: 3,

  Objeto() {
    // ( this ) es el objeto actual ademas el valor ( this ) sera Datos_Objeto
    console.log(this.Nombre);
    console.log(this.edad)
    console.log(`nombre: ${this.Nombre}, edad: ${this.edad}`)
  }

};

Datos_Objeto.Objeto(); // Junior


/*si el objeto es llamado, entonces this se convierte en ese objeto solo durante el llamado*/


let DatosObjetoA = { nombre: "Pepita" };
let DatosObjetoB = { nombre: "Pepito" };

// usa la misma función en dos objetos
function Funcion_A_B() {
  console.log( this.nombre );
}

//copia la funcion (FuncionA)
DatosObjetoA.f = Funcion_A_B;
DatosObjetoB.f = Funcion_A_B;

// estos llamados tienen diferente "this"
DatosObjetoA.f(); // Pepita
DatosObjetoB.f(); // Pepito



//llamado sin un objeto: this == undefined

function funcionThis() {
  alert(this);
}
funcionThis() // [object Window]


/*

Las funciones de flecha no tienen this
Si hace referencia a this desde tal funcion, esta sera tomada desde afuera de la funcion
Por ejemplo, arrow() usa this desde fuera del metodo user.sayHi():

*/

let Objeto_flecha = {
  Primer_Nombre: "Ana",
  F_Flecha() {
    let ResultadoF = () => alert(this.Primer_Nombre);
    ResultadoF();
  }
};

Objeto_flecha.F_Flecha(); // Ana


/*
Cuando se crea una funcion ejecutada 
con ( new ) hace lo siguiente:

crea un nuevo objeto vacio,

let Objeto_Vacio = {}

ese objeto creado es asignado a this

this.propiedadA = "A";
this.propiedadB = false;

*/


/*OPERADOR NEW*/


function User(name) {
  this.name = name;
  this.isAdmin = !false;
}

let user = new User("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // true ya que tiene el operador logico ( not : ! )



//En las llamadas normales devuelve undefined, y cuando es llamada con new devuelve la funcion
//Modo test = new.target
function FuncionNew() {
  alert(new.target);
}

FuncionNew(); // undefined

new FuncionNew(); 
//RESULTADO DE la funcion (" FuncionNew ")
/*function FuncionNew() {
  alert(new.target);
}*/