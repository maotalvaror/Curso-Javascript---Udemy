//Sin la funcion This. se debe crear la variable
//Con la funcion This. en el objeto me llama las variables sin declararlas

// const nombre = "Hola";
// const precio = 20;

const producto = {
  nombre:"Monitor de 20 pulgadas",
  precio:300,
  disponible: true,
  mostrarInfo:function(){
    console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
  }
}
producto.mostrarInfo();