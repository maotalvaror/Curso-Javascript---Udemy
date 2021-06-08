document.addEventListener('DOMContentLoaded', function (e) {

  console.log("Load: ", e);

  const formulario = document.querySelector('#search')
  
  formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("Submit: ",e)
  })
})


