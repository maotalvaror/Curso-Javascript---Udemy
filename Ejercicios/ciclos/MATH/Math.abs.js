/*

  RETORNA EL VALOR ABSOLUTO DE UN NÚMERO

 Math.abs ( x ) = | x | = {
 
  x if x > 0 
  0 if x = 0 
 -x if x < 0


  Math.abs('-1'); = 1
  Math.abs(-2); = 2
  Math.abs(''); = 0
  Math.abs(null); = 0

*/

function diferencia(a, b){
  return Math.abs( a - b );
}

console.log(diferencia( 4, 9 )); // 5
console.log(diferencia( 9, 4 )); // 5
console.log(diferencia( 1.89384, 12.838383 ));  // 10.944543