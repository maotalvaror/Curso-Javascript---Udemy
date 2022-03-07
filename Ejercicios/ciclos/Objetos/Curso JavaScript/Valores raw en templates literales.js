let mensaje = `Hola \nMundo`;
console.log(mensaje);  
//Toma un salto de linea

let mensaje2 = String.raw`Hola \nMundo`;
console.log(mensaje2); 
//Envia todo el string sin tomar los caracteres especiales

/*let mensaje3 = String.raw'Hola \nMundo\\';
console.log(mensaje3);
Error ya que String.raw solo funciona con los templates literal
*/