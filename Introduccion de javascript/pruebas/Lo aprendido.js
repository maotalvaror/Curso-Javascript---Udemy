var num1=10;
var num2=11;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);


var modulo=num2%num1;
console.log(modulo);

if(modulo>0){
  for(var i=0; i<5; i++)
  {
    console.log(i, ': ', '', 2, 54,modulo);
  }
}
var edad = prompt('Digite su edad');
if (edad >= 18) {
  //alert('Mayor de edad')
  console.log('Mayor de edad')
} else {
  //alert('Menor de edad')
  console.log('Menor de edad')
}

switch (edad) {
  case 17:
    console.log('Tiene '+ edad +' años');
    break;
  case 18:
    console.log(`Tiene ${edad} años`);
    break;

  default:
    console.log('No tiene 17 ni 18 años')
    break;
}