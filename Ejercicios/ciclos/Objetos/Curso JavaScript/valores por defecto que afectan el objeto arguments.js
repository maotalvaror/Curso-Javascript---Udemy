function sumar(a, b) {
  console.log(arguments); 
}

sumar( 1, 2, "String", ['arr', 'arr 2'], {nombre: 'Dana', apellido: 'Ortega'});
// Devuelve un arreglo segun en lo que se le envie en la fn();

function restar(c = 1, d = 3) {
  console.log(arguments);
}

sumar(); 
//no tiene ningun valor en arguments