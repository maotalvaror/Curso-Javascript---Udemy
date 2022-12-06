var arrPrincipal = [];
var suma = 0;
var x_cantidad = parseInt(prompt('Digite la cantidad de posiciones en X'));
var y_cantidad = parseInt(prompt('Digite la cantidad de posiciones en Y'));

for(let x = 0; x < x_cantidad; x++){
  arrPrincipal.push([]);

  for(let y = 0; y < y_cantidad; y++){
    var valor = parseInt(prompt(`Digite el valor en la posicion [${x}],[${y}]`));
    arrPrincipal[x][y] = valor;

    if(y == 0){
      suma += valor
    }
  }
}
console.log(arrPrincipal);
console.log(suma);