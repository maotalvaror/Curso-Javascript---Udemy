console.log('Este programa recibe palabras y permite extraer la cantidad de caracteres decididos por usuario mientras que no digite el numero cero');

palabraDigitada = '';

while(palabraDigitada != '0') {
  palabraDigitada = prompt('Digite la palabra');

  if (palabraDigitada != '0' && palabraDigitada.length) {
    var longuitudPalabra = palabraDigitada.length;
    console.log(longuitudPalabra);
    var CaracterInicial = prompt('Digite el caracter Inicial');
    var CaracterAExtraer = prompt('Digite el caracter a extraer');

    var nuevoTexto = palabraDigitada.substr(CaracterInicial,CaracterAExtraer);
    console.log(nuevoTexto); 
  }
}

