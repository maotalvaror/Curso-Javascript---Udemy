function solicitarNombres(cantidad) {
  var arr = [];
  for (let i = 0; i < cantidad; i++){
    var mensaje = `Ingrese el nombre ${i + 1}`;
    var nombre = prompt(mensaje);
    arr[i] = nombre;
  }
  return arr;
}

/*
  var Objetos_en_arr = [{nombre: , edad: }, {nombre:  , edad: }];
  {
    nombre: "Maria",
    edad: 14
  }
*/

function numerosAleatorios() {
  return parseInt(Math.random() * (100 - 1) + 1);
}

function RetornarArray_Objetos(arr_nombres) {
  var arr_objetos = [];
  var objeto = null;

  for (let i = 0; i < arr_nombres.length; i++){
    objeto = {nombre: arr_nombres[i], edad: numerosAleatorios()}

    arr_objetos.push(objeto);
  }

  return arr_objetos;
}


function construirTablaPersonas(arr_personas) {
  var table = document.createElement("table");
  table.style.borderCollapse = 'collapse'
  table.style.width = '100%';

  /*
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  }
  */
  
  var tr, td, th;
  tr = document.createElement("tr");

  th = document.createElement("th");
  th.style.border = '1px solid #dddddd';
  th.style.textAlign = 'left'
  th.style.padding = '8px'
  th.innerText = "Nombre"
  tr.appendChild(th);

  th = document.createElement("th");
  th.style.border = '1px solid #dddddd';
  th.style.fontFamily='left';
  th.innerText = "Edad"
  tr.appendChild(th);

  table.appendChild(tr);

  

  for (let j = 0; j < arr_personas.length; j++){

    tr = document.createElement("tr");

    td = document.createElement("td");
    td.style.border = '1px solid #dddddd';
    td.style.textAlign = 'left'
    td.style.padding = '8px'
    td.innerText = arr_personas[j].nombre
    tr.appendChild(td);

    td = document.createElement("td");    
    td.style.border = '1px solid #dddddd';
    td.style.textAlign = 'left'
    td.style.padding = '8px;'
    td.innerText = arr_personas[j].edad
    tr.appendChild(td);

    table.appendChild(tr)
  }
  console.log(arr_personas)
  document.body.appendChild(table);
}

/*
Obtener objetos con el metodo de los arrays 

.map = llama a una funcion para cada elemento de un array, 
retorna lo que el usuario desee

function ObtenerObjetos(arr_nombres) {
  return arr_nombres.map(function(s) {
    return s
  })
}
*/
function main() {
  cantidadNombres = parseInt(prompt("Cantidad de nombres a procesar"));
  // Solicita los nombres de las personas que se van a procesar
  var nombres = solicitarNombres(cantidadNombres);

  // Transforma el array de personas que contiene solo los nombre y retorna un array de personas con solo dos propiedades <nombre, edad>
  var objetos = RetornarArray_Objetos(nombres) 

  // Pinta una tabla con los datos de las personas
  construirTablaPersonas(objetos);
  /*
  Muestra la primera edad en el arr (numero aleatorio)
  console.log(objetos[0].edad)
  */
}
main();