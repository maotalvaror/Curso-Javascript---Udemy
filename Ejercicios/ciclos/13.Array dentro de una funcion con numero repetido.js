function llamarFunction(arreglo, numeroVerificación){
  var contador = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == numeroVerificación) {
      contador++;
    } 

    console.log(`i = ${i}, array[${i}] = ${arreglo[i]}`)
  }
  console.log(`el numero ${numeroVerificación} esta ${contador} veces`)
}
