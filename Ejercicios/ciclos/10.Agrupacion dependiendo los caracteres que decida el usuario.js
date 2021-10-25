function main(palabraIngresada, numeroCaracteres){
  if (palabraIngresada.length % numeroCaracteres == 0 ) {  

    var CantidadDeIteraciones = palabraIngresada.length / numeroCaracteres;
    var extraccion = '';
    var indice = 0;
    
    for ( let i = 0; i < CantidadDeIteraciones; i++) {
      for (let j = 0; j < numeroCaracteres; j++) { 
        extraccion += palabraIngresada[j + (numeroCaracteres * indice)]
      }

      indice++;
      console.log(extraccion);
      extraccion = ''
    } 
    
  } else {
    console.log(`La palabra ${palabraIngresada} no es multiplo de ${numeroCaracteres}`)
  }
}


/*
  funcion name_function(param1, param2)
    param1 => Equivalente a la palabra
    param2 => Numero de caracteres agrupar

  Ejemplo:
    name_function('yeison',2)

      'ye'
      'is'
      'on'

      1 => palabra[0] + palabra[1] = 'ye'
      2 => palabra[2] + palabra[3] = 'is'
      3 => palabra[4] + palabra[5] = 'on'

    name_function('yeison',3)

      'yei'
      'son'

    name_function('yeisonra',4)

      'yeis'
      'onra'


  Proceso por iteracion:
    ('raul', 2)

    itraciones 2
      1 => palabra[0] + palabra[1] = 'ra'
      2 => palabra[2] + palabra[3] = 'ul'

    ('yeisonrau', 3)
    iteraciones 3
      1 => palabra[0] + palabra[1] + palabra[2] = 'yei'
      2 => palabra[3] + palabra[4] + palabra[5] = 'son'
      3 => palabra[6] + palabra[7] + palabra[8] = 'rau'
*/