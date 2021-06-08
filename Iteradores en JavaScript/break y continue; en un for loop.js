//El breack va a cortar o romper la ejecucion de un for 
//El continue nos permitira interpretar un elemento, identificarlo y continuar la ejecucion
console.log('En numero se busca el 5 y se detiene la ejecucion')
//Break ( Cinco en numero )
for(let i = 0; i<=10; i++){
  if(i === 5){
    console.log('Este es el 5');
    break;
  }
  console.log(`Numero: ${i}`)
}

console.log('En letras se busca el numero 5 y sigue la ejecucion') 

//Continue ( Cinco en letras )
for(let J = 0; J<=10; J++){
  if(J === 5){
    console.log('CINCO');
    continue;
  }
  console.log(`Numero: ${J}`)
}

