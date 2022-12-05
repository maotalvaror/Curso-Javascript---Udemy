var arr_principal = [];
var x = parseInt(prompt('Digite la cantidad de posiciones en X'));
var y = parseInt(prompt('Digite la cantidad de posiciones en Y'));
var valor = 0;

for (let i = 0; i < x; i++){
  arr_principal.push([]);

  for(let j = 0; j < y; j++){
    valor = prompt(`Valor posicion: [${i}][${j}]`);
    arr_principal[i][j] = valor;
  }
}

console.log(arr_principal);
