//Declaracion de Funcion (Function Declaration)
sumar();//Este codigo si funciona 

function sumar(){
  console.log(2+2);
  }
  
  
  //Expresion de Funcion (Function Expression)
  const sumar2= function(){//Mientras que si se le llama a la funcion2 de la misma manera da error
    console.log(5+4);
  }
  sumar2();