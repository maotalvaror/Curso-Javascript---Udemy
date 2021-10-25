//Verificar si en las palabras digitadas por usuario cuales son Polindromo y cuales no
console.log('Verificar si en las palabras digitadas por usuario cuales son Polindromo y cuales no');
var NumeroPalabras = parseInt(prompt('Digite cuantas palabras se van a verificar'));
var Invertida = '';

//El for se itera el numero de veces que digite el usuario (en la var = NumeroPalabras)
for (let i = 0; i < NumeroPalabras; i++) {
  
  var mensaje = 'Digite la palabra ' + i+1;
  var Palabra = prompt(mensaje);
  var longitud = Palabra.length;
  var Conteo = longitud;
  
  for(let l = 0; l < longitud; l++){
    Conteo = Conteo - 1;
    Invertida = Invertida + Palabra[Conteo];
  } 

  if (Invertida == Palabra) {
    console.log('La palabra',Palabra, 'Es palindroma')
  }
  Invertida = '';
}