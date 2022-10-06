var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var condicion = array
  .filter( num => num % 2 == 0 )
  .map( num => num * 2 );
console.log(condicion);


var condicion_2 = array
  .filter( num => num % 2 == 0 )
  .map( num => num * 2 )
  .forEach(function(e, i, a){
    console.log(e);
  })


  var acumuladoFinal = [ "1", "2", "3", "4"]
  .reduce((acumulado, elemento) => {
    console.log("Acumulado: ", acumulado, "Elemento Iteracion: ", elemento)
    return acumulado + elemento;
  },'')
console.log("\nAcumulado Final: ", acumuladoFinal);


var arr = [1, 2, 3, 4, 5]
  .reduce((a , e, i) => {
    console.log(a, "*", e, "=", a * e, "indice", i);
    return a * e;
  })

console.log(arr);


var arr = [1, 2, 3, 4, 5];

var suma_multiplicacion = arr.reduce((acumalado, numero, indiceIteracion) => {
  
  if (indiceIteracion % 2 === 0) {
    return acumalado * numero;
  }

  return acumalado + numero;
}, 0);

console.log(suma_multiplicacion);

