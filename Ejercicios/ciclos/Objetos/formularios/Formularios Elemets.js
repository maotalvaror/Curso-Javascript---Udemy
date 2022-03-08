/*
<h2>The select Element</h2>
<p>The select element defines a drop-down list:</p>

<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
  <input type="submit">
</form>
*/
function btn_input() {
  window.open('Formularios.html');
}

function form_() {
  var h2, p;
  var form, label, input;
  var select, options;

  h2 = document.createElement('h2');
  h2.innerText = "The select Element";

  p = document.createElement('p');
  p.innerText = "The select element defines a drop-down list:";

  
  form = document.createElement('form');
  label = document.createElement('label');
  input = document.createElement('input');

  label.setAttribute("for", "cars");
  label.innerText = "Choose a car:";
  form.appendChild(label);

  select = document.createElement('select');

  options = ['Volvo', 'Saab', 'Fiat', 'Audi'];
  //forEach = llama a una funcion para cada elemento de un arr.
  options.forEach(function(elemento, indice){
    select[select.options.length] = new Option(elemento, indice, false, false);
  })
  form.appendChild(select)

  input.type = "button"
  input.value = "Submit"
  input.onclick = btn_input;

  form.appendChild(input);

  document.body.appendChild(h2);
  document.body.appendChild(p);
  document.body.appendChild(form);
}
form_()