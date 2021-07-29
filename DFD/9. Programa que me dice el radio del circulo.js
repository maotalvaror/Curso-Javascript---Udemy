console.log('Este programa imprime el area de un circulo dependiendo el radio que digite el usuario');
var radio = prompt('Digite el radio del circulo');
var _radio = parseInt(radio);

var pi = 3.1416;
var area = pi * Math.pow(radio, 2);

console.log('Radio del circulo = ',area);