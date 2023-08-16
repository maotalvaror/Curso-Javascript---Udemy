import { saludar as saludo, despedir } from './mi-modulo.js';

console.log(saludo('Maria'));
console.log(despedir('Aleja'));

// Named imports

// import {saludar, despedir} from './mi-modulo.js';
// console.log(saludar('Maria'));

// Namespace import 

// import * as myModule from './mi-modulo.js';
// console.log(myModule.saludar('Maria'));
// console.log(myModule.despedir('Aleja'));
// console.log(myModule.x);