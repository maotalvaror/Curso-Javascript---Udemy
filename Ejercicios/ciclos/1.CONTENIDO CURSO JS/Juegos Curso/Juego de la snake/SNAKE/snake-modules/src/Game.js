import Square from "./Square";
import Snake from "./Snake";

export default class {
  constructor(idCanvasElement, standardSize=20){
  
  this.myCanvas = document.getElementById(idCanvasElement);
  this.context = myCanvas.getContext('2d');
  
  this.snake = new Snake();
  this.SIZE = standardSize;

  this.food = null;
  this.dx = 0;
  this.dy = 0;
  
  this.lastAxis; // 'Y' , 'X'

  document.addEventListener('keydown', this.moveSnake.bind(this));
  }
  
  update() {
    if(this.snakeHasCollided()){
      this.gameOver();
      return;
    }
    //Salvar su posición previa del ultimo elemento de la serpiente 
    const lastElement = this.snake.getLastElement();
    let prevX = lastElement.x;
    let prevY = lastElement.y;

    //Hacer que la snake avance
    this.snake.move(dx, dy);
  
    // determina en que eje ha ocurrido el ultimo movimiento
    if(this.dx !== 0){
      this.lastAxis = 'X';
    } else if(this.dy !== 0){
      this.lastAxis = 'Y';
    }

    // detectar si la serpiente ha consumido el alimento
    if(this.food && this.snake.head.checkCollision(this.food)){
      this.food = null;
    // aumentar el tamaño de la serpiente
    this.snake.addElement(
      new Square(prevX, prevY)
      );
    }

    // generar el alimento en caso de que no exista
    this.generateFoodIfNeeded();
  }
  snakeHasCollided() {
    // Coordenadas de la cabeza sean igual a las coordenadas de un elem del cuerpo
    if(this.snake.hasCollided())
      return true;

    // Verificar que la serpiente no se salga de los limites permitidos
    if(this.snake.hasBrokenTheLimits(0, 380, 0, 440))
      return true;

    return false;
  }

  gameOver() {
    alert('Haz perdido');
    this.dy = 0, this.dx = 0;
    this.snake.reset();
  }

  generateFoodIfNeeded() {
    if(this.food)
    return;

    do{
      this.food = new Square(this.getRandomX(), this.getRandomY());
    } while (this.snake.checkFoodCollision(this.food));
  }

  getRandomX(){
    // 0, 20, 40 ..., 380
    // 0, 1, 2 ..., 19    x20
    return this.SIZE * (parseInt(Math.random() * 20));
  }
  
  getRandomY(){
    // 0, 20, 40 ..., 440
    // 0, 1, 2 ..., 22
    return this.SIZE * (parseInt(Math.random() * 23))
  }

  draw(){
    // definir un fondo de color verde
    this.context.fillStyle = '#078848e5';
    this.context.fillRect(0, 0, this.myCanvas.width, this.myCanvas.height);
  
    // cabeza
    this.drawObject(this.snake.head, '#000000e5');

    // cuerpo
    this.snake.body.forEach(
      elem => this.drawObject(elem, '#2c2c2ce5')
    );
    
    // alimento
    this.drawObject(this.food, '#ff0015e5');
  }
  
  drawObject(obj, color){
    this.context.fillStyle = color;
    this.context.fillRect(obj.x, obj.y, this.SIZE, this.SIZE);
  }

  moveSnake(event){
    switch (event.key){
      case 'ArrowUp':
      case 'w':
        if(this.lastAxis !== 'Y'){
          this.dx = 0;
          this.dy = -this.SIZE;
          console.log('Mover hacia arriba');
        }
        break;
      case 'ArrowDown':
      case 's':
        if(this.lastAxis !== 'Y'){
          this.dx = 0;
          this.dy = +this.SIZE;
          console.log('Mover hacia abajo');
        }
        break;
      case 'ArrowRight':
      case 'd':
        if(this.lastAxis !== 'X'){
          this.dx = +this.SIZE;
          this.dy = 0;
          console.log('Mover hacia la derecha');
        }
        break;
      case 'ArrowLeft':
      case 'a':
        if(this.lastAxis !== 'X'){
          this.dx = -this.SIZE;
          this.dy = 0;
          console.log('Mover hacia la izquierda');
        }
        break;
    }
  }
}