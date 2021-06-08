//Estamos evaluando varios casos de forma de pago
//Switch Case
const metodoPago = 'Efectivo';
switch(metodoPago){
case 'Efectivo':
Pagar();
break;
case 'Cheque':
  console.log(`pagaste con ${metodoPago}`);
  break;
  case 'tarjeta':
    console.log(`pagaste con ${metodoPago}`);
    break;
    default: 
    console.log('Aún no has seleccionado un metodo de pago')
    break;
  }

  function pagar(){
    console.log('pagando...')
  }