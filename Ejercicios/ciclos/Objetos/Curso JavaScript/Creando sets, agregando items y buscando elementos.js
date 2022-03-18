let items = new Set();

//Agregar elementos al item
items.add(7);
items.add(8);
items.add(10);
items.add(11);
items.add(11);
items.add(11);
items.add("11");

console.log(items);
//Saber el numero de elementos
console.log(items.size);
//Verificar si existe un elemento
console.log(items.has(5));



let items2 = new Set( [1, 2, 3, 4, 6, 23] );

console.log(items2.add("24"));
console.log(items.has(24));