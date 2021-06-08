//Creando un if 
const puntaje = 4000;
//hacemos una comparación de IF y ELSE (COMPARACIÓN)
if(puntaje == 4000){ // == Es igual a
console.log('Si es igual')
} else{
  console.log('No es igual')
}

// != Diferente de  Y  === Operador Estricto

const Autenticado = false;
if(Autenticado == true){
  console.log('Si esta Autenticado');
} else{
  console.log('No esta autenticado');
}

const edad = 28;
if(edad >= 18){
console.log('Es mayor de edad');
} else{
  console.log('Es menor de edad');
}
//Modo no estricto
const puntaje2 = 1000;
if(puntaje2 == "1000"){ 
console.log('Si es igual en el comparador normal')
}

//Modo estricto
const puntaje3 = 1000;
if(puntaje3 === "1000"){ 
console.log('Si es igual en el comparador estricto')
}else{
  console.log('No es igual en el comparador estricto')
}

// ==  Operador que no es estricto mientras que ===  se le conoce como operador estricto. 