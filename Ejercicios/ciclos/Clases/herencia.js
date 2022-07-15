class Rectangulo{
  constructor(alto, largo){
    this.alto = alto;
    this.largo = largo;
  }
  getArea(){
    return this.alto * this.largo;
  }
}

let rectangulo = new Rectangulo(3,2);
console.log( rectangulo.getArea() );

class Cuadrado extends Rectangulo{
  constructor(alto){
    super(alto, alto);
  }
}

let cuadrado = new Cuadrado(3);
console.log( cuadrado.getArea() );

console.log(cuadrado instanceof Cuadrado); // true
console.log(cuadrado instanceof Rectangulo); // true