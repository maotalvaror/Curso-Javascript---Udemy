/*Codigo Html de Formulario =
<!DOCTYPE html>
<html>
<body>
<h2>HTML Forms</h2>
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>
</body>
</html>
*/

//Funcion para abrir el documento Formularios.html cuando el usuario de click en el boton
function boton_input() {
  window.open('Formularios.html')
}

function fn_Formulario() {

  var h2, p, form, label, input, br;

  p = document.createElement('p');
  br = document.createElement('br');
  form = document.createElement('form');
  label = document.createElement('label');

  //Encabezado
  h2 = document.createElement('h2');
  h2.innerText = "HTML Forms";

  //Parrafo
  p = document.createElement('p');
  p.innerText ='If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".';

  //formulario
  label.setAttribute("for", "fname");
  label.innerText = "First name:";
  form.appendChild(label);
  form.appendChild(br)

  br = document.createElement('br');
  input = document.createElement('input');
  input.setAttribute("type", "text");
  input.setAttribute("id", "fname");
  input.setAttribute("name", "fname");
  input.setAttribute("value", "jhon");
  form.appendChild(input);
  form.appendChild(br);
  
  label = document.createElement('label');
  label.setAttribute("for", "lname");
  label.innerText = "Last name:";
  input = document.createElement('input');
  input.setAttribute("type", "text");
  input.setAttribute("id", "lname");
  input.setAttribute("name", "lname");
  input.setAttribute("value", "Doe");


  form.appendChild(label);
  br = document.createElement('br');
  form.appendChild(br)
  form.appendChild(input);
  br = document.createElement('br');
  form.appendChild(br)


  br = document.createElement('br');
  form.appendChild(br)


  input = document.createElement('input');
  input.type = "button"
  input.value = "Submit"
  input.onclick = boton_input;
  form.appendChild(input);

  //Agregando el Encabezado
  document.body.appendChild(h2);
  
  //Agregando el Formulario
  document.body.appendChild(form);
  
  //Agregando el parrafo
  document.body.appendChild(p);
}

fn_Formulario();

/*
 window.open('Formularios.html')
*/