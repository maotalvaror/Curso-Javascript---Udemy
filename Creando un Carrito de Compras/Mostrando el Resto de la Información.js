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

//elimina cursos del carrito cuando se presionan en agregar pero ya no se necesitan
//haciendo referencia al carrito
carritoHtml.addEventListener('click', eliminarCurso);

//vaciar el carrito
vaciarCarroBtn.addEventListener('click', () => {
 articulosCarrito = [];//reseteando el arreglo para que quede vacio

 limpiarHtml();//eliminar todo el html
})

}

//funciones'

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
//elimina el curso del carrito
function eliminarCurso(){
  if (e.target.classList.contains('borrar-curso')) {
    //target=permite detectar si una función fue llamada
    console.log(target)
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
//Revisando si un elemento yaexiste en el carrito
const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
if(existe){
//actualizando la cantidad  
}else{
  //agrega elementos ya existentes en el carrito
  articulosCarrito=[...articulosCarrito, infoCurso]
}

//se tiene que ir iterando a cada uno de los cursos e identificar cual es el duplicado y de hay umentar la cantidad

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
//para que sirve el atributo <td> = se utiliza para establecer el carácter para alinear las celdas de una columna . Los valores típicos de esto incluyen un punto (. ) al intentar alinear los números o valores
<td>
//añadiendo a ese objeto la img
<img src="${curso.imagen}" width="100">
</td>

//toda la informacion actual de este objeto
<td>${curso.titulo}</td>
<td>${curso.precio}</td>
<td>${curso.cantidad}</td>
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