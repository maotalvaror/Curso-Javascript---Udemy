function llamarFuncion(numero) {
  var concatenacion= '';
  var piramide = '';
  var hasta = 1;

  for (let i = 1; i <= numero; i++){
    for (let j = 0; j < hasta; j++) {
      concatenacion += '*';
    }
    
    hasta += 2
    relleno = numero  - i
    concatenacion = "".padStart(relleno, ' ') + concatenacion + "".padEnd(relleno, ' ');
    piramide = piramide + concatenacion + "\n" ;
    concatenacion = '';
  }

  console.log(piramide)  
}