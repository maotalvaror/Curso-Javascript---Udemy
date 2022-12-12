//El primer parametro es cuantas posiciones quiere que tenga su string // 10
//El segundo parametro es con que se va a unir el string  // 456789
// (ejemplo: 0123 se une con 456789) = 0123456789 teniendo este 10 posiciones

var numeros = '0123';
console.log(numeros.padEnd('10', '456789'));

var cadena = 'Maria ';
console.log(cadena.padEnd('14', 'Otalvaro'));