console.log('Como saber si un numero es divisible o no');
console.log('Digite dos numeros de su preferencia');

const numero1 = parseInt(prompt('Digite el primer numero'));
const numero2 = parseInt(prompt('Digite el segundo numero'));

function divisible(n1, n2) {
  return (n1 % n2 == 0);
}

var _divisible = divisible(numero1, numero2)

if(_divisible){
  console.log('Si es divisible');
} else{
  console.log('No es divisible');
}

