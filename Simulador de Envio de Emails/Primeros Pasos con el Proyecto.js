//Variables
const btnEnviar = document.querySelector('#btnEnviar')
const formulario = document.querySelector('#reg_form_box')
//variables para campos
const email = document.querySelector('#email')
const password = document.querySelector('#password')

//funcionando en toda la aplicacion un  mas global
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//EventListeners = Registra un evento a un objeto en específico.
eventListeners();

function eventListeners(){//<= disparando una funcion
  //iniciarApp una funcion que va a tener todo lo que se debe de hacer una vez que cargue el documento
  //cuando la app arranca
  document.addEventListener('DOMContentLoaded', iniciarApp)

  //campos del formulario
  email.addEventListener('blur', validarForm)//<= blur= se va a ejecutar cuando se presione el btn o input y se salga

  //Enviar email = simular envio de email
  //addEventListener = nos sirve para registra un evento a un objeto en específico
  formulario.addEventListener('submit',enviarEmail)
}

//funciones
function iniciarApp(){
  //basicamente es una funcion que se encargara para que arranque todo
  btnEnviar.disabled= true; //<= que no pueda precionar el boton de enviar
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50') //<= cuando se coloca sobre el boton aparece un signo de no permitido
}

//validando el formulario
function validarForm(e){
  //Validando si el usuario escribio algo
  if (e.target.value.length > 0){
    //Elimina los errores...
    const error = document.querySelector('p.error');

    if(error){
      error.remove();
    }     //REMOVE = una serie de métodos para eliminar elementos de una colección
    
    e.target.classList.remove('border', 'border-red-500')
    //ADD = Agregandole el borde verde cuando este correcto
    e.target.classList.add('border', 'border-green-500')
  } else { 
    //en caso de que falle la validacion dira que todos los campos son obligatorios

    //si no encontro nada dejara un borde rojo mostrando el error
    e.target.classList.remove('border', 'border-green-500')
    e.target.classList.add('border', 'border-red-500')
    mostrarError('Todos los campos son obligatorios');
  }

  if(e.target.type === 'email'){
    //expresion regular = codigo para validar un email
    //Lo que necesita para que diga email valido es 
    //una palabra "Hola o alejandra" el arroba @ y un dominio valido como por ejemplo "gmail" y ".com"

    //Si entra y sale del input sin ningun mensaje mostrara que todos los campos son obligatorios y el borde rojo
    //Test es decir que utilizara la expresion regular y entre el parentesis el valor el cual se revisara
    if(er.test(e.target.value)){
      //Tratando de eliminar un elemento que ya no existe entonces marca error
      const error = document.querySelector('p.error');
    
      if(error){
        error.remove();
      }
      //REMOVE = una serie de métodos para eliminar elementos de una colección
      e.target.classList.remove('border', 'border-red-500')
      //ADD = Agregandole el borde verde cuando este correcto
      e.target.classList.add('border', 'border-green-500')
    } else {
      const error = document.querySelector('p.error');
      error.remove();
      
      //REMOVE = una serie de métodos para eliminar elementos de una colección
      e.target.classList.remove('border', 'border-green-500')
      //ADD = Agregandole el borde verde cuando este correcto
      e.target.classList.add('border', 'border-red-500')
      mostrarError('email no valido')
    }
  }

}

//e.target.value = hace referencia al campo actual y por eso mostraba error
//email.value    = hace referencia a losvalores que se tenian declarados anteriormente

//Mientras halla la condicion && Se deben cumplir las dos, en cambio con el | si se cumple una para el procedimiento 
  if(er.test(email.value) && password.value !== ''){
    btnEnviar.disabled= false; //<= que no pueda precionar el boton de enviar
    btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50') //<= cuando se coloca sobre el boton aparece un signo de no permitido
  
  }

function mostrarError(mensaje) {
  //creando el parrafo para el mensaje de error
  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  //agregando los mismos bordes para el error, borde color rojo, texto rojo y pading de 3

  
  mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
 
//Porque se utilizo el querySelectorAll? por que solamente quiere revisar un valor
//querySelector = cuando un documento no existe retornaba un null
//mientras que querySelectorAll retorna una serie de elementos y haci se comprueba si hay algun error
  const errores = document.querySelectorAll('.error')  
  if(errores.length === 0){
    formulario.appendChild(mensajeError)
  }
}   

//Envia el email
//"Como es un submit lo mas seguro es que siempre que se tenga un codigo de javaScript que revise un 
//formulario se debe tener (e) y e.preventDefault();"

//preventDefault = se utiliza para detener una acción por omisión, utilizada comunmente sobre 
//etiquetas (a) o botones input:submit
  function enviarEmail(e){
    e.preventDefault();
    //Mostrar el spinner
    //es una animación o gif que es mostrada mientras se ejecutan diversos procesos en background
    const spinner = document.querySelector("#spinner")

  if (spinner)
    spinner.style.display = 'flex';

//El spinner lo tenia anteriormente el profesor del curso* 
//Funcion, cuando el spinner este "cargando" despues de tres segundos simulara el envio de email

//Despues de 3 segundos ocultar el spinner y mostrar el mensaje 
     setTimeout(()=> {

       spinner.style.display = 'none'

       //Mensaje 
       parrafo.textContent = 'El mensaje se envio correctamente'
       
       parrafo.classList.add('text-center', 'ny-10', 'p-5', 'bg-green-500', 'text-white', 'font-bold', 'uppercase')


       //insertBefore= Para insertar un nuevo hijo en el antes del elemento especificado 
       //Inserta el parrafo antes del spinner
      formulario.insertBefore(parrafo, spinner)

     },/*Cada mil es un segundo*/  3000 )
   }
  
    // setInterval(()=> {
    //   console.log('Esta funcion se ejecuta cada de 3 segundos') 
    // },/*Cada mil es un segundo*/ 3000 );
