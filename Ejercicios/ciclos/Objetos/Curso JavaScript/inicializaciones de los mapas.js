let mapa = new Map( [ ["Nombre", "Maria"], ["Edad", 15], ["Estudia", true], ["Letra", "A"] ] );
console.log(mapa);
// 3
console.log(mapa.size);
// 15
console.log(mapa.get("Edad"));
// true
console.log(mapa.has("Nombre"));
//undefined
console.log(mapa.get("Letra"));

console.log(mapa.has("Letra"));