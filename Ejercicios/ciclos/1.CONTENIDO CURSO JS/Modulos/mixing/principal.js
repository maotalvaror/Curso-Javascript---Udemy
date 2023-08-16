import Cuadrado, * as lib from "./mi-modulo.js";
// import Cuadrado, { saludar as saludo, despedir } from "./mi-modulo.js";

// rename named imports
console.log(lib.saludar('Maria'));
console.log(lib.despedir('Maria'));


const x = new Cuadrado(9);
console.log(x.area);