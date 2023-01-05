
function datosURL() {
  fetch('https://api.tvmaze.com/search/shows?q=girls')
    .then(res => res.json())
    .then(json => tarjeta(json));
}

function tarjeta(datos) {
  for (let i = 0; i < datos.length; i++) {
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
    cardBody.appendChild(a);

    card.appendChild(cardBody);
    document.body.appendChild(card);
  }
}

datosURL();