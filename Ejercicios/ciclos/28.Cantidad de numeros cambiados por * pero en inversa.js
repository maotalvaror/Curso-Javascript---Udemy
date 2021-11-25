function llamarFuncion(numero) {
  for (let i = 1; i <= numero; i++){
    var NumeroDeVeces = i - numero;
    var AsteriscosConcatenacion= '';

    for (let j = 0; j >= NumeroDeVeces; j--) {
      AsteriscosConcatenacion = AsteriscosConcatenacion + '*'; 
    }
    
    console.log(AsteriscosConcatenacion);
   }
}