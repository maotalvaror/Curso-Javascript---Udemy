var arrPrincipal = [];
var x = parseInt(prompt('Digite la cantidad de posiciones en X'));
var y = parseInt(prompt('Digite la cantidad de posiciones en Y'));
var suma = 0;

for (let i = 0; i < x; i++){
  arrPrincipal.push([]);
  
  for (let j = 0; j < y; j++){
    var valor = parseInt( prompt(`Digite el valor en la posicion [${i}],[${j}]`));
    arrPrincipal[i][j] = valor;

    if(coordenada_XInicial_YFinal(i, j, x) || 
    coordenada_XyY(i, j, x) || 
    coordenada_XFinal_YInicial(i, j, x)
    ){
      suma += valor;
      console.log(i, j);
    }
  }
}

console.log(arrPrincipal);
console.log(suma);

function coordenada_XInicial_YFinal(a, b, x_){
  return a == 0 && b == x_ - 1
}

function coordenada_XyY(a, b, x_){
  return a + b == x_ - 1
}

function coordenada_XFinal_YInicial(a, b, x_){
return a == x_ - 1 && b == 0
}

// (i == 0 && j == x - 1) 0,4
// (i + j == x - 1) 1,3 / 2,2 / 3,1
// (i == x - 1 && j == 0) 4,0