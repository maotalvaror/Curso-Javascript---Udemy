//Prueba 8
function numerosAleatorios(max, min){
  var cantidad = 5;
  var Elevar;
  var arr = [];
  for(let i = 0; i < cantidad; i++){
    var numeros = parseInt(Math.random() * (max - min) + min);
    arr.push(numeros);
  }
  console.log("Numeros Aleatorios:", arr);
  Elevar = arr.map((num) => {
    return num * num;
  }).sort((a, b) => {
    // if (a > b) { return 1 }
    // else if (a < b) { return -1}
    // else {
    //   return 0
    // }

    return a - b
  });

console.log("Numeros elevado al cuadrado: ", Elevar);
}

numerosAleatorios(10, 0);