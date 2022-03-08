function tabla_datos() {
  var table;
  var tr, tr_, tr_2, th, td;
  var arr_datos, arr_datos2, arr_datos3;

  table = document.createElement('table');
  tr = document.createElement('tr');

  arr_datos = ['Name', 'Position', 'Salary', 'Office'];
  arr_datos2 = ['Tiger Nixon', 'System Architect', '$3,120', 'Edinburgh'];
  arr_datos3 = ['Garrett Winters', 'Director', '$5,300', 'Edinburgh'];

  for (let i = 0; i < arr_datos.length; i++){
    th = document.createElement('th');
    th.style.textAlign = "left";
    th.style.borderBottom ="1px solid #111"
    th.style.padding = "10px 18px";
    th.style.borderCollapse = "collapse";
    th.innerText = arr_datos[i];
    tr.appendChild(th);
  }

  tr_ = document.createElement('tr');
  
  for (let j = 0; j < arr_datos2.length; j++) {
    td = document.createElement('td');
    td.style.padding = "8px 10px";
    td.style.backgroundColor = " #f9f9f9"
    td.innerText = arr_datos2[j];
    tr_.appendChild(td)
  }


  tr_2 = document.createElement('tr');
  
  for (let m = 0; m < arr_datos3.length; m++) {
    td = document.createElement('td');
    td.style.padding = "8px 10px";
    td.style.borderTop = "1px solid #ddd"
    td.innerText = arr_datos3[m];
    tr_2.appendChild(td)
  }

  table.appendChild(tr);
  table.appendChild(tr_);
  table.appendChild(tr_2);
  document.body.appendChild(table);
}
tabla_datos();
