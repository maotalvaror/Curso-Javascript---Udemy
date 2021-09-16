console.log('Comparacion de numeros entre si')
var num1 = parseInt(prompt('Digite el primer numero'));
var num2 = parseInt(prompt('Digite el segundo numero'));

if (num1 > num2) {
  console.log('El numero',num1,'es mayor al numero',num2);
} else if (num2 > num1) {
  console.log('El numero',num2,'es mayor al numero',num1)
} else if (num1 == num2) {
  console.log('Los dos numeros son iguales')
}