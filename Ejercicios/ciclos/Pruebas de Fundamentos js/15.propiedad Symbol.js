/*
es un tipo de dato cuyo valor es unico
Dicho valor puede ser utilizado como identificadores (claves) de las propiedades de los objetos
Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined
que sirve únicamente como descripción del símbolo.
*/

/*
let id = Symbol("id");
alert(id);
Error ya que Symbol y un string son diferentes
*/

/*
¿Como mostrar un Symbol? = Usando el metodo .toString
toString = se llama cuando el objeto se representa como un valor de texto,
o cuando un objeto se espera como una cadena.
*/

let idSymbol = Symbol("id");
console.log(idSymbol.toString()); // Symbol(id)

//para obtener la descripción solamente:

let idDescription = Symbol("id");
console.log(idDescription.description); // id

//Usar un Symbol en un Objeto literal
let idCorchetes = Symbol("id");

let userDates = {
  name: "John",
  [idCorchetes]: 123 // no se usa "id": 123 por que daria error 
};

//
let id = Symbol("id");
let userPrincipal = {
  nombre: "John",
  edad: 30,
  [id]: 123
};

for (let copiaUser in userPrincipal) 
console.log(copiaUser); // nombre, edad (no aparece symbol ( id ))

// el acceso directo a user[id]     =>    Resultado = Acceso Directo: 123
console.log( "Acceso Directo: " + userPrincipal[id]);

/* 
Normalmente todos los Symbols son diferentes aunque tengan el mismo nombre
pero algunas veces necesitamos que los Symbols con el mismo nombre sean las mismas entidades
*/

let idS = Symbol.for("id");
let idAgain = Symbol.for("id");

console.log( idS === idAgain ); // Resultado:   true

/*Symbol.for() y Symbol.keyFor() 
para crear y acceder a los símbolos
*/

// tomar symbol por nombre

let symbolName = Symbol.for("nombre");
let symbolId = Symbol.for("id");

// tomar name por symbol
console.log( Symbol.keyFor(symbolName) );     // nombre
console.log( Symbol.keyFor(symbolId) );       //id

//RESUMEN

/*
Symbol es un tipo de dato para identificadores unicos
Symbols son creados al llamar Symbol() con una descripción opcional
De igual manera son siempre valores distintos aunque tengan el mismo nombre,
ya si se requiere que tengan los mismos valores se debe usar la propiedad Symbol.for(Opcional) 
retornará un symbol (en caso de no existir, lo creará) con el (opcional) como su nombre
*/

alert('Hola'), alert('Mundo')

