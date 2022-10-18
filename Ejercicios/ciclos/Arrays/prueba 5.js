/* Principales metodos de array:

filter 
reduce
map
find
join
pop
push
*/

//FILTER = Crea un nuevo array con todos los elementos que cumplan la condicion

var arr = [16, 31, 52, 7, 93];
var nuevo_array = arr.filter((num) => num % 2 == 1);
console.log(nuevo_array);

//REDUCE = devuelve un unico valor, ejecuta una funcion reductora sobre cada elemento del array
var valor_ = 0;
var suma = arr.reduce(
  (_A, _B) => _A + _B,
  valor_
);

console.log(suma);


//MAP = crea un nuevo array con los resultados de cada uno de sus elementos
var multiplicar = arr.map(function(num){
  return num * 3;
});

console.log("Multiplicacion: ", multiplicar);

//FIND = Regresa el elemento que cumpla con la condicion
var array = [43, 54, 12, 76, 432, 543, 659];
var nuevo = array.find(num => num > 200);
console.log(nuevo);

//JOIN = Une los elementos en un string
var unir = arr.join(':');
console.log(unir);

//POP = Elimina el ultimo elemento del array
var eliminar_ = arr.pop();
console.log(arr);

//PUSH = Agrega elementos al final del array
var agregar_ = arr.push (1, 3, 5, 7, 9);
console.log(arr);

//_________________________________________________________

var array_meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

//FILTER
var f = array_meses.filter((mes) => mes.length >= 6);
console.log(f);

//REDUCE

//MAP
var mp = array_meses.map(function(mes_){
  return mes_;
});
console.log(mp);

//FIND
var fnd = array_meses.find(mes => mes.includes("M"));
console.log(fnd);

//JOIN
var jn = array_meses.join('-');
console.log(jn);

//POP
var pp = array_meses.pop();
console.log(array_meses);

//PUSH
var ps = array_meses.push("Junio", "Julio", "Agosto");
console.log(array_meses);