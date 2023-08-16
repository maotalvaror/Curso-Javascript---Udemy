// Descomponer un arreglo en sus elementos, o descomponer un objeto en sus propiedades.

//  ARREGLOS

let arr = [1, 'A', 2, 'B', 3, 'C', 4, 'D'];
let [a, b, c, d, e, f, g, h] = arr;
console.log(a, b, c, d, e, f, g, h);

let [x, y, z] = [32, 23, 55];
console.log(`x:${x}, y:${y}, z:${z}`);

let coordenadaA = [12, 25, 39, 134, 4098, -9876, 6126728];
let [x1, y1, z1, ...otrasCoordenadas] = coordenadaA
console.log(x1, y1, z1);
console.log(otrasCoordenadas);

//  OBJETOS
let punto = { M: 1043, A: 2098 };
function imprimirPunto({M: coordM, A: coordA}){
  console.log(`M: ${coordM}, A: ${coordA}`);
}
imprimirPunto(punto);

let abc = 5;
let def = 10;
console.log(`abc: ${abc}`);
console.log(`def: ${def}`);

