const carrito =[];
//Definir un producto
const producto={
  nombre:"Monitor de 32 pulgadas",
  precio:400
}
const producto2={
  nombre:'Celular',
  precio:800
}
//.Push agrega al final de un arreglo
carrito.push(producto2);
carrito.push(producto);

const producto3={
  nombre:'Teclado',
  precio:50
}
carrito.unshift(producto3);
console.table(carrito);

//Eliminar el ultimo elemento de un arreglo
//para objetos solamente delete, "el producto" ."elemento"
//La funcion "pop" elimina el ultimo elemento
carrito.pop();
console.table(carrito);

//eliminando el primer elemento
carrito.shift();
console.table(carrito);
//eliminar el elemento de la mitad
carrito.splice(2);
console.table(carrito);