/*
Entrada: 
llamarFuncion(9)
*       *        
          
          
          
    *     
          
          
          
*       * 

*/

function llamarFuncion (numero) {
  var concatenacion = '';
  console.clear()
  if ( numero % 2 != 0){
    var Resultado = parseInt(numero / 2);
  for (let l = 0; l < numero; l++){
    for (let j = numero; j >= 0; j--){

    if(
      l == 0 && j == numero /*Pmr*/
      || l==0 && j==l+1 
      || l == Resultado && j == Resultado +1  /*Mitad*/
      || l == numero-1 && j == numero /*IzAb*/
      || j== 1 && l==numero-1 /*DrAb*/
    ) {
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
