console.log('Si las camisas compradas son mayor a 3 se le hara un descuento del 20 porciento de caso contrario el 10 porciento')

var numeroCamisas = parseInt(prompt('Digite el numero de camisas'));
var precioCamisas = parseInt(prompt('Digite el precio de camisas'));
var precioCompra = 0;
var precioFinal = 0;
var descuento = 0;


if (numeroCamisas >= 3) {
  precioCompra = numeroCamisas * precioCamisas;
  descuento = precioCompra * 0.20;
  precioFinal = precioCompra-descuento;
  console.log('El total a pagar con el 20% de descuento es de',precioFinal)
} else {
  precioCompra = precioCamisas * precioCamisas;
  descuento = precioCompra*0.10;
  precioFinal = precioCompra-descuento;
  console.log('El total de la compra con el 10% de descuento es:',precioFinal)
}
