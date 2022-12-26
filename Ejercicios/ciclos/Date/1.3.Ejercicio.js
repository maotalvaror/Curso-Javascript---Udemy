var fecha = prompt('Digite la primera fecha');
var dividir = fecha.split('/');
var [dia, mes, anio] = dividir;
console.log(dia, mes, anio);

var fecha2 = prompt('Digite la segunda fecha');
var dividir2 = fecha2.split('/');
var [dia2, mes2, anio2] = dividir2;
console.log(dia2, mes2, anio2);

var nuevaFecha1 = new Date(`${mes}, ${dia}, ${anio}`);
console.log(nuevaFecha1);

var nuevaFecha2 = new Date(`${mes2}, ${dia2}, ${anio2}`);
console.log(nuevaFecha2);

var diasTranscurridos = parseInt((nuevaFecha2 - nuevaFecha1) / (1000 * 60 * 60 * 24), 10);
console.log(diasTranscurridos + " dias");