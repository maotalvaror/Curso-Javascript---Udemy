function llamarFunction(arreglo, numeroVerificaci√≥n){
  var contador = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == numeroVerificaci√≥n) {
      contador++;
    } 

    console.log(`i = ${i}, array[${i}] = ${arreglo[i]}`)
  }
  console.log(`el numero ${numeroVerificaci√≥n} esta ${contador} veces`)
}
