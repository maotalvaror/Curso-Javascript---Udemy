// obtiene los valores de un array
let array_letras = ["A", "B", "C", "D", "E"];
var iterador = array_letras.values();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);


// metodo values con ciclo for
var arr = ['w', 'y', 'k', 'o', 'p'];
var iterador = arr.values();

for (let letra of iterador) {
  console.log(letra);
}
