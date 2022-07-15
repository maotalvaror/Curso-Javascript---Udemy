class Cuadrado{
  constructor(lado){
    this.lado = lado;
  }
  getArea(){
    return this.lado * this.lado;
  }
};

function imprimirCuadrado( cuadrado ){

  if ( !(cuadrado instanceof Cuadrado) ){
    console.error("El parametro enviado no es un cuadrado");
  }

  console.log( cuadrado.getArea() );
};

let medidas = new Cuadrado(10);
//let medidas = "123" //ERROR
imprimirCuadrado(medidas);