let items = new Set([1, 2, 3, 4, 23, "45"])
console.log(items);

//elimina el elemento 3 
items.delete(3);
console.log(items);

items.clear();

console.log(items.size);
console.log(items)