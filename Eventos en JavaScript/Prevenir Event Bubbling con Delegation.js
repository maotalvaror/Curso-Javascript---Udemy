//addEventListener() nos sirve para registra un evento a un objeto en específico.
//Crear un addEventListener para comparar a que evento se le dio click


//de esta forma se identifica a que le estamos dando click
// const cardDiv = document.addEventListener('click', e => {
//   console.log(e.target)
// })

//codigo que reaccione diferente al info o al precio (eventos que construyen el elemento cardDiv) 
//cuales son las clases a las que se le estan dando click
// const cardDiv = document.addEventListener('click', e => {
//   console.log(e.target.classList)
// })

//Este codigo se conoce como delegation que solamente tenemos un selector principal y de hay utiliza el 
//punto target y el punto class list y se le agrego funciones (o codigo a ese elemento)
const cardDiv = document.querySelector('.card');


var funcionEvento = e => {
  if(e.target.classList.contains('card-header')){
    console.log('hizo click en el elemento card-header')
  }

  else if(e.target.classList.contains('card-header-title')){
    console.log('hizo click en el elemento card-header-title')
  }
  else if(e.target.classList.contains('card-content')){
    console.log('hizo click en el elemento card-content')
  }
  else if(e.target.classList.contains('card-footer')){
    console.log('hizo click en el elemento card-footer')
  }
  else {
    console.log("No contiene ninguna clase solicitada")
  }
}

cardDiv.addEventListener('click', funcionEvento)


