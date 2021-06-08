//Para crear un nuevo enlace de nav se necesita de document.createElement
const enlace = document.createElement('a')
//para crear una imagen es img
//para crear un parrafo es p

//agregandole el texto
enlace.textContent= 'Nuevo enlace'
//añadiendo href
enlace.href ='/nuevo-enlace'

console.log(enlace)



const Input = document.createElement('input')
Input.type = 'text' 
Input.name = "idnombre"
Input.id = 'idnombre'
Input.value= 'María'


body = document.getElementsByTagName("body")[0]

body.appendChild(Input)