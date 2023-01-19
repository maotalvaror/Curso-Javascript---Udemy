function onLoad() {
  var URL = new window.URL(location.href);
  var parametrosURL = URL.searchParams;

  var showId = parametrosURL.get("showId");
  var URL = "https://api.tvmaze.com/shows/" + showId;
  // llamar https://api.tvmaze.com/shows/139  

  getDatos(URL, pintarCard)
}

function pintarCard(datos) {
  var card, cardBody, img, h5, p, span;

  card = document.createElement('div');
  card.classList.add('card');
  card.style.width = "18rem";
  
  img = document.createElement('img');
  img.src = datos.image.medium;
  img.classList.add('card-img-top');
  img.alt = "IMG";
  img.style.height = '180px';
  img.style.width = '100%';
  card.appendChild(img);
  
  cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  
  h5 = document.createElement('h5');
  h5.classList.add('card-title');
  h5.innerText = datos.name;
  cardBody.appendChild(h5);
  
  p = document.createElement('p');
  p.classList.add('card-text');
  p.innerHTML = datos.summary;
  cardBody.appendChild(p);
  
  var arr_span = datos.genres;
  
  for(let i = 0; i < arr_span.length; i++){
    span = document.createElement('span');
    span.innerText = arr_span[i];
    span.classList.add('badge');

    switch(i) {
      case 0:
        span.classList.add("bg-primary");
        break;
      case 1:
        span.classList.add("bg-secondary");
        break;
      case 2:
        span.classList.add("bg-success");
        break;
      case 3:
        span.classList.add("bg-danger");
        break;
      case 4:
        span.classList.add("bg-warning", "text-dark");
        break;
      case 5:
        span.classList.add("bg-info", "text-dark");
        break;
      case 6:
        span.classList.add("bg-light", "text-dark");
        break;
      case 7:
        span.classList.add("bg-dark");
        break;
      default:
        span.classList.add("bg-primary");
        break;
    }
   cardBody.appendChild(span);
  }
  card.appendChild(cardBody);
  document.body.appendChild(card);
}

window.onload = onLoad;