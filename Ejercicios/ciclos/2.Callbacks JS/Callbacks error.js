const getUsuarioById = ( id, callback )=> {
  const usuario = {
    nombre: "Maria",
    id
  };

  if ( id === 20 ){
    console.log(`El usuario con el id ${id} no existe`);
  } else {
    callback( null, usuario );   
  }

};

getUsuarioById( 20, (err, user) => {

  if( err ){
    return console.log(err);
  }

  console.log("Usuario de base datos", user);
})