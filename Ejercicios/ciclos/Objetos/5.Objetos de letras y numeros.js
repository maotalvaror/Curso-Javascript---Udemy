/*
{
  letras: {
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
  },
  numeros: {
    "0": 1,
    "1": 2,
    ...,
    "9": 9
  }
}
*/

function llamarFuncion() {
 
  var letraM = null;
  var letram = null;
  var mayusculas = {};
  var contadormayusculas = 65;
  var contadorminusculas = 97;
  var minusculas = {};
  var numeros = {};
  var num = null;
  var objeto = {};
  var objetoLetras = {}
  //Letras
  
  for (let j = 0; j <= 25; j++){
    letraM = String.fromCharCode(contadormayusculas+j);
    mayusculas[letraM] = contadormayusculas + j;
    letram = String.fromCharCode(contadorminusculas+j);
    minusculas[letram] = contadorminusculas + j;
  }
  
  objetoLetras.mayusculas = mayusculas;
  objetoLetras.minusculas = minusculas;
  objeto.letras = objetoLetras

  //Numeros
  for (let l = 48; l <= 57; l++){
    num = String.fromCharCode(l)
    numeros[num] = l;
  }
  objeto.numeros = numeros;

  console.log(objeto);
}
