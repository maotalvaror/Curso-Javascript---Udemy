/*
[
  {
    "name":       "Tiger Nixon",
    "position":   "System Architect",
    "salary":     "$3,120",
    "office":     "Edinburgh",
  },
  {
    "name":       "Garrett Winters",
    "position":   "Director",
    "salary":     "$5,300",
    "office":     "Edinburgh",
  }
]
*/
function crear_td(valor_td){
  td = document.createElement('td');
  td.style.padding = "8px 10px";
  td.style.backgroundColor = " #f9f9f9"
  td.innerText = valor_td;
  return td;
}


function tabla_datos() {
  var table;
  var tr, th, td;
  var arr_datos, arr_objetos;

  table = document.createElement('table');
  tr = document.createElement('tr');

  arr_datos = ['Name', 'Position', 'Salary', 'Office'];
  arr_objetos = [{name: 'Tiger Nixon', position: 'System Architect', salary: '$3,120', office: 'Edinburgh'}, {name: 'Garrett Winters', position: 'Director', salary: '$5,300', office: 'Edinburgh'}]


  for (let i = 0; i < arr_datos.length; i++){
    th = document.createElement('th');
    th.style.textAlign = "left";
    th.style.borderBottom ="1px solid #111";
    th.style.padding = "10px 18px";
    th.style.borderCollapse = "collapse";
    th.innerText = arr_datos[i];
    tr.appendChild(th);
  }
  table.appendChild(tr);

  for (let j = 0; j < arr_objetos.length; j++){
    tr = document.createElement('tr');

    td = crear_td(arr_objetos[j].name)
    tr.appendChild(td)

    td = crear_td(arr_objetos[j].position)
    tr.appendChild(td)

    td = crear_td(arr_objetos[j].salary)
    tr.appendChild(td)

    td = crear_td(arr_objetos[j].office)
    tr.appendChild(td)

    table.appendChild(tr);
  }
  document.body.appendChild(table);
}
tabla_datos();
