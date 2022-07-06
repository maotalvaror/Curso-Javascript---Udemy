function th_datos(){
  
  // td = document.createElement('td');
  // td.innerText = id;
  // tr.appendChild(td);

  // td = document.createElement('td');
  // td.innerText = name;
  // tr.appendChild(td);

  // td = document.createElement('td');
  // td.innerText = street;
  // tr.appendChild(td);
  
  // td = document.createElement('td');
  // td.innerText = city;
  // tr.appendChild(td);

}

function fn_tabla(datos_usuario){
  var table, tr, th, td;

  table = document.createElement('table');

  const encabezados = ["Id", "Name", "Street", "City"];
  const longitud = encabezados.length;

  tr = document.createElement('tr');

  for(let i = 0; i < longitud; i++){
    th = document.createElement('th');
    th.style.border = '1px solid #dddddd';
    th.style.textAlign = 'left';
    th.style.padding = '8px';
    th.innerText = encabezados[i];
    tr.appendChild(th);
  }
  table.appendChild(tr);

  const longitud_d = datos_usuario.length;

  for(let i = 0; i < longitud_d; i++){
    let { id, name, address } = datos_usuario[i];
    let { street, city } = address;

    tr = document.createElement('tr');

    var o = Object.assign({}, { id, name, street, city })

    tr = document.createElement('tr');
    for (const nombre_propiedad in o) {
      crearTdyAgregarAtabla(table, tr, o[nombre_propiedad]);
    }
    // crearTdyAgregarAtabla(table, tr, id);
    // crearTdyAgregarAtabla(table, tr, name);
    // crearTdyAgregarAtabla(table, tr, street);
    // crearTdyAgregarAtabla(table, tr, city);

  }

  document.body.appendChild(table);
}

function crearTdyAgregarAtabla(table, tr, texto) {
  td = document.createElement('td');
  td.innerText = texto;
  tr.appendChild(td);
  table.appendChild(tr);
}

async function fn() {
  var res = await fetch('https://jsonplaceholder.typicode.com/users');
  var datos = await res.json();
  fn_tabla(datos);
}

fn();