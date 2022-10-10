var crearArray = Array.from("ABCDE12345+-*/%");
console.log(crearArray);

var verificar = Array.isArray(crearArray);
console.log(verificar);

var crearArr2 = Array.of("A", "B", "C", "D", "E", 1, 2, 3, 4, 5, "+", "-", "*", "/", "%");
console.log(crearArr2);

var concatenacion = crearArray.concat(crearArr2);
console.log(concatenacion);

var iterador = crearArr2.entries();
for (let i of iterador){
  console.log(i);
}

var condicion = (a) => a = Array.isArray;
console.log(crearArray.every(condicion));

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
var a = meses.forEach(function(e, i, a){
  console.log(e, i);
});