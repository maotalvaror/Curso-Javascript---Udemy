/*
Para crear funciones que se ejecuten inmediatamente
o funciones anonimas se utilizan ()
*/

var saludo1 = function(nombre){

  return "Hola " + nombre;

}("Alejandra"); //el nombre que se le concatena

console.log(saludo1); //retorna, Hola Alejandra


var saludo2 = (nombre => `Hola ${nombre}`)("Elizabeth");//el nombre que se le concatena
console.log(saludo2);//retorna, Hola Elizabeth
