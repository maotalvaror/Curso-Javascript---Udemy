//Pide los minutos transcurridos
let minutos = parseInt(prompt('Digite el total de minutos transcurridos'));

//Se crea la función llamada tiempo con el parametro de minutos
function tiempo (minutos) {
  
  //variables con la operacion dividir = / y modulo = %
  var hora = parseInt(minutos / 60);
  var _minutos = minutos % 60;
  console.log('Horas',hora, 'Minutos',_minutos)
}
tiempo(minutos)