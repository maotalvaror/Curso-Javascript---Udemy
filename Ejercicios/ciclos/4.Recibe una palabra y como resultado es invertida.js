//pide la palabra
const palabra = prompt('Digite la palabra que desee');

//variables
let Invertida = '';
let longitud = palabra.length; 
let Conteo = longitud;


for(let i = 0; i < longitud; i++){
  //Conteo = Indice de la palabra, va restando a medida que se itera el for
  Conteo = Conteo - 1;
  //concatenación de la palabra invertida
  Invertida = Invertida + palabra[Conteo];
}
console.log(Invertida);
