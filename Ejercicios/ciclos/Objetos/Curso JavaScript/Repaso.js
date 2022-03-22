let saludo = 'Hola, Alejandra';
console.log(saludo);

//Verifica si el saludo Empieza con H
console.log(saludo.startsWith("H"));
//Verifica si el saludo Termina con o
console.log(saludo.endsWith("o"));
//Verifica si el saludo incluye la A (Mayuscula)
console.log(saludo.includes("A"));

//COMPARACION DE ARR
let NumeroA = +0;
let NumeroB = -0;
console.log(Object.is(NumeroA, NumeroB));

let NumeroC = 5;
let String = "5";
console.log(Object.is(NumeroC, String));

//DESTRUCTURACION DE ARRAYS

let Numeros = [48, 52, 32];
let [NumA, NumB] = Numeros;
console.log(NumA);
console.log(NumB);

let [,,NumC] = Numeros;
console.log(NumC);

//COPIANDO Y ROMPIENDO LA REFERENCIA ENTRE LOS OBJETOS

let persona1 =  {
  nombre: "Yeison",
  edad: 32,
  hijos: true
}

//Copiando en la variable persona2 el objeto persona1
let persona2 = {...persona1};

//cambiando el nombre en el objeto persona2
persona2.nombre = 'Elizabeth';

console.log(persona1);
console.log(persona2);
console.log(Object.is(persona1, persona2));
