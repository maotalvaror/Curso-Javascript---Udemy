console.log('Programa que dice el resultado de el sistema octal dependiendo el numero del usuario');

var octal = 0;
var mod = 0;
var num = parseInt(prompt('Digite un numero'));

while (num > 1) {
  mod = num % 8;
  num = Math.trunc((num/8));
  console.log(mod);
} if (num = 1) {
    console.log(num)
}