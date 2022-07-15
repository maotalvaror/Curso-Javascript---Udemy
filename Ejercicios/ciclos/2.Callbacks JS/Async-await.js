const getNombre = async() => {
  
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Maria');
    }, 3000)
  });
  
  // return "Maria";
}

const saludo = async() => {
  const nombre = await getNombre();

  return `Hola ${ nombre }`;
}

saludo().then( mensaje => {
  console.log(mensaje);
})

// getNombre().then(nombre => {
//   console.log(nombre);
// });