const getUsuarioById = ( id, callback )=> {
  const usuario = {
    nombre: "Maria",
    id
  };

  callback( null, usuario );

};

getUsuarioById( 1, (err, user) => {

  if( err ){
    return console.log(err);
  }

  console.log("Usuario de base datos", user);
})

