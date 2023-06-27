function operacionesMatematicas(a, b, c) {
  var suma = (a + b + c);
  console.log(suma);
  
  var resta = (a - b - c);
  console.log(resta);

  var multiplicar = (a * b * c);
  console.log(multiplicar);

  var division = (a/b/c);
  console.log(division);
}

var player = {
  name: "Maria",
  sayHi: function(){
    console.log(`Hola, mi nombre es ${this.name}`);
  }
}