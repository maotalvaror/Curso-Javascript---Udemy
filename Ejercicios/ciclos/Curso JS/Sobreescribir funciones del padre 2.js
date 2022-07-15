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
    return super.getArea()
  }
}

let rectangulo = new Rectangulo(2, 3);
let cuadrado = new Cuadrado(4);

console.log(rectangulo.getArea());