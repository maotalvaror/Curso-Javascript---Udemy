/*

{
  "A": 64,
  "B": 65,
  ...,
  "Z": 90
}

*/

function fn() {
  var letras = {};
  var letra = null;

  for (let i = 65; i <= 90; i++){
    letra = String.fromCharCode(i);
    letras[letra] = i
  }

  console.log("Cantidad: ", Object.keys(letras).length)
}


/*

{
  minusculas: {
    a: 97,
    b: 98,
    ...,
    z: 122
  },
  mayusculas: {
    "A": 64,
    "B": 65,
    ...,
    "Z": 90
  }
}

*/