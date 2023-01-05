// // Promesa que devuelve resolve
// var promesa_resolve = new Promise((resolve, reject) => {
// setTimeout(() => resolve("El trabajo se realizo correctamente"), 1000);
// });
// // Promesa que devuelve reject
// var promesa_reject = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("Error en el trabajo")), 1000);
// });


function tareaAsincrona(){
  let promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      console.log("Proceso Asincrono terminado");
      //resolve(); // Todo esta Bien!
      reject(); // Todo esta Mal!
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