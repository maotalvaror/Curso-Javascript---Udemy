//Se convierte un if en una funcion
const autenticado = true;

if(autenticado){
  console.log('El usuario esta autenticado')
}

const puntaje = 450;

function revisarPuntaje(){
if(puntaje > 400){
  console.log('Excelente puntaje!')
  return;
   }

if(puntaje > 300){
  console.log('buen puntaje Felicidades')
  return;
   }
}

revisarPuntaje();