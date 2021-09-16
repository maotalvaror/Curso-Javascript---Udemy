console.log('porcentaje de numero digitados de hombres y mujeres')
var estudiantes = parseInt(prompt('Digite el numero de estudiantes'));
var numeroMujeres = parseInt(prompt('Digite el numero de Mujeres'));
var numeroHombres = parseInt(prompt('Digite el numero de Hombres'));
var TotalEstudiantes = 0;
TotalEstudiantes = (numeroMujeres + numeroHombres);
var PorcentajeMujeres = parseInt((numeroMujeres * 100) / TotalEstudiantes);
var PorcentajeHombres = parseInt((numeroHombres * 100) / TotalEstudiantes);

console.log('El porcentaje de Mujeres es de:',PorcentajeMujeres,'% y el porcentaje de Hombres es de:',PorcentajeHombres,'%');