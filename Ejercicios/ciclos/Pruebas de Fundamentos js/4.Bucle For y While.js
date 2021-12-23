//Ciclo Mientras

alert('Ciclo while en Aumento')

let Pruebas = 1;

while (Pruebas <= 3) { // muestra 1, luego 2, luego 3
  alert( Pruebas );
  Pruebas++;
}

alert('Ciclo while en Reversa')

let Pruebas2 = 3;
while (Pruebas2) { // cuando Pruebas2 sea 0, la condición se volverá falsa y el bucle se detendrá
  alert(Pruebas2);
  Pruebas2--;
}


//Ciclo For

alert('Ciclo for en Aumento')

for (let i = 1; i <= 3; i++) { // muestra 1, luego 2, luego 3
  alert(i);
}


alert('Ciclo for en Reversa')

for (let i = 3; i >= 1; i--) { // muestra 3, luego 2, luego 1
  alert(i);
}

//Numeros pares con el ciclo for hasta el 20

for (let i = 2; i <= 20; i++){
  if (i % 2 == 0){
    console.log('El numero par es',i)
  }
}