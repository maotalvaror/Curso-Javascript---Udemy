function configurarevento(e){
    var span = document.querySelector('#sTexto');
    span.innerText = e.target.value;
}

function fn(){
  var input, span, br;

  input = document.createElement('input');
  input.id = "input_txt";
  input.type = "text";
  input.classList.add("m-2");
  input.onkeyup = configurarevento;
  document.body.appendChild(input);

  br = document.createElement('br');
  document.body.appendChild(br);

  span = document.createElement('span');
  span.innerText = "El mensaje es: ";
  span.classList.add('fw-light', 'ms-2');
  document.body.appendChild(span);

  span = document.createElement('span');
  span.innerText = "";
  span.id = 'sTexto';
  span.classList.add('text-secondary');
  document.body.appendChild(span);
}

fn();