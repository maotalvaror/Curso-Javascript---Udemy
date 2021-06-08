const reproductor= { //Añadiendo funciones.
reproducir: function(id){
  console.log(`Reproduciendo Canción con el ID ${id}`);
 },
 pausar: function(){
   console.log('Pausando')
 },
 borrar: function(id){
  console.log(`Borrando canción ${id}`);
  },
  crearPlaylist: function(nombre){
    console.log(`Creando la Playlist de ${nombre}`)
  },
  reproducirPlaylist: function(nombre){
    console.log(`Reproduciendo la Playlist ${nombre}`)
  }
}

reproductor.reproducir(30);//se le agrego un ID
reproductor.pausar();//una funcion para "pausar"
reproductor.borrar(30); //y otra para "borrar"
reproductor.crearPlaylist('Canciones');
reproductor.reproducirPlaylist('Canciones')