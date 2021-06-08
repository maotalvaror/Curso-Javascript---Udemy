const nav = document.querySelector('.navegacion')

//Mouse enter

nav.addEventListener('mouseenter', () => {
  console.log('Entrando en la navegacion')
nav.style.backgroundColor = 'transparent'
})

//Mouse Out

nav.addEventListener('mouseout', () => {
  console.log('Abandonando la navegacion')
  nav.style.backgroundColor = 'white'
})