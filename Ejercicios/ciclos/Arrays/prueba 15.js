var arrPrincipal = [];
var X = parseInt(prompt('Digite la cantidad de posiciones en X'))
var Y = parseInt(prompt('Digite la cantidad de posiciones en Y'))
var suma = 0;

for (let i = 0; i < X; i++){
  arrPrincipal.push([]);

  for (let j = 0; j < Y; j++){
    var valor = parseInt( prompt(`Digite el valor en la posicion: [${i}][${j}]`) );
    arrPrincipal[i][j] = valor;
    
    if(i === j){
      suma += valor;
    }
  }
}
console.log(arrPrincipal);
console.log(suma);