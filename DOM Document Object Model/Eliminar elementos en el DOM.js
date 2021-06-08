//Se esta seleccionando un elemento y se tiene acceso a una funcion
//Se le pasa remove para eliminar el elemento
// const primerE = document.querySelector('a')
// primerE.remove();



//eliminar elementos desde el padre
const nav1 = document.querySelector('.nav')

console.log(nav1.children)

nav1.removeChild(nav1.children[1])