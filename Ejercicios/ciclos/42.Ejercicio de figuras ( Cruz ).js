/*
Entrada : llamarFuncion(9)

    *    
    *    
    *    
    *    
*********
    *    
    *    
    *    
    *
*/

function llamarFuncion (numero) {
  var concatenacion = '';
  
  if ( numero % 2 != 0){
    var Resultado = parseInt(numero / 2);
  for (let l = 0; l < numero; l++){
    for (let j = 0; j < numero; j++){

      if (l == Resultado || j == Resultado){
        concatenacion += '*';
      } else {
        concatenacion += ' ';
      }
    }concatenacion += "\n"
  }
console.log(concatenacion);
} else {
  console.log('El numero debe de ser impar');
  }
}
