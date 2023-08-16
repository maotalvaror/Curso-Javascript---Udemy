export default class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Desplazarse
  move(dx, dy){
    this.x += dx;
    this.y += dy;
  }

  //Detectar una collision
  checkCollision(obj){
    return this.x == obj.x && this.y == obj.y;
  }
}