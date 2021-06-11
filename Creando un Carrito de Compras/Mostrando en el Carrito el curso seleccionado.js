//Variables
const carro = document.querySelector('#carro');
//TBODY = conjunto de filas de la tabla en este caso los cursos
const contenedorCarrito = document.querySelector('#lista-Carrito tbody')
//desde el boton "borrar los cursos que estan en el carro pero no necesitamos"
const vaciarCarro = ('vaciar-carrito');
//Cuando presione los botones se agregan al carro
const listaCursos = document.querySelector('#lista-Cursos');


//Ya que es un arreglo vacio, cuando se le de click a los botones de los cursos (listaCursos)
//se iran agregando al carrito

let articulosCarrito = [];




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
  imagen: curso.querySelector('img').src,
  titulo: curso.querySelector('h4').textContent,
  precio: curso.querySelector('precio').textContent,
  id: curso.querySelector('a').getAttribute('data-id'),
  cantidad: 1
}
//agrega elementos al arreglo de carrito
articulosCarrito= [...articulosCarrito, infoCurso];

console.log(articulosCarrito)
carritoHtml();
}
//muestra el carrito de compras en el html
function carritoHtml(){
//Limpiar el Hmtl


//recorre el carrito y genera el html


  //se ira iterando cada curso que compre
  articulosCarrito.forEach((curso) =>{
const row= document.createElement('tr')
//template string
row.innerHTML = `
<td>
${curso.titulo}
</td>
`;
//agrega el html del carrito en el tbody
//tbody:contiene a un bloque de filas
contenedorCarrito.appendChild(row)
//appendChild:inserta un nuevo nodo dentro de la estructura DOM de un documento
  })
}

//elimina los cursos del tbody
function limpiarHtml(){
  //de esta forma el html se limpia
  contenedorCarrito.innerHTML='';
}