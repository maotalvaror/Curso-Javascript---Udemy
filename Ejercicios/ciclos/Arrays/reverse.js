//invierte el orden de los elementos de un array
//El primer elemento pasa a ser el último y el último pasa a ser el primero.

let numeros = [1, 2, 3, 4, 5];
let nuevo_array = numeros.reverse();
console.log(nuevo_array)

//Array(5) [ 5, 4, 3, 2, 1 ]

let nombre = ['Maria', 'Alejandra', 'Otalvaro', 'Rodriguez'];
let cambio = nombre.reverse();
console.log(cambio);

//Array(4) [ "Rodriguez", "Otalvaro", "Alejandra", "Maria" ]


let objeto = [
  {
    nombre: "Maria"
  },
  {
    nombre:"Alejandra"
  },
  {
    apellido:"Otalvaro"
  },
  {
    apellido:"Rodriguez"
  }
];

let cambio_ = objeto.reverse();
console.log(cambio_)