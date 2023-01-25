var VALOR_CONTADOR = 0;

function incremento_valor(){
  VALOR_CONTADOR += 1;
  var e = document.querySelector('#lblCoontador');
  e.innerText = VALOR_CONTADOR;
}

function decremento_valor(){
  VALOR_CONTADOR -= 1;
  if(VALOR_CONTADOR < 0){
    VALOR_CONTADOR = 0;
  } else {
  var e = document.querySelector('#lblCoontador');
  e.innerText = VALOR_CONTADOR;
  }
}

function reset_valor(){
  VALOR_CONTADOR = 0;
  var e = document.querySelector('#lblCoontador');
  e.innerText = VALOR_CONTADOR;
}

function fn(){
  var label, h1, button, br;

  label = document.createElement('label');
  label.id = 'lblCoontador';
  label.innerText = "0"

  h1 = document.createElement('h1');
  h1.innerText = "CONTADOR : ";

  br = document.createElement('br');

  document.body.appendChild(h1);
  document.body.appendChild(label);
  document.body.appendChild(br);

  button = document.createElement('button');
  button.id = "Btn-incrementar";
  button.classList.add('btn', 'btn-outline-secondary', 'mx-1');
  button.innerText = "+1";
  button.onclick = incremento_valor;

  document.body.appendChild(button);

  button = document.createElement('button');
  button.id = "Btn-decrementar";
  button.classList.add('btn', 'btn-outline-primary', 'mx-1');
  button.innerText = "-1";
  button.onclick = decremento_valor;
  
  document.body.appendChild(button);

  button = document.createElement('button');
  button.id = "Btn-reset";
  button.classList.add('btn', 'btn-outline-danger', 'mx-1');
  button.innerText = "reset";
  button.onclick = reset_valor;

  document.body.appendChild(button);

}

fn();