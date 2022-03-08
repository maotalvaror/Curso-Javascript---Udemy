/*<!DOCTYPE html>
<html>
<body>
<h2>Textarea</h2>
<p>The textarea element defines a multi-line input field.</p>
<form action="/action_page.php">
  <textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea>
  <br><br>
  <input type="submit">
</form>
</body>
</html>*/

function botón_input (){
  window.open('Form 2 Elements.html');
}

function Fn(){
  var h2, p;
  var form, textarea;
  var br, input;

  h2 = document.createElement('h2');
  h2.innerText = "Textarea";

  p = document.createElement('p');
  p.innerText = "The textarea element defines a multi-line input field.";

  form = document.createElement('form');
  br = document.createElement('br');

  textarea = document.createElement('textarea');
  textarea.name = "message";
  textarea.rows = "10";
  textarea.cols = "30";
  textarea.innerText = "The cat was playing in the garden";
  form.appendChild(textarea);

  form.appendChild(br);

  br = document.createElement('br')
  form.appendChild(br);

  input = document.createElement('input');
  input.type = "button"
  input.value = "Enviar Consulta"
  input.onclick = botón_input;
  form.appendChild(input);

  document.body.appendChild(h2);
  document.body.appendChild(p);
  document.body.appendChild(form);
}

Fn()