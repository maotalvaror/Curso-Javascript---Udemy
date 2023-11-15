var arrDatos = [
    {
      "3123371424": {
        nombre: "Yeison", apellido: "Rodriguez"
      }},
    {      
      "3204450281": {
        nombre: "Elizabeth", apellido: "Rodriguez"
      }},
    {
      "3223105135": {
        nombre: "Jose", apellido: "Otalvaro"
      }},
    {
      "3118495055": {
        nombre: "Maria", apellido: "Otalvaro"
      }},
    {
      "3123456987": {
        nombre: "Pepito", apellido: "Perez"
      }}
];

function evento_input(event){
  
  datos_filtrados = arrDatos.filter(e => {
    var numero_telefono = Object.keys(e)[0]
    return numero_telefono.lastIndexOf(event.target.value) > -1
  })
  console.log(datos_filtrados);
  tablaDatos(datos_filtrados);
}

function Formulario(){
  var div, label, input;

  div = document.createElement('div');
  div.classList.add('mb-3');

  label = document.createElement('label');
  label.innerText = "Buscar numero telefonico:";
  label.classList.add("m-2");

  input = document.createElement('input');
  input.id = "input_numero";
  input.type = "text";
  input.classList.add("m-2");
  input.onkeyup = evento_input;

  div.appendChild(label);
  div.appendChild(input);
  document.body.appendChild(div);
}

function tablaDatos(datos_){
  var table, thead, tbody, tr, th, td;
  
  var arr = ["Nombre", "Apellido"];

  var tbl = document.getElementById('table_datos');

  if (tbl)
    tbl.remove();


  table = document.createElement('table');
  table.id = "table_datos"
  table.style.border= "2px solid black";

  thead = document.createElement('thead');

  tr = document.createElement('tr');
  for(let i = 0; i < arr.length; i++){
    th = document.createElement('th');
    th.innerText = arr[i];
    th.style.border = "1px solid black";
    tr.appendChild(th);
  }
  thead.appendChild(tr);

  tbody = document.createElement('tbody');

  for(let m = 0; m < datos_.length; m++){
    var objeto_iteracion = datos_[m];
    var key_objeto = Object.keys(objeto_iteracion)[0]

    tr = document.createElement('tr');

    td = document.createElement('td');
    td.style.border= "2px solid black";
    td.innerText = objeto_iteracion[key_objeto].nombre;
    tr.appendChild(td)
    td = document.createElement('td');
    td.style.border= "2px solid black";
    td.innerText = objeto_iteracion[key_objeto].apellido;
    tr.appendChild(td);

    tbody.appendChild(tr);
  }
  
  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);
}

Formulario();