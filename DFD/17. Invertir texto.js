console.log('Este programa invierte el texto digitado por usuario');
const cadenaTexto =prompt('Digite cadena de texto');
let cadenaInvertida = '';
let longitudCadena = cadenaTexto.length; 
let ConteoRegresivo = longitudCadena;

console.log('Longitud: ',longitudCadena);
for(let i = 0; i < longitudCadena; i++){
  ConteoRegresivo -= 1;
  cadenaInvertida += cadenaTexto[ConteoRegresivo];
}
console.log(cadenaInvertida);


cadenaInvertida = '';
for(let i = longitudCadena - 1; i >= 0; i--){
  cadenaInvertida += cadenaTexto[i];
}
console.log(cadenaInvertida);



cadenaInvertida = '';
console.clear();
console.log("while: ")
longitudCadena = cadenaTexto.length;

while (longitudCadena > 0) {
  longitudCadena -= 1;
  cadenaInvertida += cadenaTexto[longitudCadena];  
}

console.log(cadenaInvertida)