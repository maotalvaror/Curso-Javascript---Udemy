//En javaScript todo esta conectado con el document
//pero en la forma que se iran recorriendo los elementos se le conoce como Traversing The Dom

const navegacion = document.querySelector('.nav')
console.log(navegacion)

//Los espacios en blanco son considerados elementos 
//(Salto de linea son elementos)
console.log(navegacion.childNodes)

//Traera elementos que sean reales de HTML
console.log(navegacion.children)