const producto = {
  nombre: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true
}

const medidas = {
  peso: "1kg",
  medida: "1m"
}

console.log(producto);
console.log(medidas);

//Uniendo 2 objetos
const resultado = Object.assign(medidas, producto);
console.log(resultado);

//Spread Operator o Rest Operador
//... copia el producto y medidas
const resultado2 = {...producto,...medidas}
console.log (resultado2);
