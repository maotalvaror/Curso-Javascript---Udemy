function handleClick(){
  var valorInput = document.querySelector('#txtBuscar').value;
  var URL = 'https://api.tvmaze.com/search/shows?q='+ valorInput;

  getDatos(URL, tarjeta)
}

function formulario(){
  var divrow, divcol, form_div, input, button;

  divrow = document.createElement('div');
  divrow.classList.add('row');

  divcol = document.createElement('div');
  divcol.classList.add('col-7');

  form_div = document.createElement('div');
  form_div.classList.add('input-group', 'mb-3');

  input = document.createElement('input');
  input.classList.add('form-control');
  input.id = "txtBuscar";
  input.type = "text";
  input.placeholder = "Buscar Shows";


  button = document.createElement('button');
  button.type = "button";
  button.id = "button_form";
  button.classList.add('btn', 'btn-outline-primary');
  button.innerText = "Buscar";
  button.onclick = handleClick;

  form_div.appendChild(input);
  form_div.appendChild(button);

  divcol.appendChild(form_div);
  divrow.appendChild(divcol);
  
  document.body.appendChild(divrow);
}

function navigarAEspectaculo (showId) {
  var URL = `show.html?showId=${showId}`;
  window.open(URL, "_blank");
}

formulario()


function tarjeta(datos){
  var contenedortarjetas = document.querySelector("#contenedor");

  if (contenedortarjetas)
    contenedortarjetas.innerHTML = "";
  else {
    contenedortarjetas = document.createElement('div');
    contenedortarjetas.id = "contenedor";
    document.body.appendChild(contenedortarjetas);
  }

  for (let i = 0; i < datos.length; i++)  {
    var card, cardBody, img, h5, p, a;

    card = document.createElement('div');
    card.classList.add('card');
    card.style.width = "18rem";

    img = document.createElement('img');
    img.src = datos[i].show.image.medium;
    img.class = "card-img-top";
    img.style.height = "180px";
    img.style.width = "100%";
    img.alt = "ImgGirls";
    card.appendChild(img);

    cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerText = datos[i].show.name;
    cardBody.appendChild(h5);

    p = document.createElement('p');
    p.classList.add('card-text');
    p.innerHTML = datos[i].show.summary;
    cardBody.appendChild(p);

    a = document.createElement('a');
    a.href = "#";
    a.classList.add('btn', 'btn-primary');
    a.innerText = "Go somewhere";
    a.onclick = function() {
      navigarAEspectaculo(datos[i].show.id);
    };
    cardBody.appendChild(a);

    card.appendChild(cardBody);

    
    contenedortarjetas.appendChild(card);
  }
}