/*<!DOCTYPE html>
<html>
<body>
<h2>Grouping Form Data with Fieldset</h2>
<p>The fieldset element is used to group related data in a form, and the legend element defines a caption for the fieldset element.</p>
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
</body>
</html>
 */

function Funcion_(){
  var h2, p;
  var form, fieldset, legend;
  var label, input;

  h2 = document.createElement('h2');
  h2.innerText = "Grouping Form Data with Fieldset";

  document.body.appendChild(h2);
}

Funcion_()