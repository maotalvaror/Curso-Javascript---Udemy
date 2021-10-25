console.log('Recibe cantidad de palabras deseadas por usuario, las concatena como resultado el ultimo indice');
var CantidadPalabras = parseInt(prompt('Digite cuantas palabras desea ingresar'));
var longitud = 0;
var palabrasConcatenadas ='';

for (let i = 0; i < CantidadPalabras; i++) {
  const palabras = prompt('Digitelas');
  longitud = palabras.length ;
  var nuevoResultado = palabras[longitud-1];
  console.log(nuevoResultado);
  palabrasConcatenadas =palabrasConcatenadas+' '+palabras;
  console.log(palabrasConcatenadas);
}
