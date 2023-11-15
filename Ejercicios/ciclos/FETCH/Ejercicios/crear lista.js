var PAGE_LOAD = true;

function ConfigurarEventoClicDerecho(){
  document.addEventListener("contextmenu", (e) => {

    var elemento = null;
    if (PAGE_LOAD) {
      crearHTML();
      elemento = document.getElementById('div-principal');
    }
    else {
      elemento = document.getElementById('div-principal');
      elemento.style.left = "-100%";
      elemento.style.top = "0px";
    }
    
    
    PAGE_LOAD = false;  
      
    e.preventDefault();

    var width_div = elemento.offsetWidth;
    var height_div = elemento.offsetHeight;

    var coordenada_x = e.clientX;
    var coordenada_y = e.clientY;

    var limite_right = document.documentElement.clientWidth - width_div;
    var limite_bottom = document.documentElement.clientHeight - height_div;

    if((coordenada_x > limite_right))
      coordenada_x -= width_div;

    if((coordenada_y > limite_bottom))
      coordenada_y -= height_div;

    elemento.classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeOut');
    
    elemento.style.left = coordenada_x + "px";
    elemento.style.top = coordenada_y + "px";

    setTimeout(() => {
      elemento.classList.remove('d-none');
      elemento.classList.add('animate__animated','animate__fadeIn');
     
    }, 300);
  })
}

function OcultarElementoPrincipal(e){
  var elemento = document.getElementById('div-principal');
  elemento.classList.remove('animate__animated','animate__fadeIn');
  elemento.classList.add('animate__animated','animate__fadeOut');
  elemento.style.left = "-100%";
  elemento.style.top = "0px";
}

function ejecutarEvento(){
  document
    .querySelectorAll('#div-principal li')
    .forEach( el => {
      el.onclick = OcultarElementoPrincipal;
    })
}

function crearHTML(){
  var div, ul, li, i;
  div = document.createElement('div');
  div.id = "div-principal";
  div.style.position = 'absolute';

  // Pruebas
  div.style.top = "px";
  div.style.left = "-100%";
  div.classList.add("shadow", "p-3", "bg-body", "rounded");

  ul = document.createElement('ul');
  ul.classList.add("list-group", "d-inline-block");

  var arr = [
    {texto: "Instagram", icono: "instagram"},
    {texto: "Facebook", icono: "facebook"},
    {texto: "Whatsapp", icono: "whatsapp"}
  ];

  for(let indice = 0; indice < arr.length; indice++){
    var class_i = "fa-" + arr[indice].icono;

    li = document.createElement('li');
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    li.innerText = arr[indice].texto;

    i = document.createElement('i');
    i.classList.add("fa-brands", class_i, "ms-3", "fs-3");

    li.appendChild(i);
    ul.appendChild(li);
  }
  div.appendChild(ul);
  document.body.appendChild(div);

  div.classList.add('animate__animated','animate__fadeIn');
}

ConfigurarEventoClicDerecho();
ejecutarEvento();