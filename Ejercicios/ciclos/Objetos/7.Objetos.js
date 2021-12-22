function llamarFuncion() {  

  var nombre = prompt('Ingrese su nombre');
  var apellido = prompt('Ingrese su apellido');
  var edad = prompt('Ingrese su edad');
  var sexo = prompt('Sexo: ¿Femenino o Masculino?');
  var hijos = prompt('Cuantos hijos tiene');
  
  var DatosPersona = {
    nombre: nombre,
    apellido: apellido,
    edad,
    sexo,
    hijos
  }
  console.log(`su nombre es: ${DatosPersona.nombre} ${DatosPersona.apellido}, su edad: ${DatosPersona.edad} años, su sexo: ${DatosPersona.sexo}, cantidad de hijos: ${DatosPersona.hijos}`)
}

function llamarfn() {
  
var objeto = {}
var name = prompt('Digite su nombre');
var prop = prompt('Nombre propiedad');;

objeto[prop] = name;
console.log(objeto);
}



//se crea un nuevo objeto le asignan nuevas propiedades

var nuevoObjeto = new Object();
  nuevoObjeto.nombreUsuario = 'Maria';
  nuevoObjeto.edad = 14;

console.log(nuevoObjeto);

//se crea un nuevo objeto2 le asignan propiedades
function fn2() {
  
var objeto = {}

var nuevoObjeto2 = {
  nombre: 'Maria',
  edad: 14
}
objeto[nuevoObjeto2] = nuevoObjeto2;
}