function numerosAleatorios(cantidadNumeros, min, max) {
  min = min || 0;
  max = max || 1000;

  var concat ='';

//Variables para operaciones
  var suma = 0;
  var resta = 0;
  var multiplicacion = 1;
  var division = 1;

  for (let i = 0; i < cantidadNumeros; i++){
    var numero = parseInt(Math.random() * (max - min) + min);
    concat = concat + numero + ' ';
    suma += numero;
    resta -= numero;
    multiplicacion *= numero;
    division /= numero;
  }
  
  console.log('Los numeros aleatorios son =',concat)
  console.log('Suma',suma)
  console.log('Resta',resta)
  console.log('Multiplicacion',multiplicacion)
  console.log('Division',division)

}
