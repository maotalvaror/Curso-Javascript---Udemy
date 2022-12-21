function ObtenerDia(fecha) {
  var Dia = fecha.getDay();
  var diaIngresado = '';

  switch (Dia) {
    case 0:
      diaIngresado = 'Domingo';
      break;
    case 1:
      diaIngresado = 'Lunes';
      break;

    case 2:
      diaIngresado = 'Martes';
      break;
    
    case 3:
      diaIngresado = 'Miercoles';
      break;
    
    case 4:
      diaIngresado = 'Jueves';
      break;

    case 5:
      diaIngresado = 'Viernes';
      break;

    case 6:
      diaIngresado = 'Sabado';
      break;

    default:
      break;
  }
  console.log(diaIngresado);
}
