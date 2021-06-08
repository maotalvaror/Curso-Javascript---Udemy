const text = document.querySelector('.text')
text.addEventListener('keydown', () =>{
  console.log('Presionando una tecla')
})

const text = document.querySelector('.text')
text.addEventListener('keyup', () =>{
  console.log('Presionando y soltando una tecla')
})

const text = document.querySelector('.text')
text.addEventListener('keypress', () =>{
  console.log('Tecla pulsada')
})

const text = document.querySelector('.text')
text.addEventListener('blur', () =>{
  console.log('Validacion de formularios')
})

const text = document.querySelector('.text')
text.addEventListener('keycode', () =>{
  console.log('Codigo interno')
})

const text = document.querySelector('.text')
text.addEventListener('onkeydown', () =>{
  console.log('presionando y no soltando la tecla')
})

const text = document.querySelector('.text')
text.addEventListener('onkeyup', () =>{
  console.log('Soltar una tecla pulsada')
})

const text = document.querySelector('.text')
text.addEventListener('onkeypress', () =>{
  console.log('Propian impulsacion de tecla')
})