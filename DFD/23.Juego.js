console.log('Este programa resive un numero digitado por usuario, lo compara con uno aleatorio, si lo lograste mostra en que intento fue que este dentro de 10 numeros')

function jugar() {
  var numero = Math.floor((Math.random() * 10) + 1);
  var intento = 0;
  var x = 0;
  var valor = parseInt(prompt('Digite un numero'));

  while (x == 0) {
    intento = intento + 1;

      if (valor == numero) {
          x = 1;
      }else if (valor < numero){
          console.log('Este numero es muy pequeño')
      }else{
        console.log('Este numero es muy grande')
      
      }

      numero = Math.floor((Math.random() * 10) + 1);
  }
  console.log('Perfecto lo adivinaste el numero en: ',intento)
}

jugar()