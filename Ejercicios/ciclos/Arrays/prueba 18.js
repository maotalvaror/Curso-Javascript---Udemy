var arrPrincipal = [];
var x = parseInt(prompt('Digite la cantidad en la posicion X'));
var y = parseInt(prompt('Digite la cantidad en la posicion Y'));
var suma = 0;

for (let i = 0; i < x; i++){
  arrPrincipal.push([]);

  for (let j = 0; j < y; j++){
    var valor = parseInt(prompt(`Digite el valor en la posicion [${i}],[${j}]`));
    arrPrincipal[i][j] = valor;

    if(
      Coordenada_XY_Inicial(i, j) || 
      Coordenada_XY_Final(i, j, x)  ||
      Coordenada_XY_IncialYFinal(i, j, x)
    ){
      suma += valor;
      console.log(i, j);
    }
  }
}

function Coordenada_XY_Inicial(a, b) {
  //matriz de 4 x 4: Cooderanda inicial  (0, 0)
  return a == 0 && b == 0;
}

function Coordenada_XY_Final(a, b, numero_matriz) {
  // matriz de 4 x 4: coodenada final (n, n) Ej: (4, 4)
  return a == (numero_matriz - 1) && b == (numero_matriz - 1);
}

function Coordenada_XY_IncialYFinal(a, b, numero_matriz){
  // matriz de 4 x 4: Coordenadas (0,4) y (4,0)
  return (a == 0 && b == numero_matriz - 1) + (a == numero_matriz - 1 && b == 0);
}

console.log(arrPrincipal);
console.log(suma);

// (i == 0 && j == x - 1) + (j == 0 && i == x - 1) 0,4 y 4,0
// (i == 0 && j == 0 || j == x - 1 && i == x - 1)  0,0 y 4,4