function crearJugador( nombre,
  {hp, sp, clase} = {hp: 100, sp: 50, clase: "Mago"}
  //Valores por defecto
){
  console.log(nombre, hp, sp, clase);
}

//Valores Finales
crearJugador("YeisonR", {
  hp: 500,
  sp: 100,
  clase: "Luchador"
});