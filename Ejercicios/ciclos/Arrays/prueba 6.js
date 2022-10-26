//Prueba 6 = numeros aleatorios, sumados entre si, y retornando la suma final

function numerosAleatorios(max, min){
  var cantidad = 5;
  var suma = 0;
  for(let i = 1; i <= cantidad; i++){
    var numeros = parseInt(Math.random() * (max - min) + min);
    suma += numeros;
  }
  console.log(`La suma de los numeros es =`, suma);
}

numerosAleatorios(300, 0);