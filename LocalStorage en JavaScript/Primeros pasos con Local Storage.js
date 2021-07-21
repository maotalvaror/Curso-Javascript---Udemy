//localStorage = Almacena datos sin fecha de vencimiento Los datos no se eliminarán cuando se cierre
//el navegador y estarán disponibles el próximo día, semana o año

//Como agregar elementos al localStorages
//  LLave => 'nombre'     , =>  Valor 'Alejandra'

//LOCALSTRORAGE
//localStorage.setItem('nombre', 'Alejandra');

//SESSIONSTORAGE
//sessionStorage.setItem('nombre', 'Alejandra');

//que pasa si en el localStorage se coloca un numero como el nombre
//lo colocara como un string, local unicamente almacena strings por lo tanto no guarda arreglos
//ni tampoco objetos

//localStorage.setItem('nombre', 1);

//Creando un objeto
localStorage.setItem('nombre', 1)
const producto = {
  nombre : "Monitor 24 pulgadas",
  precio:300
}

//Que el objeto (producto) se podra convertir en un string con JSON
const productoString = JSON.stringify( producto )
console.log(productoString)
//De esta forma se va a guardar en el localstorage un objeto
localStorage.setItem('producto', productoString)


//probando el JSON = convierte un objeto o valor de js en una cadena
//tiene sintaxis de un arreglo pero sigue siendo un string
const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify( meses );
localStorage.setItem('meses', mesesString)
