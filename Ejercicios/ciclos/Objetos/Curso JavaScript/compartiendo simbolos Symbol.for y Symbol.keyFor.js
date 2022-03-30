let nombre = Symbol.for('nombre');
let objeto = {};

objeto[nombre] = "Elizabeth";
console.log(objeto[nombre]);
console.log(nombre);

let nombre2 = Symbol.for('nombre');
console.log(nombre == nombre2);
console.log(nombre === nombre2)
console.log(Object.is(nombre, nombre2));

console.log(objeto[nombre2])
console.log(nombre2);

//Para recuperar la palabra ("id Unico") se utiliza
let id = Symbol.for("id Unico");
console.log(Symbol.keyFor(id))

let id2 = Symbol.for("id Unico");
console.log(Symbol.keyFor(id2));

//true
console.log(id == id2);

//undefined
let id3 = Symbol("id Unico");
console.log(Symbol.keyFor(id3))