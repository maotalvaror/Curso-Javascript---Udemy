// Devuelve los milisegundos retornando un valor de 0 y 999
var fecha = new Date('December 21, 2022 09:59:58');
fecha.setMilliseconds(999);
var milisegundos = fecha.getMilliseconds();
console.log(milisegundos); // 999