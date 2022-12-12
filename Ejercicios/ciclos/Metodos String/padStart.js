//El primer parametro es cuantas posiciones quiere que tenga el string
//El segundo parametro es con que se va a unir el string (INICIO DEL STRING);
// (ejemplo: 456789 se une con 0123) = 0123456789 teniendo este 10 posiciones

var numeros = '456789';
console.log(numeros.padStart(10, '0123'));

var cadena = 'Otalvaro';
console.log(cadena.padStart('14', 'Maria '))