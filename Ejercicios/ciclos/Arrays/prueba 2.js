// //Metodo Array.from
var palabra = prompt();
var arr = 
  Array.from(palabra)
  .reverse()
  .reduce(function(a, e){return a.concat(e)});

console.log(arr);

// //Metodo Split
var palabra2 = prompt();
var arr2 =
  palabra2.split('')
  .reverse()
  .reduce(function(a, e){return a.concat(e)});

console.log(arr2);

var palabra3 = prompt();
var arr3 =
  palabra3.split('')
  .map(a => {
    var o = {}
    o[a] = a;
    return o;

  });

console.log(arr3);