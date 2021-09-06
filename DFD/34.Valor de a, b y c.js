console.log('Dependiendo los 3 valores digitados por usuario me dice la raiz cuadrada, o me imprime que no es un valor real')
var A = parseInt(prompt('Digite el valor de A'));
var B = parseInt(prompt('Digite el valor de B'));
var C = parseInt(prompt('Digite el valor de C'));
var D = B*B-4*A*C;

if ( D > 0) {
  var Rpt1 = (B + Math.sqrt(D)) / (2 * A)
  var Rpt2 = (B + Math.sqrt(D)) / (2 * A)
  console.log('Respuesta 1',Rpt1,'respuesta 2',Rpt2)
} else {
  console.log('La ecuacion no tiene valor real ',D)
}
