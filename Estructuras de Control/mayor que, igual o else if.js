//Condiciones:Solamente se va a ejecutar la primera condicion que se cumpla.
//por ejemplo: si se cumplen las 3 solo se ejecutara el primer codigo.
const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;

if(dinero >=totalAPagar){
  console.log('Si puede pagar');
} else if(tarjeta){
  console.log('Si puede pagar con tarjeta');
} else {
  console.log('No puede pagar');
}