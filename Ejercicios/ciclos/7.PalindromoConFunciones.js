function EsPalindroma(palabra){
  let longuitudPalabra = palabra.length - 1;
  let palabraInvertidad = ''
  for (let i = longuitudPalabra; i >= 0 ; i--) {
      palabraInvertidad  += palabra[i];
  }

  return (palabra == palabraInvertidad);
}

function ProcesarPalabra(i) {
    var mensaje = 'Ingrese la palabra número: ' + (i +1).toString()
    var palabra = prompt(mensaje);

    if ( EsPalindroma(palabra) )
      console.log('La palabra ', palabra, ' es palindromo');   
}

function VerificarPalabras(cantidad) {
  console.clear();
  for (let index = 0; index < cantidad; index++) {
    ProcesarPalabra(index);    
  }
}

