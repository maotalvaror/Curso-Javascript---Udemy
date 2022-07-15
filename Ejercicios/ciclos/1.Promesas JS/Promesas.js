function tareaAsincrona(){
  let promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      console.log("Proceso Asincrono terminado");
      resolve(); // Todo esta Bien!
      //reject(); // Todo esta Mal!
    }, 1500);
  })
  return promesa;
}

tareaAsincrona().then( function(){
    console.log("Todo esta Bien!");
  },  
  function(){
    console.error("Todo esta Mal!");
  });