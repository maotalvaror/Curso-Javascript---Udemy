function llamarFuncion(numeroRecibido) {
  var triangulo = ''
  var concatenar = '';
  var VecesIteracion = 1;
  var piramide=''

  for (let i = 1; i <= numeroRecibido; i++) {
    for (let j = 0; j < VecesIteracion; j++) {
     if (esPrimerElemento(j) || esUltimoElemento(j, (VecesIteracion-1)) || (esPrimerElemento(i, 1) || (esUltimoElemento(i, numeroRecibido))) ) {
        concatenar += '*';
     } else {
        concatenar += ' ';
      }
    }

    VecesIteracion += 2
    relleno = numeroRecibido  - i
    concatenar = "".padStart(relleno, ' ') + concatenar + "".padEnd(relleno, ' ');
    concatenar = piramide + concatenar + "\n" ;
    triangulo += concatenar;
    concatenar = ''
  }

  console.log(triangulo)
}

function esUltimoElemento(indice, cantidadElementos){
  return indice == cantidadElementos;
}

function esPrimerElemento(indice, numero_inicio) {
  numero_inicio = numero_inicio || 0;
  return indice == numero_inicio;
}
