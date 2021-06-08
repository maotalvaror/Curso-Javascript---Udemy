const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Operador mayor que...
console.log(numero1 > numero3);
console.log(numero3 > numero1);

//Operador menor que...
console.log(numero1 < numero3);
console.log(numero3 < numero1); //menor que

//Revisar si dos numeros son iguales...
console.log(numero1 == numero3);
console.log(numero2 == numero1); //Solo se fija en el valor

//comparador estricto
console.log(numero1 === numero2); //Se fija en el valor y tipo de variable (estricto)
console.log(numero1 === parseInt(numero2));
console.log(typeof numero1);
console.log(typeof numero2);

//Diferente contraseña 
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero1 != numero2);

//Undefined
let numero4;
console.log(numero4);

//Null
let numero5 = null;;
console.log(numero5);

//Booleans
const Boolean1 = true;
const Boolean2 = false;
const Boolean3 = "true";

console.log(Boolean1);
console.log(Boolean2);
console.log(Boolean1 === Boolean3);

// const Boolean4 = newBoolean(true);
// console.log(boolean4);

//comparacion entre booleans
const boolean5 = true;
const boolean6 = false;
console.log(boolean5 === boolean6);
console.log(boolean5 === true);
console.log(boolean6 === false);

//Diferentes maneras de hacer un boolean
const autenticado = true;
if(autenticado === true){
  console.log('Si puedes ver Netflix');
}else{
  console.log('No puedes ver Netflix');
}

//Operador ternario
console.log(autenticado ? 'si esta autenticado' : 'no esta autenticado');

//
const nombre = "Monitor 20 pulgadas"
const precio = 300;
const disponible = true;
//objeto que agrupa todo en una sola variable

//Objet literal variables = y objeto :
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible:true
}
console.log(producto);