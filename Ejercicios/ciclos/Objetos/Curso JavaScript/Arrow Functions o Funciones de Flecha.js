//retornar el valor que se le envia
var Funcion2 = function (valor) {
  return valor;
}

let Funcion1 = valor => valor;
//_____________________________________

//sumar num1 y num2
var sumar2 = function(num1, num2){
  return num1 + num2;
}

var sumar = (num1, num2) => num1 + num2;

//____________________________________

//Obtener un objeto 
var obtenerLibro = function (id) {
  return {
    id:id,
    nombre: "Ana Frank"
  }
}

let obtenerLibro2 = id => ({ id:id, nombre: "Ana Frank" });
obtenerLibro2();

//____________________________________

var saludar2 = function(){
  return "Hola Mundo";
}

let saludar1 = () => "Hola Mundo";

//____________________________________

var saludarPersona2 = function(nombre){
  var salida = "Hola, " + nombre;
  return salida
}

let saludarPersona1 = nombre =>{
  let salida = `Hola, ${nombre}`
  return salida;
}