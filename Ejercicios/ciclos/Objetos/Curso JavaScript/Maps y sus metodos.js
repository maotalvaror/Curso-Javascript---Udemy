let mapa = new Map();

mapa.set("nombre", "Alejandra");
mapa.set("edad", 15);
mapa.set("apellido");

console.log(mapa);
console.log(mapa.size);

console.log(mapa.get("nombre"));  // Alejandra
console.log(mapa.get("edad"));  // 15
console.log(mapa.has("nombre"));  // true
console.log(mapa.has("apellido"));  // false

mapa.delete("nombre");
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));

console.log(mapa);

mapa.set("edad");
console.log(mapa);

mapa.clear();
console.log(mapa);