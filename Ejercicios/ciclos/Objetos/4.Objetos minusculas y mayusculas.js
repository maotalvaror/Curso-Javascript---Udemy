/*
{
  minusculas: {
    a: 97,
    b: 98,
    ...,
    z: 122
  },
  Mayusculas: {
    "A": 64,
    "B": 65,
    ...,
    "Z": 90
  }
}
*/
function llamarFuncion() {
  var minusculas = {};
  var mayusculas = {};
  var letrasm = null;
  var letrasM = null;
  var letras = {};


  for (let j = 97; j <= 122; j++){
    letrasm = String.fromCharCode(j);
    minusculas[letrasm] = j;
  } 

  letras.minusculas = minusculas;


  for (let l = 65; l <= 90; l++){
    letrasM = String.fromCharCode(l);
    mayusculas[letrasM] = l;
  }

  letras['mayusculas'] = mayusculas;

  console.log(letras);
}
