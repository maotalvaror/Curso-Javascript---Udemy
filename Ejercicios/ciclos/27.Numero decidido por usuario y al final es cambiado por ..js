function llamarFuncion(numero) {
  for (let i = 1; i <= numero; i++){
    var NumeroDeVeces = i;
    var concatenacionPuntos= '';
    for (let j = 0; j < NumeroDeVeces; j++) {
      concatenacionPuntos = concatenacionPuntos + '*'; 
    }
    console.log(concatenacionPuntos);
   }
}
