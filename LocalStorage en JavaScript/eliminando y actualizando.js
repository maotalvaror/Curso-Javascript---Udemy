//utilizado para eliminar
localStorage.removeItem('nombre')

//Actualizar un registro

const mesesArray = JSON.parse(localStorage.getItem('meses'))
console.log(mesesArray)
//Agregando otro mes al array de meses 
mesesArray.push('Abril')
console.log(mesesArray)
//este codigo va a reescribir el codigo actual
localStorage.getItem('meses',JSON.stringify(mesesArray))

//limpiara todo el local
localStorage.clear();
