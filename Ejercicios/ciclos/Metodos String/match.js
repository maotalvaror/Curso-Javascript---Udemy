var str = 'The quick brown fox jumps over the lazy dog. It barked.';
var expresion_regular = /[A-Z]/g;
console.log(str.match(expresion_regular));

expresion_regular = /[a-e]/g;
console.log(str.match(expresion_regular));