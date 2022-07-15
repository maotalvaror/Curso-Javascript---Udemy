class Rectangulo{
  constructor(alto, largo){
    this.alto = alto;
    this.largo = largo;
  }
  getArea(){
    return this.alto * this.largo;
  }
}

let rectangulo = new Rectangulo(3, 2);
console.log(rectangulo.getArea()) // 6

class Cuadrado{
  constructor(altura, base){
    this.altura = altura;
    this.base = base;
  }
  getArea(){
    return this.altura * this.base;
  }
}

let cuadrado = new Cuadrado(4, 4);
console.log(cuadrado.getArea()) // 16

//La herencia = transferir metodos y propiedades a un hijo

class Cuadrado_ extends Rectangulo{
  constructor(alto){
    super(alto, alto);
  }
}

let cuadrado_ = new Cuadrado_(3);
console.log(cuadrado_.getArea()); // 9

console.log(cuadrado_ instanceof Cuadrado_); // true
console.log(cuadrado_ instanceof Rectangulo); // true