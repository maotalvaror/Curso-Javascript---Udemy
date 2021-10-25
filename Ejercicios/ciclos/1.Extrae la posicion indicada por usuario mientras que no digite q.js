console.log('Recibe una palabra digitada por usuario, extrae la posicion que desee mientras que no digite "q"');
var palabraDigitada = prompt('Digite una palabra');
var indice = null;

while(indice != 'q') {
  indice = prompt('Digite el indice por el cual se va a extraer')
  var nuevo = palabraDigitada.charAt(indice);

  if (nuevo.length && !isNaN(indice))
    console.log(nuevo)
  else if(indice != "q")
    console.log("No existe un caracter asociado al indice ", indice)
}