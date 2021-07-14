//Variables que se iran utilizando al transcurso del proyecto
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const PMinimo = document.querySelector('#PMinimo')
const PMaximo = document.querySelector('#PMaximo')
const puertas = document.querySelector('#puertas')
const color = document.querySelector('#color')

//contenedor para los resultados
const resultado = document.querySelector('#resultado')

const max = new Date().getFullYear(); 
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda = {
  //Creando un objeto para que tenga toda la informacion para tener todo agrupado en una sola variable
  //La marca iniciara en un string vacio para que, cuando el usuario seleccione una marca 
  
  //Diferentes parametros por los cuales se van a buscar
  marca: '',
  year: '',
  PMinimo: '',
  PMaximo: '',
  puertas: '',
  color: '',
}

//Eventos
//addEventListener : Registra un evento a un objeto en específico
//DOMContentLoaded : 
document.addEventListener('DOMContentLoaded', () => {
mostrarAutos(auto);//Muestra los autos al cargar

//Cuando carge el documento se ira a llamar la funcion

//Llena las opciones de año
llenarSelect();
})

//Event Listener para los select de busqueda
//addEventListener = registra un evento a un objeto en específico


//Cuando el usuario seleccione la marca, manda a llamar la funcion filtrarAuto cuando utilizamos "filter"
//nos da la funcionalidad de filtrar, ademas de que manda otra funcion "FiltrarMarca"
//Y despues se ira iterando sobre cada automovil
//si hay un valor en la busqueda dela marca entonces filtra los que tengan esa marca
//Sino se trae todos de regreso

marca.addEventListener('change', e =>{
datosBusqueda.marca = e.target.value;
//Datos busqueda un objeto que tiene llaves {} pero no valores
console.log(datosBusqueda)
})

//Agregando valores para que no aparezca como string vacio

year.addEventListener('change', e =>{
  //parseInt = convierte un argumento de tipo cadena y devuelve un entero de la base especificada
  datosBusqueda.year = parseInt(e.target.value);
  filtrarAuto();
  })
  PMinimo.addEventListener('change', e =>{
    datosBusqueda.PMinimo = e.target.value;
    filtrarAuto();
    })
  PMaximo.addEventListener('change', e =>{
    datosBusqueda.PMaximo = e.target.value;
    filtrarAuto();
    })
  puertas.addEventListener('change', e =>{
    //parseInt para convertirlo en entero
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
    })
  color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
      })
//Funciones
function mostrarAutos(autos){

  //Manda a llamar la funcion, limpia el html y luego itera
limpiarHtml(); //Elimina el html previo
  autos = []
mostrarAutos.forEach( auto => {
const{marca, modelo, year, puertas, precio, color} = auto;
const autoHtml = document.createElement('p')

autoHtml.textContent = `
${auto.marca} ${auto.modelo} - ${puertas} puertas - Precio: {precio} - color: {color}
`;

//inserta en el html
//appendChild = inserta un nuevo nodo dentro de la estructura DOM de un documento

//El appendChild no va a borrar el contenido previo
resultado.appendChild(autoHtml)
})
}
//Limpiar el html
function limpiarHtml(){
while(resultado.firstChild){
  resultado.removeChild(resultado.firstChild)
}
}


//genera los años del select
function llenarSelect(){
  //si se pone al reves min primero y despues max me aumentaria 10 años
//Lo que va a hacer este codigo es ir del 2021 restaria diez años 
for(let i = max; i >= min; i--){
  const opcion = document.createElement('option')
  //la opcion obtendra el valor de i

  //De esta forma tiene generamos codigo HTML
  opcion.value = i;
  opcion.textContent = i;
  year.appendChild(opcion)

  //Este codigo agregara cada opcion del año al select
}

}
//new Date().getFullYear;
//Un número, que representa el año de la fecha especificada

//Funcion que filtrara en base a la busqueda
function filtrarAuto(){

  //es una funcion que recibe un parametro con los elementos especificados 
  const resultado = auto.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(FiltrarPuertas).filter(filtrarColor)
  //filtrara unicamente por marca de momento
  // console.log(resultado)

  //Funcion que imprime el html es mostrar autos
  //Referencia al arreglo principal y lo estamos recorriendo
  //se esta haciendo llamar pero con el resultado
  mostrarAutos(resultado)

}

function filtrarMarca(auto) {
  //Este codigo se va a filtrar una vez que el usuario alla seleccionado algo
  //si el usuario no a seleccionado nada sera retornado el automovil
  const {marca}= datosBusqueda;
if(datosBusqueda.marca){
return auto.marca === datosBusqueda.marca;
 
}
return auto;
}
//Filter es un metodo de arreglo por lo tanto sirve para iterar sobre este arreglo

function filtrarYear(auto){
  const {year}= datosBusqueda;
  console.log(year);


  //El numero que no esta Almacenado quedara como "numeros" 
  //los que si estan almacenados o escogidos quedan como string
  // console.log(typeof year)
  // console.log(typeof auto.year)
  if(year){
//convierte un argumento de tipo cadena y devuelve un entero de la base especificada
    
//revisa el valor y el tipo de dato
//uno era el numero


return auto.year === year;
  }
  return auto;
}


//Filtra el precio minimo
//siempre va a tomar la iteracion del objeto actual como si se trabajara con el filter
function filtrarMinimo(auto){
  const {PMinimo} = datosBusqueda;

  if(PMinimo){
    //comparando el precio
    //en este caso seria que fuera mayor a precio maximo
    return auto.precio >= PMinimo
  }
}

function filtrarMaximo(auto){
  const {PMaximo} = datosBusqueda;

  if(PMaximo){
    //comparando el precio
    //en este caso seria que fuera menor al precio maximo
    return auto.precio <= PMaximo
  }
}

function FiltrarPuertas(auto){
const {puertas}= datosBusqueda;
console.log(puertas);
if(puertas){
return auto.puertas === FiltrarPuertas;
}
return auto;
}

function filtrarColor(auto){
  const {color} = datosBusqueda;
  if(color){
    return auto.color === filtrarColor
  }
}