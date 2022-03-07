let persona1 = {
  nombre: "Maria",
  edad: 14
}

let persona2 = {
  nombre: "Elizabeth",
  edad: 52,
  casada: true
}

/*Operador Spread :
Envia los parametros que tiene en el objeto (persona2)
a (persona1) dejando los datos anteriores que este contenia
*/
persona1 = {
  ...persona2,
  ...persona1
}

console.log(persona1)
console.log(persona2)