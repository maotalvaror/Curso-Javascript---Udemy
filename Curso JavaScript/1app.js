//Creación de numeros: pueden que sean positivos o negativos, enteros, fracciones ETC

const numero1 = 30;
const numero2 = "20";
const numero3 = 20.20;

console.log(numero1);
console.log(numero2);
console.log(numero3);

//otra forma de crear los numeros 
const numero4 = new Number(75);
console.log(numero4)

//operaciones con numeros java

const numero5 = 30;
const numero6 = 20;
let resultado1;
let resultado2;
let resultado3;
let resultado4;
let resultado5;
//Suma
resultado1 = numero5 + numero6;

//Resta
resultado2 = numero5 - numero6;

//Multiplicacion
resultado3 = numero5 * numero6;

//Division
resultado4 = numero5 / numero6;

//Modulo
resultado5 = numero5 % numero6;

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);

//
let resultado6;

//PI
resultado6 = Math.PI;

//Redondear
resultado6 = Math.round(2.8);
resultado6 = Math.round(2.1);
resultado6 = Math.round(2.6);

//Redondear hacia arriba 
resultado6 = Math.ceil(2.1);

//Redondear hacia abajo
resultado6 = Math.floor(2.3);

//Raiz cuadrada
resultado6 = Math.sqrt(144);

//Valor absoluto
resultado6 = Math.abs(-500);

//Potencia
resultado6 = Math.pow(8,3);

//Minimo o menor
resultado6 = Math.min(65,64);

//Maximo o Mayor
resultado6= Math.max(3,4,1);

//Aleatorio
resultado6 = Math.random();

//aleatorio dentro de un rango
resultado6 = Math.floor(Math.random()* 30);

console.log(resultado6);

//Operaciones
let resultado7;
resultado7 = 20 + 30 * 2;
resultado7 = (20 + 30) * 2;

// 20 % de descuento en compras
resultado7 = (20 + 30 + 40 + 50 + 60) *.2;
resultado7 = (20 + 30) * 1.16;
console.log(resultado7)

//
let puntaje = 5;

// puntaje++; //5
// ++puntaje; //6

// puntaje--;//5
// --puntaje;//4

puntaje +=3;
puntaje +=3;
puntaje +=3;
puntaje +=3;

console.log(puntaje);

//convirtiendo strings a numeros

const numero7 = "20";
const numero8 = "20.2";
const numero9 = "Uno";
const numero10 = 20;
console.log(numero7)
console.log(Number.parseInt(numero7));
console.log(Number.parseInt(numero8));
console.log(Number.parseInt(numero9));

//revisar si un numero es entero o no
console.log(Number.isInteger(numero10));
console.log(Number.isInteger(numero9));