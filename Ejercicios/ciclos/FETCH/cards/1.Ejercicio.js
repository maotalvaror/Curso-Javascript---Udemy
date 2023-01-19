function ObtenerNumerosPares(num){
  return (num % 2 == 0);
}

function MostrarNumerosPares(e){
    console.log(e);
}

function fnPares(){
  var arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter(ObtenerNumerosPares)
  .forEach(MostrarNumerosPares);
}

fnPares();
