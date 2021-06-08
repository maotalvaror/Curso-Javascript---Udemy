//representa una lista de elementos que coincidan con los selectores
//sigue siendo parecida a la sintaxis de tipo Css
//  Se utiliza el (. punto para las clases ) 
//  tambien (# para los ID)  
//(tambien seleccionar una etiqueta HTML) 

//Retorna todos los elementos que cumplan la condicion 

const clases = document.querySelectorAll('.class')
const footer = document.querySelectorAll('#footer')

//Si un elemento no existe 
const noExiste = document.querySelectorAll('no-existe')

console.log(noExiste)