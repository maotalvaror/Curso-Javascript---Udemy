/*
  fn(['Yeison', 'raul', 'rodriguez', 'Baquero', 'otro'])

  salida:
  
  Yeison
  raul raul
  rodriguez rodriguez rodriguez
  Baquero Baquero Baquero Baquero
  otro otro otro otro otro

*/

function llamarFuncion(arrayDePalabras) {
  for (let i = 0; i < arrayDePalabras.length; i++){
    var j_hasta = i + 1;
    var concatenacion = '';
    for (let j = 0; j < j_hasta; j++) {
      concatenacion = concatenacion + arrayDePalabras[i] + ', '; 
    }

    concatenacion = concatenacion.substr(0, (concatenacion.length - 2));
    console.log(concatenacion);
   }
}

