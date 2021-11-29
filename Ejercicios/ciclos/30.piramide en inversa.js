function llamarFuncion(numero) {
  var hasta = 1;
  var concatenacion = '';
  var veces = 0;

  for (let i = numero; i >= 0; i--){
    hasta = i + (i - 1)
    for (let j = 0; j < hasta ; j++) {
      concatenacion += '*';
    }
    
    relleno = ( numero - i  );
    concatenacion = "".padStart(relleno, ' ') + concatenacion + "".padEnd(relleno, ' ')
    console.log(concatenacion)
    concatenacion = '';
  }
}


// function llamarFuncion2(numero) {
//   for (let i = 1; i <= numero; i++){
//     var hasta = 1;
//     var concatenacion = '';

//     for (let j = 0; j >= hasta; j--) {
//       concatenacion += '*';
//     }

//     relleno = ( numero - i ) / 2;
//     //concatenacion = "".padStart(relleno, '-') + concatenacion + "".padEnd(relleno, '-')
//   }
//   console.log(concatenacion)
// }