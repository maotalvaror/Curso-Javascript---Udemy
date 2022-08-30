/*
El metodo entries itera un array con un ciclo for( let i of object ) 
retornando el indice y el valor
Array [0, "a"]
*/
var array = ['a', 'b', 'c'];
var iteracion = array.entries();

for (let i of iteracion) {
  console.log(i);
}

var array_Nombres = ['Yeison', 'Maria', 'Camila', 'Betsy'];
var iteracion_2 = array_Nombres.entries();

for (let J of iteracion_2) {
  console.log(J)
}

var array_valores = [true, false, [], {}, undefined, 'string', 1, 2, null];
var iteracion_3 = array_valores.entries();

for (let y of iteracion_3) {
  console.log(y);
}