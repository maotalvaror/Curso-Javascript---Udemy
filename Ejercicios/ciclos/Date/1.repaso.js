// getDate
var fecha = new Date('December 22, 22 9:54:23');
var obtener_dia_num = fecha.getDate();
console.log('El dia es: ',obtener_dia_num); // 22

// getDay
var obtener_dia_sem = fecha.getDay();
console.log('El dia entre semana es: ',obtener_dia_sem); // 4 == Jueves

// getFullYear
var obtener_anio = fecha.getFullYear();
console.log('El año es: ', obtener_anio); // 2022

// getHours
var obtener_hora = fecha.getHours();
console.log('La hora es: ',obtener_hora); // 9

// getMilliseconds
fecha.setMilliseconds(655);
var obtener_milisegundos = fecha.getMilliseconds();
console.log('Los milisegundos son: ',obtener_milisegundos);

// getMinutes
var obtener_minutos = fecha.getMinutes();
console.log('Los minutos son: ',obtener_minutos);

// getMonth
var obtener_mes = fecha.getMonth();
// Enero queda en 0...etc y Diciembre seria 11
console.log('El mes es: ',obtener_mes); 

// getSeconds
var obtener_segundos = fecha.getSeconds();
console.log('Los segundos son: ',obtener_segundos); // 23

// getTime
var obtener_tiempoTranscurrido = fecha.getTime();
console.log('El tiempo transcurrido es: ',obtener_tiempoTranscurrido); // 1671720863655

// now : Obtiene y devuelve los milisegundos transcurridos desde el 1 de enero de 1970 hasta la fecha actual
var obtener_milisegTransc_ = Date.now();
console.log('Los milisegundos desde el 1 de enero de 1970 son: ',obtener_milisegTransc_);

// parse : Obtiene y devuelve los milisegundos desde el 1 de enero de 1970 hasta el dia en que se le ingresa
var obtener_milisegYCadenaStr = Date.parse('December 26, 2022');
console.log('Los miliseg hasta hoy son: ',obtener_milisegYCadenaStr); // 1672030800000
