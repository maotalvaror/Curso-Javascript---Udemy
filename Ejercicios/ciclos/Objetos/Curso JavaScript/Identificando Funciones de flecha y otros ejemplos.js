var restar = (a, b) => a - b;
console.log( typeof restar );

/*
verifica si un objeto en su cadena de prototipos
contiene la propiedad que se le pase
*/
var sumar = (a, b) => a + b;
console.log(sumar instanceof Function);


/*
No se puede declarar un new en una función
ya que no es un constructor
var restar2 = new restar(1,2);
*/

var restar2 = restar(1,2);
console.log(restar2);

//Arguments no esta definida en funciones de flecha
// ((a,b) => {
//   console.log( arguments[0] )
// })();  //arguments is not defined


//crear el arguments en una funcion

function ejemplo(x, y){

  ((a,b) => {
    console.log( arguments[0] )
  })();

}

ejemplo(10, 20); // 10