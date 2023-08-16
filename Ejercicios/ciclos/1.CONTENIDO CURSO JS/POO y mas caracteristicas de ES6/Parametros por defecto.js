// ES5
function example(param1){
  if(typeof param1 === 'undefined'){
    param1 = 'Valor por defecto';
  }
  console.log(param1);
}
example(5);
example('Hola');
example();
example(null);
example(0);
example(false);

// ES6
function example2(param1='Valor por defecto'){
  console.log(param1);
}
example2(5);
example2('Hola');
example2();
example2(null);
example2(0);
example2(false);