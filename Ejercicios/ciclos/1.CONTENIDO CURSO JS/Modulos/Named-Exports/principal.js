import {saludar, despedir} from './mi-modulo.js';
console.log(saludar('Maria'));
console.log(despedir('Maria'));

// Namespace import 

import * as myModule from './mi-modulo.js';
console.log(myModule.saludar('Maria'));
console.log(myModule.despedir('Aleja'));
console.log(myModule.x);