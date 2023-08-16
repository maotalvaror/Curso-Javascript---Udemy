const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

const SIZE = 20;

const head = { x: 0, y: 0 };
const body = [];

let food = null;

let dx = 0;
let dy = 0;

let lastAxis; // 'Y' , 'X'

setInterval(main, 150);

function main(){
  update(); // actualizar las variables del juego
  draw(); // dibujar todos los objetos del juego
}

function update(){

  const collisionDetected = checkSnakeCollision();
  if(collisionDetected){
    gameOver();
    return;
  }
  //Salvar su posición previa del ultimo elemento de la serpiente 
  let prevX, prevY;
  if(body.length >= 1){
    prevX = body[body.length-1].x;
    prevY = body[body.length-1].y;
  } else {
    prevX = head.x;
    prevY = head.y;
  }

  // el cuerpo de la serpiente siga a la cabeza de si misma
  for(let i = body.length - 1; i >= 1; i--){
    body[i].x = body[i-1].x; // (elemento 3 <- elemento 2) O (elemento 2 <- elemento 1);
    body[i].y = body[i-1].y;
  }
  if(body.length >= 1) {
  body[0].x = head.x;
  body[0].y = head.y;
  }
  
  // actualizar las coordenadas de la cabeza de la serpiente
  head.x += dx;
  head.y += dy;
  // determina en que eje ha ocurrido el ultimo movimiento
  if(dx !== 0){
    lastAxis = 'X';
  } else if(dy !== 0){
    lastAxis = 'Y';
  }

  // detectar si la serpiente ha consumido el alimento
  if(food && head.x === food.x && head.y === food.y){
    food = null;
  // aumentar el tamaño de la serpiente
  increaseSnakeSize(prevX, prevY);
  }


  // generar el alimento en caso de que no exista
  if(!food){
    food = randomFoodPosition();
  }
}

function checkSnakeCollision(){
  // coordenadas de la cabeza sean igual a las coordenadas de un elem del cuerpo
  for(let i = 0; i < body.length; i++) {
    if(head.x == body[i].x && head.y == body[i].y){
      return true;
    }
  };

  // verificar que la serpiente no se salga de los limites permitidos
  const topCollision = (head.y < 0);        // x: ?, y: 0;
  const bottomCollision = (head.y > 440);   // x: ?, y: 440;
  const leftCollision = (head.x > 380);     // x: , y; ?;
  const rightCollision = (head.x < 0);      // x: 0, y: ?;
  if(topCollision || bottomCollision || leftCollision || rightCollision ){
    return true;
  }
  return false;
}

function gameOver(){
  alert('Haz perdido');
  head.x = 0;
  head.y = 0;
  dx = 0;
  dy = 0;
  body.length = 0;
}

function increaseSnakeSize(prevX, prevY){
  body.push({
    x: prevX, y: prevY
  });
}

function randomFoodPosition(){
  let position;
  do{
  position = {x: getRandomX(), y: getRandomY()};
  } while (checkFoodCollision(position));
  return position;
}

function checkFoodCollision(position){
  // comparar las coordenadas del alimento generado con el cuerpo de la serpiente
  for(let i = 0; i < body.length;  i++){
    if(position.x == body[i].x && position.y == body[i].y){
      return true;
    }
  }
  // comparar las coordenadas del alimento generado con la cabeza de la serpiente
  if(position.x == head.x && position.y == head.y){
    return true;
  }
  return false;
}

function getRandomX(){
  return 20 * (parseInt(Math.random() * 20));
}

function getRandomY(){
  return 20 * (parseInt(Math.random() * 23))
}

function draw(){
  // definir un fondo de color verde
  context.fillStyle = '#078848e5';
  context.fillRect(0, 0, myCanvas.width, myCanvas.height);

  // cabeza
  drawObject(head, '#000000e5');
  // cuerpo
  body.forEach(
    elem => drawObject(elem, '#2c2c2ce5')
  );
  // alimento
  drawObject(food, '#ff0015e5');
}

function drawObject(obj, color){
  context.fillStyle = color;
  context.fillRect(obj.x, obj.y, SIZE, SIZE);
}

document.addEventListener('keydown', moveSnake);

function moveSnake(event){
  switch (event.key){
    case 'ArrowUp':
    case 'w':
      if(lastAxis !== 'Y'){
        dx = 0;
        dy = -SIZE;
        console.log('Mover hacia arriba');
      }
      break;
    case 'ArrowDown':
    case 's':
      if(lastAxis !== 'Y'){
        dx = 0;
        dy = +SIZE;
        console.log('Mover hacia abajo');
      }
      break;
    case 'ArrowRight':
    case 'd':
      if(lastAxis !== 'X'){
        dx = +SIZE;
        dy = 0;
        console.log('Mover hacia la derecha');
      }
      break;
    case 'ArrowLeft':
    case 'a':
      if(lastAxis !== 'X'){
        dx = -SIZE;
        dy = 0;
        console.log('Mover hacia la izquierda');
      }
      break;
  }
}