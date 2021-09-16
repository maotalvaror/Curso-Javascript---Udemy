console.log('si el Numero es par o impar');
var numero = parseInt(prompt('Digite su numero'));
var sumaPares = 0;
var sumaImpares = 0;
var sumaTotal = 0;

for (let i = 1; i <= numero; i++) {
  if (i % 2 == 0) {
    sumaPares = sumaPares + i; 
  } else {
    sumaImpares = sumaImpares + i;
  }  
}

sumaTotal = sumaPares + sumaImpares;

console.log('La suma de pares es: ',sumaPares)
console.log('La suma de impares es: ',sumaImpares)
console.log('La suma es: ',sumaTotal)