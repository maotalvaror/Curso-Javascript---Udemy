console.log('Resive un numero digitado por usuario y lo compara con uno aleatorio que este dentro de 20 numeros')

var num2 = parseInt(prompt('Digite un numero'));
var numero = Math.floor((Math.random() * 20) + 1);

if (num2 == numero) {
  console.log('Lo lograste es el ',numero)
} else {
  console.log('No lo lograste era el',numero, 'y tu digitaste el',num2)
}
