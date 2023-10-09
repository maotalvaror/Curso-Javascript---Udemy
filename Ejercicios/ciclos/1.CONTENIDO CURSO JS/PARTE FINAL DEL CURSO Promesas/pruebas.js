const myPromise = new Promise(function(resolve){
  setTimeout(function(){
    resolve('Hola');
  }, 5000);
})

var Array = [1, 2, 3, 4, 5];
for (let i = 0; i < Array.length; i++){
  console.log(Array[i]);
}

var primero = (Array[0]);
console.log(primero);

var ultimo = (Array[Array.length - 1]);
console.log(ultimo);

var arrayFrutas = ['Manzana', 'Fresa'];
arrayFrutas.forEach(function(elemento, indice){
  console.log('Elemento ',elemento, 'Indice ',indice);
}
);

var nuevoAlInicio = arrayFrutas.unshift('Durazno');
console.log(arrayFrutas);

var nuevoAlFinal = arrayFrutas.push('Pera');
console.log(arrayFrutas);

var eliminarInicio = arrayFrutas.shift();
console.log(arrayFrutas);

var eliminarUltimo = arrayFrutas.pop();
console.log(arrayFrutas);

var objeto = {
  nombre: 'Maria',
  apellido: 'Otalvaro',
  edad: 16,
  datos: {
    numero: 1234512345,
    animalFv: 'Perro'
  }
}

console.log(objeto);

var Promesa = new Promise((resolve, reject) => {
  resolve('Hola');
})

console.log(Promesa);