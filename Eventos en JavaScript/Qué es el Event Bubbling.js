//Event bubbling
//se refiere a si el evento viaja desde el elemento donde se originó 
//hasta los elementos padres en orden de anidamiento.

const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const titleDiv = document.querySelector('.titulo')

cardDiv.addEventListener('click', () => {
  console.log('Click en card')
})

infoDiv.addEventListener('click', () => {
  console.log('Click en info')
})

titleDiv.addEventListener('click', () => {
  console.log('Click en titulo')
})

//en este ejemplo es cuando presionas en un elemento y se dispara en los otros eventos 
//Como en cardDiv se presiono, ahora se dispara en la info y en el titulo ya que esos son los eventos
