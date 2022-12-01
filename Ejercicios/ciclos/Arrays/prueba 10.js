(function(){
  var Nombre = prompt('Digite un nombre');

for (let i = 0; i < Nombre.length; i++){
  var cadena = Nombre[0].toUpperCase() + Nombre.substring(1, Nombre.length).toLowerCase();
}
console.log(cadena);

//_______________________________________

var cantidadNombres = prompt('Digite la cantidad de nombres');
var arrNombres = [];

for (let i = 0; i < cantidadNombres; i++){
  Nombre = "algo"
  var NombreDigitado = prompt(`Digite el ${ i + 1 } nombre`);
  arrNombres.push(NombreDigitado);
}

var cadena2 = arrNombres.map(function(Nombre2){
  return Nombre2[0].toUpperCase() + Nombre2.substring(1, Nombre2.length).toLowerCase();
})

console.log(cadena2);
})()