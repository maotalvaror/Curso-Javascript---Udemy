//Array.from()
var Vocales = Array.from("AEIOU");
console.log(Vocales);

//Array.isArray()
var Letras = ["V", "W", "J", "Ñ", "P"];
var a = Array.isArray(Letras);
console.log(a);

//Array.of()
var UPDT = Array.of(1, 3, 2, {nombre: "Maria"}, [1, 2, [3, 4]]);
console.log(UPDT);

//concat()
var concatenar = UPDT.concat(Vocales);
console.log(concatenar);

//entries()
var Nombres = ["Dana", "Yeral", "Elizabeth", "Jose"];
var iteracion = Nombres.entries();

for(let i of iteracion) {
  console.log(i);
}

//every()
var Numeros = [143, 256, 989, 787, 456, 332];
var condicion = (num) => num > 667;

console.log(Numeros.every(condicion));

//fill()
var numeros_ = [123, 234, 345, 456, 567, 678, 789, 891, 912, 123];
var cambiar_array = numeros_.fill("?", 6, 8);
console.log(cambiar_array);

//filter()
var Dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var condicion_2 = Dias.filter(Palabra => Palabra.includes("n"));
console.log(condicion_2);

//find()
var cosas = ["Cuchillo", "Tenedor", "Cuchara", "Vasos"];
var condicion_3 = cosas.find(palabra_2 => palabra_2.includes("a"));
console.log(condicion_3);

//findIndex()
var cosas_2 = ["Trapero", "Escoba", "Recogedor", "Fabuloso"];
var condicion_4 = cosas_2.findIndex(Cosas => Cosas.includes("d"));
console.log(condicion_4);