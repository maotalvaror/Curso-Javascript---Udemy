var x = ["A", "B", "C"];
var y = [{name:"A"}, "B", 123];

x.forEach((e, i) => 
  {console.log( `Elemento: ${e}, Indice: ${i}` )
});

console.log(typeof x);
console.log(`Èl arreglo tiene ${x.length} elementos`);
y.push(x);
console.log(`Èl arreglo tiene ${y.length} elementos`);
