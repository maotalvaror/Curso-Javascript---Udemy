//guardar_localStorage();
obtener_localStorage();

function obtener_localStorage(){

  if(localStorage.getItem("nombre")){

    // Existe el nombre en el localStorage

    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"));

    console.log(nombre);
    console.log(persona);

  } else {
    console.log('No hay entradas en el localStorage')
  }
}

function guardar_localStorage(){
  let persona = {
    nombre: "Andrea",
    edad: 28,
    correo: "andreaxyz@gmail.com",
    coords: {
      lat: "10",
      lng: "-10"
    }
  };

  let nombre = "Pedro";

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("persona", JSON.stringify(persona));
}

