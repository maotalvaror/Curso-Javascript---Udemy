// El usuario ingresa una palabra, y los caracteres de esta palabra son convertidos en mayusculas y minusculas
// si es par sera convertida en mayusculas, si es impar sera en minusculas 
//por ejemplo si se le ingresa maria retornara = MaRiA

(function (){
  var palabra = prompt('Digite la palabra que desee');
  var cadena = '';
  var longitud = palabra.length;

    for (let i = 0; i < longitud; i++){
      if (i % 2 == 0){
        cadena += palabra[i].toUpperCase();
      } else {
        cadena += palabra[i].toLowerCase();
      }
    }
    forLetraAscii(longitud, palabra);
    console.log(cadena);
  }
)();

//Se crea una funcion para los codigos ascii de la palabra ingresada
// por ejemplo = se ingresa maria 
/*retorna
109 m
97  a
114 r
105 i
97  a
*/ 

function forLetraAscii(longitud_letra, palabra_){
  var codigo_letraAscii = '';
  for (let j = 0; j < longitud_letra; j++){
    codigo_letraAscii = palabra_.charCodeAt(j);
    console.log(codigo_letraAscii, palabra_[j]);
  }
};