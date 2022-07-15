class Rectangulo{
  constructor(alto, largo){
    this.alto = alto;
    this.largo = largo;
  }
  getArea(){
    return "Rectangulo: " + (this.alto * this.largo);
  }
}

class Cuadrado extends Rectangulo{
  constructor(alto){
    super(alto, alto);
  }
  getArea(){
    return "Cuadrado: " + (this.alto * this.alto);
    // return super.getArea();
  }
}



let rectangulo = new Rectangulo(3,2);
let cuadrado = new Cuadrado(3);

console.log( cuadrado.getArea() );
