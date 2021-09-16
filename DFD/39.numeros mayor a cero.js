console.log('comparaciones entre el primer numero y el segundo')
var numero1 = parseInt(prompt('Digite el primer numero'));
var numero2 = parseInt(prompt('Digite el segundo numero'));

if ( numero1 >= 0 && numero2 > 0 ){
  console.log('El numero',numero1,'y el numero',numero2,'son mayores a cero')
} else if ( numero1 < 0 && numero2 < 0 ) {
  console.log('Los dos numeros',numero1,' ',numero2,'son menores a cero')
} else if ( numero1 >= 0 ) {
  console.log('Solo el primer numero ',numero1,'es mayor a cero')
} else {
  console.log('Solo el segundo numero',numero2,'es menor a cero')
}