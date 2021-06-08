//Fizz Buzz - 100 numeros
//Multiplos de 3= 3 6 9 12....    => imprimiran Fizz
//Multiplos de 5= 5 10 15 20....  => imprimiran Buzz
//Multiplos de 15= 15 30 45 60... => imprimiran Fizz Buzz

for(let i = 1; i < 100; i++ ){
  if(i % 3 === 0 ){
    console.log(`${i} Fizz Buzz`)
  }
  if(i % 3 === 0){
    console.log(`${i} Fizz`)
} else if(i % 5 === 0){
  console.log(`${i} Buzz`)
} 
  }