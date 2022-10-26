//Prueba 7
function numerosAleatorios(max, min){
  var cantidad = 5;
  var suma = 0;
  var arr = [];
  for(let i = 0; i < cantidad; i++){
    var numeros = parseInt(Math.random() * (max - min) + min);
    arr.push(numeros);
  }
  suma = arr.reduce((num1, num2) => {
    return num1 + num2;
  })


  console.log("La suma de los numeros es:",suma);
}

numerosAleatorios(300, 0);