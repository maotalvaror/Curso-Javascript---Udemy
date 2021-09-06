console.log('Recibe la cantidad de llantas que compro, si son mas de 5 lo multiplica por 700 si no, lo multiplica por 800')
var numeroLlantas = parseInt(prompt('Digite el numero de llantas'));
var precio = 0;


if (numeroLlantas >= 5) {
  precio = numeroLlantas * 700;
  console.log('El total de la compra de llantas es',precio);
} else {
  precio = numeroLlantas * 800;
  console.log('El precio final es de',precio);
}
