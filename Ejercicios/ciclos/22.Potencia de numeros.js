/*
  fn([1, 2, 3, 4, 5])

  salida:
    1 ^ 1 = 1
    2 ^ 2 = 4
    3 ^ 3 = 27
    4 ^ 4 = 256
    5 ^ 5 = 
*/
 function llamarFuncion(array) {
  for (let i = 0; i < array.length; i++) {
  var nuevoResultado = Math.pow(array[i], array[i])
  console.log(`${array[i]} ^ ${array[i]} = ${nuevoResultado}`)
  }
}