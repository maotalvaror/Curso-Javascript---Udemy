/*
  fn([1, 2, 3, 4, 5])

  salida:
    1 ^ 2 = 1
    1 ^ 3 = 4
    1 ^ 4 = 27
    1 ^ 5 = 256

    2 ^ 1 = 2
    2 ^ 3 = 8
    2 ^ 4 = 16
    2 ^ 5 = 32

    3 ^ 1 = 3
    3 ^ 2 = 9
    3 ^ 4 = 81
    3 ^ 5 = 243

    4 ^ 1 = 4
    4 ^ 2 = 16
    4 ^ 3 = 64
    4 ^ 5 = 1024

    5 ^ 1 = 5
    5 ^ 2 = 25
    5 ^ 3 = 125
    5 ^ 4 = 625
*/

function llamarFuncion(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] != arr[j]){
        var Potencia = Math.pow(arr[i], arr[j])
        console.log(`${arr[i]} ^ ${arr[j]} = ${Potencia}`) 
      } 
    }
  }
}