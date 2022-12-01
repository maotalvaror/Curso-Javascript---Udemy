// Array.from

var letras = 'ABCDEF';
var convertir_arr = Array.from(letras);
console.log(convertir_arr);

// Array.isArray

var verificar_array = Array.isArray(letras);
console.log(verificar_array);

// Array.of

var nuevo_arr = Array.of([], 'Hola', {}, 4321, true, [[[]]]);
console.log(nuevo_arr);

// concat

var concatenar = nuevo_arr.concat(convertir_arr);
console.log(concatenar);

// entries

var arr_meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
var iteracion = arr_meses.entries();

for ( let i of iteracion){
  console.log(i);
}

// every

var numeros_arr = [101, 112, 124, 133, 145, 152];
var condicion_every = numeros_arr.every( ( num ) => num > 120 );
console.log(condicion_every);

// fill

var cambiar_arr = numeros_arr.fill(122, 0, 3);
console.log(cambiar_arr);

// filter

var numeros = [101, 112, 124, 133, 145, 152];
var crear_arr = numeros.filter( (num) => num > 120 );
console.log(crear_arr);

// find

var primerE = arr_meses.find( (mes) => mes.includes( 'a' ));
console.log(primerE);

// findIndex

var indice = arr_meses.findIndex((mes) => mes.includes('l'));
console.log(indice);

// flat

var varios_arrays = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10]]]];
var arr_ = varios_arrays.flat();
console.log(arr_);

// forEach

var nombres_arr = ['Dana', 'Yeraldin', 'Jose', 'Elizabeth'];
var recorrer_arr = nombres_arr.forEach(function(e, i){
  console.log(e, i);
})

// includes

var incluye = nombres_arr.includes('Yeraldin');
console.log(incluye);

// indexOf

var encontrar_indice = nombres_arr.indexOf('Jose');
console.log(encontrar_indice);

// join

var fecha = [01, 12, 2022];
var unir = fecha.join('/');
console.log(unir);

// keys

var itera = nombres_arr.keys();
for ( const key of itera){
  console.log(key, nombres_arr[key]);
}

// lastIndexOf

var elemento_eIndice = nombres_arr.lastIndexOf('Yeraldin');
console.log(elemento_eIndice)

// length

var longitud = nombres_arr.length;
console.log(longitud);

// map

var numeros_ = [7, 9, 4, 2, 5, 8];
var multiplicar = numeros_.map(function(num){
  return num * num;
});
console.log(multiplicar);

// pop

var utiles_escolares = ["Cuaderno", "Esferos", "Cartuchera", "Marcadores", "Lapiz"];
var eliminarUE = utiles_escolares.pop();
console.log(utiles_escolares);

// push

var AgregarFA = numeros_.push(3, 1);
console.log(numeros_);

// reduce

var sumar = numeros_.reduce(function(numA, numB){
  return numA + numB;
})
console.log(sumar);

// reverse

var revertir = numeros_.reverse();
console.log(revertir);

// shift

var EliminarPE = numeros_.shift();
console.log(numeros_);

// slice

var copiar_arr = numeros_.slice();
console.log(copiar_arr);

// some

var condicion = numeros_.some(num => num % 2 == 0 );
console.log(condicion);

// sort

var ordenar = numeros_.sort();
console.log(ordenar);

// splice

var EliminarE_posicion = numeros_.splice(3);
console.log(EliminarE_posicion);

// toString

var frutas = ['Fresa', 'Mango', 'Durazno', 'Melon', 'Papaya'];
console.log(frutas.toString());

// unshift

var AgregarPA = frutas.unshift('Manzana');
console.log(frutas);

// values

var iterador_frutas = frutas.values();
for (let fruta_arr of iterador_frutas){
  console.log(fruta_arr);
}
