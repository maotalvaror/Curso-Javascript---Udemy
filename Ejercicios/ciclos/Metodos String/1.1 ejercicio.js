// El usuario ingresa una palabra, y los caracteres de esta palabra son convertidos en mayusculas y minusculas
// si es par sera convertida en mayusculas, si es impar sera en minusculas

var palabra = prompt('Digite la palabra que desee');
var cadena = '';
var longitud = palabra.length;

for (let i = 0; i < longitud; i++){
  if(i % 2 == 0){
    cadena += palabra[i].toUpperCase();
  } else {
    cadena += palabra[i].toLowerCase();
  }
}

console.log(cadena);