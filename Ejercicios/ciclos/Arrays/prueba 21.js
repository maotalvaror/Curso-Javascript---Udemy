var arrPrincipal = [];
var x = parseInt(prompt('Digite la cantidad de posiciones en x'));
var y = parseInt(prompt('Digite la cantidad de posiciones en y'));
var numero_menor = Number.MAX_VALUE;
var numero_mayor = Number.MIN_VALUE;


for (let i = 0; i < x; i++){
  arrPrincipal.push([]);

  for (let j = 0; j < y; j++){
    var valor = parseInt(prompt(`Digite el valor en la posicion [${i}],[${j}]`));
    arrPrincipal[i][j] = valor;

    if((arrPrincipal[i][i] < numero_menor)){
      numero_menor = arrPrincipal[i][i];
    }

    if((arrPrincipal[i][i] > numero_mayor)){
      numero_mayor = arrPrincipal[i][i];
    }
  }
}
console.log(`El numero MENOR en la matriz es ${numero_menor}`);
console.log(`El numero MAYOR en la matriz es ${numero_mayor}`);
