//Pide la palabra
const palabra = prompt('Digite la palabra que desee');

//variables que se utilizaran para invertir la palabra ingresada

let Invertida = Polindromo(palabra);
console.log(Invertida);

/*  Ejemplos
let invertida2 = Polindromo;
console.log(invertida2);
*/
function Polindromo(palabra) {
  if (!palabra) return;

  let alreves = '';
  let longitud = palabra.length;

  for(let i = longitud - 1; i >= 0; i--){
    alreves = alreves + palabra[i];
  } 

  return alreves;
}


function yeison(){
  console.log('maria')
  return 'yeison';
}
let capturar_nombre = yeison()
console.log(capturar_nombre)


// if (Invertida == palabra) {
//   console.log('Es polindromo')
// } else {
//   console.log('No es polindromo',)
// }




/*
1. PEntrada = 'ana'
  Palreves = 'ana'

  polindromo = PEntrada es iagual a PAlreves

2. 
  pEntrda = yeison
  pAlreves = nosiey

  No pilindromo por que Pentrada no es igual Palreves
*/