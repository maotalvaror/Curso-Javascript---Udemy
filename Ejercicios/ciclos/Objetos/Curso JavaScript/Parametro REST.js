/*
Este parametro es indicado con tres puntos (...);
El parametro se convierte en un arreglo que contiene
el resto de parametros pasados a la función
*/
function agregar_alumnos(arr_alumnos, ...alumnos) {
  console.log(arguments);
  
  for (let i = 0; i < alumnos.length; i++) {
    arr_alumnos.push(alumnos[i]);
  }
  return arr_alumnos;

}

let alumnos_arr = ["Elizabeth"];
let alumnos_arr2 = agregar_alumnos(alumnos_arr, "Maria", "Betsy", 'Diego')