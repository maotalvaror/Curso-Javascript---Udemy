(function () {
  var cantidadPalabras = prompt('Digite la cantidad de palabras que desee');
  var arrPalabras = [];

  for (let i = 0; i < cantidadPalabras; i++) {
    var palabra = prompt(`Digite la ${i + 1} palabra`);
    if (palabra.length) {
      arrPalabras.push(palabra);

      if (i % 2 == 0) {
        console.log(palabra[0].toUpperCase());
      } else {
        console.log(palabra[palabra.length - 1].toUpperCase());
      }
    }
  }
  console.log(arrPalabras);
})();