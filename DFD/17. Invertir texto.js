console.log('Este programa invierte el texto digitado por usuario');
const cadenaTexto =prompt('Digite cadena de texto');

const longitudCadena = cadenaTexto.length;
console.log('La longitud es de ',longitudCadena);

const cadenaInvertida = '';
const indice = longitudCadena; 

for(let i = 0; i == longitudCadena; i++){
  cadenaInvertida = cadenaInvertida.concat(cadenaTexto, indice, 1)
  indice = indice-1;
} 
console.log(cadenaInvertida)