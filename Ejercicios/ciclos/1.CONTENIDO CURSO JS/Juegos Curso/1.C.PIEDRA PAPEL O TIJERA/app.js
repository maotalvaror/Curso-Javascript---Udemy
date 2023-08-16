const ImgPlayerChoice = document.getElementById('PlayerChoice');
const ImgComputerChoice = document.getElementById('ComputerChoice');

const pResult = document.getElementById('result');
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button');
const elecciones = ["Piedra", "Papel", "Tijera"];
const fileNames = {
  'Piedra': 'images/rock.png',
  'Papel': 'images/paper.png',
  'Tijera': 'images/scissors.png'
};

let positiveScore = 0;
let negativeScore = 0;


buttons.forEach(
  button => button.addEventListener('click', startGame)
);

function startGame(event){
  // Determinar la elección del jugador
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;
  //console.log(playerChoice);

  // Determinar la elección de la computadora
  const computerChoice = getComputerChoise();
  //console.log(computerChoice);

  // Determinar quién gana
  const winner = getWinner(playerChoice, computerChoice);
  //console.log(`El ganador es: ${winner}`)

  // Mostrar resultados
  ImgPlayerChoice.setAttribute('src', fileNames[playerChoice]);
  ImgComputerChoice.setAttribute('src', fileNames[computerChoice]);

  let result;

  if (winner === 'Player') { // gana el jugador
    result = 'ganas';
    positiveScore++;
  } else if ( winner === 'Computer'){ // gana la computadora
    result = 'pierdes';
    negativeScore++;
  } else { // empate
    result = 'empatas';
  }

  pResult.innerHTML = `Tú ${result}
                        escogiendo <strong>${playerChoice}</strong>
                        en contra de <strong>${computerChoice}</strong>`;

  pScore.innerHTML = `Haz ganado ${positiveScore} veces. Haz perdido ${negativeScore} veces`;
};


function getComputerChoise(){
  // Obtener un valor aleatorio i (0, 1, 2)
  const i = parseInt(Math.random() * 3);
  // Devolver la elección de la computadora

  return elecciones[i];

}

function getWinner(playerChoice, computerChoice){
  if(playerChoice === computerChoice){
    return null;
  }

  if(playerChoice === 'Piedra'){ // Piedra
    if(computerChoice === 'Papel'){
      return 'Computer';
    } else if (computerChoice ===  'Tijera'){
      return 'Player';
    }
 } else if(playerChoice === 'Papel'){ // Papel
    if(computerChoice === 'Piedra'){
      return 'Player';
    } else {
      return 'Computer';
    }
 } else { // Tijera
    if(computerChoice === 'Papel'){
      return 'Player';
    } else {
      return 'Computer';
    }
  }
}