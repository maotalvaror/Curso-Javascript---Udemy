function tareaAsincrona(){
  setTimeout(function(){
    console.log("Proceso Asincrono terminado");
    Mensaje_bueno(); // <= Todo esta Bien!
    // Mensaje_malo(); <= Todo esta Mal!
  }, 1500)
}

tareaAsincrona();

console.log("Codigo secuencial");

function Mensaje_bueno(){
  console.log("Todo esta Bien!");
}

function Mensaje_malo(){
  console.log("Todo esta Mal!");
}