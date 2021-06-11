//Variables
const carro = document.querySelector('#carro');
//TBODY = conjunto de filas de la tabla en este caso los cursos
const contenedorCarrito = document.querySelector('#lista-Carrito tbody')
//desde el boton "borrar los cursos que estan en el carro pero no necesitamos"
const vaciarCarro = ('vaciar-carrito');
//Cuando presione los botones se agregan al carro
const listaCursos = document.querySelector('#lista-Cursos');
cargarEventListener();
function cargarEventListener(){
  //Cuando demos click (la funcion declarada) se agregan a ese carro 
listaCursos.addEventListener('click', agregarCursos )
}

//funciones

//e.target = es decir donde le estamos dando click
function agregarCursos(e){
  console.log(e.target)
  
  //esta preguntando que si contiene la pagina (agregar-carrito) mostrara en la consola los elementos 
  //que contiene esa clase de lista
  if(e.target.classList.contains('agregar-carrito')){
    //extraer por ejemplo una imagen debe de tener parentElement
    const cursoSeleccionado = e.target.parentElement.parentElement;
  
    //mandar a llamar una funcion
    leerDatosCurso(cursoSeleccionado);
  }
}


//leer el contenido del html al que le dimos click y extrae la informacion del curso

function leerDatosCurso(curso){
console.log(curso)

//Crear un objeto con el contenido del curso actual;
const infoCurso = {
  imagen: curso.querySelector
}
}