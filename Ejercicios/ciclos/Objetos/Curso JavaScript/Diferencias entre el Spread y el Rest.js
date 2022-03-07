//segun la posicion envia Hola {Nombre}
//recibe cualquier número de parámetros en una función en forma de array.
function saludarRest(saludo, ...nombres) {
  
  for ( i in nombres ){
    console.log( `${saludo} ${nombres[i]}` );
  }
}

saludarRest( "Hola", "Mariana", "Yeraldin", "Yeison", "Jose")


//Concatena Que tal! (los nombres del arr)
function saludarSpread(saludo, ...nombres) {
  console.log( `${saludo} ${nombres}.` );
}

let nombre_personas = ["Elizabeth", "Camila" ,"Maria"];
saludarSpread("Que tal!", nombre_personas);

for(let i = 0; i < nombre_personas.length; i++){
  console.log("que tal!", nombre_personas[i])
}


//concatena el array partes1 al arr partes2 con el operador spread
let partes = ["brazos", "piernas"];
let partes2 = ["cabeza", "cuello", ...partes, "pies"]

console.log(partes2);