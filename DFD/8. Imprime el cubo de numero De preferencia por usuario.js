console.log('Este programa imprime el cubo del numero de su preferencia');
var numero = prompt('Digite el numero');
var _numero = parseInt(numero);

function cuboNumero(numero) {
  var _cuboNumero = Math.pow(numero, 3)
  console.log('El cubo del numero que digito es: ',_cuboNumero)
}

cuboNumero(_numero);
