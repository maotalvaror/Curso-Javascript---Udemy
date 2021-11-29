function llamarFuncion(numeroRecibido) {
  var triangulo = ''
  var concatenar = '';
  var VecesIteracion = 1;
  var piramide=''

  for (let i = 1; i <= numeroRecibido; i++) {
    for (let j = 0; j < VecesIteracion; j++) {
      if (j == 0 || j == (VecesIteracion-1) || (i == 1 || (i == numeroRecibido))) {
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
