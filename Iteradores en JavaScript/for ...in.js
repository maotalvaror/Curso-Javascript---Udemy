//Itera sobre objetos
// const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Java']
// for(let pendiente in pendientes){
//   console.log(pendiente);
// }

const automovil = {
  modelo: 'D',
  año:1996,
  motor:'6.0'
}
for(let propiedad in automovil){
  console.log(`${automovil[propiedad]}`)
}


//Forma de iterar sobre los valores de un objeto
for(let[llave,valor] of Object.entries(automovil) ){
  console.log(valor);
  console.log(llave);
}