let numero = parseInt(prompt('Digite un numero'));

console.log('Primer FOR')

for (let i = 1; i <= 10; i++) {
  let resultado = numero*i;
  console.log(numero, 'x',i,' = ',resultado)
}
console.log('Segundo FOR')

for (let j=10; j >=1; j--) {
  let _resultado = numero*j;
  console.log(numero, 'x',j,' = ',_resultado)
}

let nueva = 1;

console.log('Primer WHILE')

while (nueva <= 10) {
  let resul = numero*nueva;
  console.log(numero, 'x',nueva,' = ',resul);
  nueva++;
}

let _nueva = 10;

console.log('Segundo WHILE');

while (_nueva >= 1){
  let resul = numero*_nueva;
  console.log(numero, 'x',_nueva,' = ',resul);
  _nueva--;
}