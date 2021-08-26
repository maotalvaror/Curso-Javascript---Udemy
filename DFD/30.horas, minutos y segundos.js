console.log('Programa que recibe los segundos y convierte a horas, minutos y segundos')
var segundos = parseInt(prompt('Digite los segundos'));

var horas = 0;
var minutos = 0;

/*
Ejemplo:

1 minuto = 60 Segundos
1 Hora   = 3600 segundos

Entrada en segundos: 7282

Horas = Segundos Ingresados / 3600 
      = 7282 / 3600 = 2 => Horas

Segundos Sobrantes  = Segundos ingresados % 3600
                    = 7282 % 3600 = 82 => Segundos
                    
Minutos = Segundos sobrantes / 60 
        = 82 / 60 = 1 => Minutos

segundos = segundos sobrantes % 60 
        82 % 60 = 22 => Segundos
*/



function tiempo(segundos) {
  horas = parseInt(segundos / 3600);
  segundos = segundos % 3600;
  minutos = parseInt(segundos / 60); 
  segundos = segundos % 60;

  console.log('Horas: ',horas,' Minutos: ',minutos,' Segundos: ',segundos);
}

tiempo(segundos);