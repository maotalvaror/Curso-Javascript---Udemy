console.log('Numeros multiplos de 3')
var numero = parseInt(prompt('Digite un numero'));

for (let i = 1; i <= numero; i++) {
  if (i % 3 == 0) {
    console.log('El numero:' ,i,' es multiplo de 3')
  }
}