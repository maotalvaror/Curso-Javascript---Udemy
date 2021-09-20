console.log('Programa que recibe las palabras que desee el usuario siempre y cuando no sea q');
var palabras = prompt('Digite las palabras que desee');
var palabrasGuardadas = '';

while (palabras != 'q') {
  // palabrasGuardadas = palabrasGuardadas + palabras;
  palabrasGuardadas +=  palabras;
  palabras = prompt('Digite más palabras'); 
}
console.log(palabrasGuardadas)