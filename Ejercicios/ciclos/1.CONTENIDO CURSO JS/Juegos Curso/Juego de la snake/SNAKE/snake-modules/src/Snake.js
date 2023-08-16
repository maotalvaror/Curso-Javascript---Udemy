import Square from "./Square";

export default class{
  constructor(){
    this.head = new Square(0, 0);
    this.body = [];
  }

  addElement(element){
    this.body.push(element);
  }

  move(dx, dy){
    // el cuerpo de la serpiente siga a la cabeza de la 
    for(let i = this.snake.body.length - 1; i >= 1; i--){
      this.snake.body[i].x = this.snake.body[i-1].x; // (elemento 3 <- elemento 2) O (elemento 2 <- elemento 1);
      this.snake.body[i].y = this.snake.body[i-1].y;
    }
    if(this.snake.body.length >= 1) {
    this.snake.body[0].x = this.snake.head.x;
    this.snake.body[0].y = this.snake.head.y;
    }
    //Hacer que la snake avance
    this.head.move(dx, dy);
  }

  getLastElement(){
    if(this.snake.body.length >= 1){
      return this.body[this.body.length-1];
    } else {
      return this.head;
    }
  }

  hasCollided(){
    for(let i = 0; i < this.body.length; i++){
      if(this.body[i].checkCollision(this.head)){
        return true;
      }
    }
  }

  hasBrokenTheLimits(x1, x2, y1, y2){
    const topCollision = (this.head.y < y1);
    const bottomCollision = (this.head.y > y2);
    const leftCollision = (this.head.x < x1);
    const rightCollision = (this.head.x > x2);
    if(topCollision || bottomCollision || leftCollision || rightCollision){
      return true;
    }
  }

  checkFullCollision(position){
    for(let i = 0; i < this.body.length; i++){
      if(this.body[i].checkCollision(position)){
        return true;
      }
    }

    if(this.head.checkCollision(position)){
      return true;
    }
  }

  reset() {
    this.head.x = 0;
    this.head.y = 0;
    this.body.length = 0;
  }
}