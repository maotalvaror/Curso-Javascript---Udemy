let arr_Frutas = ["Fresa", "Mango", "Piña"];

let [ Fruta1, Fruta2 ] = arr_Frutas;
console.log( Fruta1 ); // Fresa
console.log( Fruta2 ); // Mango

let [ ,,Fruta3 ] = arr_Frutas;
console.log(Fruta3); // Piña

//cambio de valores

let a = 1;
let b = 2;
let cambio;

cambio = a;
a = b;
b = cambio;

console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);
