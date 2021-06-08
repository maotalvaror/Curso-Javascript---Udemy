//agregar funciones hacia un elemento 
//esta tecnica funciona mas bien cuando el contenido es generado

//Evitando la propagacion con contenido creado
const parrafo1 = document.createElement('P')
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');