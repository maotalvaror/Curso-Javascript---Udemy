//especifica que es lo que hace el programa
console.log('Recibe una cantidad de numeros decididos por el usuario, los suma, los resta, muestra el modulo de la suma y los multiplica');

var cantidadNumerosAProcesar = parseInt(prompt('Digite la cantidad'));

var suma = 0;
var resta = 0;
var multi = 1;
var arreglo = [];

for (let H = 0; H < cantidadNumerosAProcesar; H++) {
  var num = parseInt(prompt(`Digite el numero ${H+1}`))
  arreglo.push(num);
}

for (let i = 0; i < cantidadNumerosAProcesar; i++) {
   suma += arreglo[i];
   resta -= arreglo[i];
   multi *= arreglo[i];
}

console.log('La suma es ',suma)
console.log('La resta es ',resta)
console.log('La multiplicacion es ',multi)

