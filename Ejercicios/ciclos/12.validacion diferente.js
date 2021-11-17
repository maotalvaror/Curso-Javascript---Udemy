console.log('Agrupación dependiendo los caracteres dichos por usuario, si este no se cumple no dira undefined')

function llamarFunction(palabraIngresada, numeroCaracteres){
  var CantidadDeIteraciones = parseInt(palabraIngresada.length / numeroCaracteres);
  var extraccion = '';
  var indice = 0;

  for ( let i = 0; i < CantidadDeIteraciones; i++) {
    for (let j = 0; j < numeroCaracteres; j++) { 
      indice_calculado = j + (numeroCaracteres * indice)

      if (indice_calculado < palabraIngresada.length)
        extraccion += palabraIngresada[indice_calculado]
    }

    indice++;
    console.log(extraccion);
    extraccion = '';
  } 
}
