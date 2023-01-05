var POSTS = []

async function init() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
      POSTS = json
      tabla(POSTS);
    });


    // var res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // var data = await res.json()
}

function tabla(datos) {
  var table, tr, th, td;
  table = document.createElement('table');

  var encabezados = ["Title", "Body", "UserId"];
  var longitud_enc = encabezados.length;

  tr = document.createElement('tr');

  for (let i = 0; i < longitud_enc; i++) {
    th = document.createElement('th');
    th.style.textAlign = 'center';
    th.style.border = '1px solid #dddddd';
    th.style.padding = '12px';
    th.innerText = encabezados[i];
    tr.appendChild(th);
  }
  table.appendChild(tr);

  var longitud_datos = datos.length;
  for (let i = 0; i < longitud_datos; i++) {
    var { title, body } = datos[i];
    tr = document.createElement('tr');

    td = document.createElement('td');
    td.innerText = title;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = body;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = datos[i].userId;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  document.body.appendChild(table);
}


init(); 

