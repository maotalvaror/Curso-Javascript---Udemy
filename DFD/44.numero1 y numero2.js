console.log('Orden entre el primer nunmero y segundo numero')
var n1 = parseInt(prompt('Digite el primer numero'));
var n2 = parseInt(prompt('Digite el segundo numero'));

if (n1 >= n2) {
  console.log('No se podra realizar ya que estan en el orden incorrecto')
}  else {
    for (let i = n1; i <= n2; i++)
    console.log(i)
}