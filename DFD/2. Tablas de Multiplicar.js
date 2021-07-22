console.log('Programa que digita las tablas de multiplicar');

var numero = prompt("Digite numero a procesar");
var _numero = parseInt(numero);

for(let i=1; i<=_numero; i++){
  for(let j=1; j<=12; j++){
   console.log(i,'x',j,'=',j*i) 
  }
}