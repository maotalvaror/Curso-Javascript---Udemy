class Rectangulo {
  constructor(ancho, alto){
    this.ancho = ancho;
    this.alto = alto;
  }
  get area() {
    return this.ancho * this.alto;;
  }
  set dimensiones(obj) {
    this.ancho = obj.x;
    this.alto = obj.y;
  }
}

const r1 = new Rectangulo(5, 10);
r1.dimensiones = {
  x: 2,
  y: 3
}
console.log(`El area del rectangulo r1 es ${r1.area}`);