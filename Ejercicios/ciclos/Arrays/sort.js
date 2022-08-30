// Ordena los elementos de un arreglo segun su ordenacion por defecto (unicode)
var array_frutas = ["Manzana", "Naranja", "Mora", "Banana"];
console.log(array_frutas.sort());

var array_letras = ["AA", "b", "Ba", "a", "Aa"];
console.log(array_letras.sort());
console.log(array_letras.sort(function(a, b){return a.localeCompare(b);}));

var array = [1, 11, 2, 22, 3, 5];
console.log(array.sort());
console.log(array.sort((a,b) => a-b));

var array_ = ["1", "11", "2", "22", "3", "5"];
console.log(array_.sort(), "Desordenado");
console.log(array_.sort((A, B) => A - B), "Ordenado");

let objeto = [
  {
    nombre: "Maria"
  },
  {
    apellido: "Otalvaro"
  }
]
console.log(objeto.sort());


var array = ['1', '11', '2', '22', '3', '4', '5'];
function ordenar (a, b){
  return a - b;
}
console.log(array.sort(ordenar), "Funcion normal");

//con una funcion anonima dentro del array.sort()
var arr = ['1', '11', '2', '22', '3', '4', '5'];
console.log(array.sort(
  function (a, b){ 
    return a - b;
  }), "Funcion anonima");

//funcion de flecha
var arr_ = ['1', '11', '2', '22', '3', '4', '5'];
console.log(arr_.sort((a, b) => a - b), "Funcion de Flecha");