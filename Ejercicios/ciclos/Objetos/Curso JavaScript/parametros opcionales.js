function saludo( mensaje = "Hola", tiempo = 3000) {
  
  setTimeout(function () {
    console.log( mensaje ); 
/*
establece un tiempo determinado que ejecuta
una función o un pedazo de codigo
*/
  }, tiempo);
}

saludo();



function saludar( fn ) {
  console.log( typeof fn ); 
//undefined ya que fn no esta declarada y no es una funcion

  if( typeof fn === "undefined" ){
    console.error('No es una Función');
    //controla el mensaje de error
    return;
  }
  
  fn();

}

saludar();