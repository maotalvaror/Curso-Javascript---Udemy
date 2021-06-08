//Se esta haciendo una funcion de "Reproducir musica" 
const reproductor = {
  cancion:'',
  reproducir: id => console.log(`Reproduciendo canción con el id ${id}`), 

//Otra función para "Pausar Musica"
  pausar:() => console.log('Pausando la canción'),

//Otra función para "Borrar Musica"
  borrar:(id) => console.log(`Borrando Canción ${id}`),

// Para crear "Una Playlist"
  crearPlaylist:(nombre) => console.log(`Creando Playlist de ${nombre}`),

//Para "Reproducir la Playlist"
  reproducirPlaylist:(nombre)=> console.log(`Reproduciendo la Playlist ${nombre}`),

  //Set es una forma de agregar valores
  set nuevaCancion(cancion){
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },

  //Es una forma de tener devuelta esos valores
  get obtenerCancion(){
    console.log(`${this.cancion}`)
  }

}

//Como se llaman?
reproductor.nuevaCancion = 'Aventura';
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(29);
reproductor.crearPlaylist('Canciones');
reproductor.reproducirPlaylist('Canciones');

//¿Que son las arrow functions? = son una nueva manera de expresar las funciones ( => )
//de manera más resumida y con características nuevas.