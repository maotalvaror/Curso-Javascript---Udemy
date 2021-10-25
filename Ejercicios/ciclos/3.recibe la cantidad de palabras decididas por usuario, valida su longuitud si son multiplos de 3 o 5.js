console.log('Recibe cantidad de palabras deseadas por usuario, valida de acuerdo su longuitud si son multiplos de 3 o 5');
var CantidadPalabras = parseInt(prompt('Digite cuantas palabras desea ingresar'));
var Longitud = 0;
var MultiplosTres = '';
var MultiplosCinco = '';

for (let i = 0; i < CantidadPalabras; i++) {
  const palabrasDigitadas = prompt('Digitelas');
  Longitud = palabrasDigitadas.length ;;

  if ( Longitud % 3 == 0 ) {
    MultiplosTres = MultiplosTres+' '+palabrasDigitadas;
  } else if ( Longitud % 5 == 0 ) {
    MultiplosCinco = MultiplosCinco+' '+palabrasDigitadas;
  } 

}
console.log('Las siguientes palabras son multiples de 3 =',MultiplosTres)
console.log('Las siguientes palabras son multiples de 5 =',MultiplosCinco);