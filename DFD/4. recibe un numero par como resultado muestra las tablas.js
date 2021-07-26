console.log('Programa que recibe un numero par y resultado muestra las tablas de multiplicar');
var numero = prompt('Digite un numero');
var numero2 = parseInt(numero);

for (let i=1; i<=numero; i++) {
  for (let j=1; j<=12; j++) {
    if (numero % 2==0){
      console.log(i,' * ',j,' = ',i * j)
    }
  }
}