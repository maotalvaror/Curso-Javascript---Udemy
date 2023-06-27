var x = 'HoLa, ¿CóMo EsTaS?';

console.log(x.length);
console.log(x.toLowerCase());
console.log(x.toUpperCase());
console.log(x);

var indiceDesde = x.indexOf('¿');
console.log(x.slice(indiceDesde));

var y = 'Aprendiendo Javascript. Javascript es un lenguaje muy poderoso';
console.log(y.length);
var i = y.lastIndexOf('Javascript');
console.log(y.slice(i));
console.log(y.replace('Javascript', 'JS').replace('Javascript', 'JS'));

var z = ["Maria", "Dana", "Camila"];
console.log(z.join(', '));