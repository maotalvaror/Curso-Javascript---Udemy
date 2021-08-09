const horas = parseInt(prompt('Digite las horas'));
const minutos = parseInt(prompt('Digite los minutos'));
const segundos = parseInt(prompt('Digite los segundos'));

const _segundos = segundos + 1 ;

if (minutos > 59) {
  const minutos = 0;
}
if(horas > 24){
  const horas = 0;
}
if(_segundos > 59) {
_segundos = 0;
minutos = minutos + 1;
}else if(minutos > 59){
minutos = 0;
horas = horas + 1;
}if(horas > 23){
horas = 0;
}
console.log('La hora despues de un segundo es:',horas,':',minutos,':',_segundos)