// Desintegra un  arreglo para enviar cada elemento del arreglo como un argumento independiente

function sumar(texto, ...valores){
  let resultado = 0;
  valores.forEach(
    valor => resultado += valor
  );
  console.log(`${texto}: ${resultado}`);
}

const numeros = [10, 5, 5, 10];
sumar('La suma total es', ...numeros); // es6


//___________________________________________

function sumar2(texto2, ...valores2){
  let resultado2 = 0;
  valores2.forEach(
    valor2 => resultado2 += valor2
  );
  console.log(`${texto2}: ${resultado2}`);
}
const numeros2 = [10, 5, 5, 10];

// es5
// unshift: Para añadir un elemento al principio del array
numeros2.unshift('La suma total es');
sumar2.apply(null, numeros2);
