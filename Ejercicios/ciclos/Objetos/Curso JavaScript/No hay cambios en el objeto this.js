var persona1 = {
  nombre: 'Yeison',
  saludar() {
    console.log(this.nombre);
  }
}

persona1.saludar(); // Yeison

var persona2 = {
  nombre: 'Alejandra'
}

persona1.saludar.call(persona2);



//Cuando se de click en la pagina mostrar un mensaje en consola (ECMAScript 5)
var manejador = {
  id: "123",
  init:function(){
    document.addEventListener("click", (function(event){
      this.clickEnPagina( event.type ); 
      console.log(this)
      //Apunta al objeto y todas sus propiedades
    
    }).bind(this), false); 
    //El metodo bind() crea una nueva funcion, que cuando es llamada asigna a this el valor entregado
    //false para que la funcion no se ejecute inmediatamente
  }, //fin del init

  clickEnPagina: function(type){
    console.log("Manejando " + type + " para el id: " + this.id);
  }
};
manejador.init();


//Cuando se de click en la pagina mostrar un mensaje en consola (ECMAScript 6)

var manejador2 = {
  id2: "123",
  init2:function(){
    document.addEventListener("click", 
    event => this.clickEnPagina2( event.type ));
  },
  clickEnPagina2: function(type){
    console.log("Manejando " + type + " para el id #2: " + this.id2);
  }
};
manejador2.init2();