const producto = {
  nombre : "Monitor 20 pulgadas",
  precio : 300,
  disponible : true,
  informacion : {
    medidas: {
    peso :'1kg',
    medida :'1m'
  },
  fabricacion: {
    pais: 'Colombia'
     }
   }
}
console.log(producto)
console.log(producto.informacion)
console.log(producto.informacion.peso)
console.log(producto.informacion.medida)

// DIferentes maneras para acceder a valores de un objeto
// console.log(producto);
// console.log(producto.nombre);
// console.log(producto['nombre']);


//Agregar nuevas propiedades al objeto
// producto.imagen = "imagen.jpg";
//Eliminar propiedades del objeto
// delete producto.disponible;
// console.log(producto.nombre);
// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring: me permite sacar de una estructura lo indicado
// const{ nombre, precio, disponible, imagen} = producto;
// console.log(nombre);
// console.log(precio);
// console.log(disponible);
// console.log(imagen);

