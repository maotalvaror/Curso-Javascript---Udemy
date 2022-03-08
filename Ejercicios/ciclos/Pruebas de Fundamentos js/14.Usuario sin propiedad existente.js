/*
La solucion a una propiedad que no exista,
para que muestre como resultado null o undefined y no error
*/

let Objeto = {};
console.log(Objeto.NoExiste ? Objeto.NoExiste.TampocoExiste : undefined); //  undefined

/*
detiene la evaluación, (devuelve undefined)
si el valor antes del ? es undefined o null,
? = hace opcional el valor delante de este.
*/

//En este caso El concatenamiento opcional ==   ? permite que user sea null o undefined

let user = {}; // El usuario no tiene dirección
console.log( user?.address?.street ); // undefined

/*
La variable debe ser declarada con (let/const/var)
ya que en el encadenamiento opcional solo funciona con variables declaradas
*/

// Usuario?.NoExistente;
// console.log(Usuario)  //Usuario is not defined

// "Cortocircuitos"

let userNuevo = null;
let x = 0;

userNuevo?.PropiedadPrueba(x++); // no hay "PropiedadPrueba", por lo que la ejecución no alcanza a x++

alert(x); // 0 Ya que el valor no se puede incrementar



/*
para que es ?.()  = se usa para llamar a una función que puede no existir.

?.() Comprueba la parte izquierda, si la función FuncionSecundaria existe, entonces se ejecuta
*/
let UsuarioPrincipal = {
  FuncionSecundaria() {
    console.log("Soy el primero");
  }
};

let NuevoObjeto = {};

UsuarioPrincipal.FuncionSecundaria?.(); // Soy el primero

NuevoObjeto.FuncionSecundaria?.(); //No mostrara nada por que no existe el metodo (NuevoObjeto)


//Ejercicio ?.()

let Object = {
  funcion() {
    console.log('Prueba ?.()');
  }
};

let DatosUsuario = {};

Object.funcion?.(); // Prueba ?.()
DatosUsuario.funcion?.(); //No mostrara nada por que no existe el metodo (DatosUsuario)

/*
para que es ?.[]  = Usar corchetes [] para acceder a las propiedades en lugar de punto (.)
Al igual permite leer de forma segura una propiedad de un objeto que puede no existir.
*/
let DatoPersona = "firstName";

let prueba1 = {
  firstName: "John"
};

let prueba2 = null;

console.log( prueba1?.[DatoPersona], '(P1)'); // John
console.log( prueba2?.[DatoPersona], '(P2)'); // undefined


//Ejercicio ?.[]

let Prueba = "PruebaPrincipal";

let ObjetoP = {
  PruebaPrincipal: "Accediendo a las propiedades con [] en lugar de punto (.)"
};


let variable = null;

console.log(ObjetoP?.[Prueba]) //"Accediendo a las propiedades con [] en lugar de punto (.)"
console.log(variable?.[Prueba]) //undefined

//Si el user.name existe se borrara
delete user?.name

//Error 
// let userError = null;
// userError?.name = "John"; //estaria diciendo undefined = "Jhon"

//-------------------------------------------------------------------------------------------

/*
let Objeto = {};
console.log(Objeto.propiedad ? Objeto.propiedad.TampocoExiste : undefined);
  // objeto?.propiedad – devuelve objeto.propiedad si objeto existe, si no sera undefined.


let Prueba = "PruebaPrincipal";

let ObjetoP = {
  PruebaPrincipal: "Accediendo a las propiedades con [] en lugar de punto (.)"
};


let variable = null;

console.log(ObjetoP?.[Prueba]) ////Resultado = "Accediendo a las propiedades con [] en lugar de punto (.)"
console.log(variable?.[Prueba])

  //objeto?.[propiedad] – devuelve objeto[propiedad] si objeto tambien existe, si no, undefined.


let Object = {
  funcion() {
    console.log('Prueba ?.()');
  }
};

let DatosUsuario = {};

Object.funcion?.(); //Resultado = Prueba ?.()
DatosUsuario.funcion?.();

  //obj.metodo?.() – llama a objeto.metodo() si objeto.metodo existe, si no devuelve undefined.
*/


//____________________________________________________________________

/*
nuevo Symbol

var id = Symbol();

Agregar descripcion a ese symbol

var id = Symbol("id");

Comparacion entre symbols con la misma descripcion

let ID1 = Symbol("ID1");
let ID2 = Symbol("ID2");

alert(ID1 == ID2); <= (falso)


*/