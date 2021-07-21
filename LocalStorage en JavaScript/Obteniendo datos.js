//Obteniendo el nombre
const nombre = localStorage.getItem('nombre')
console.log(nombre)
//Si trata de obtener algo que no existe dira null
const nombre = localStorage.getItem('nombre2')
console.log(nombre)


const productoJSON = localStorage.getItem('producto')
console.log(productoJSON)

//Como convertir un string en un objeto
const productoJSON = localStorage.getItem('producto')
console.log(JSON.parse(productoJSON));
