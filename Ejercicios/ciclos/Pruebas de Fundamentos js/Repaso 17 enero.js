//for 
for(let i = 0; i < 3; i++){
  console.log(i);    //  0, 1, 2
}

//while
let i = 0
while(i < 3){
console.log(i);     //  0, 1, 2
i++
}

//switch
let j = 2;
switch (j) {
  case 1: console.log("El numero ingresado es Uno")
  break;
  
  case 2: console.log("El numero ingresado es Dos")
  break;
  
  default:
  break;
}

//Funciones
function nuevaFuncion() {
  console.log("Creacion de la Funcion")
}
nuevaFuncion()

//Objetos

var ObjetoConPropiedades = {
propiedad_String : "S",
propiedad_Numero : 2,
propiedad_Booleana : true
}

console.log(ObjetoConPropiedades)

/*
toString =
El metodo toString devuelve un string (   [object Object]   ).

valueof = 
El metodo valueOf devuelve el objeto en si.
*/

