const producto = {
  nombre:"Monitor de 32 pulgadas",
  precio:400,
  disponible:true
}

// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring

const {nombre}=producto;
console.log(nombre);

//Destructuring con arreglos
const numeros=[10,20,30,40,50];
const [primero]= numeros;
console.log(primero);