import Game from "./Game.js"

console.log('Iniciando juego...');

//setInterval(main, 150);

 const game = new Game('myCanvas');

// function main(){
//   game.update(); // actualizar las variables del juego
//   game.draw(); // dibujar todos los objetos del juego
// }

// function update(){

//   const collisionDetected = checkSnakeCollision();
//   if(collisionDetected){
//     gameOver();
//     return;
//   }
//   //Salvar su posición previa del ultimo elemento de la serpiente 
//   let prevX, prevY;
//   const lastElement = snake.getLastElement();
//   prevX = lastElement.x;
//   prevY = lastElement.y;

//   //Hacer que la snake avance
//   snake.move(dx, dy);
  
//   // actualizar las coordenadas de la cabeza  la serpiente
//   snake.head.move(dx, dy);
//   // determina en que eje ha ocurrido el ultimo movimiento
//   if(dx !== 0){
//     lastAxis = 'X';
//   } else if(dy !== 0){
//     lastAxis = 'Y';
//   }

//   // detectar si la serpiente ha consumido el alimento
//   if(food && snake.head.checkCollision(food)){
//     food = null;
//   // aumentar el tamaño de la serpiente
//   snake.addElement(
//     new Square(prevX, prevY)
//     );
//   }


//   // generar el alimento en caso de que no exista
//   if(!food){
//     food = generateFood();
//   }
// }