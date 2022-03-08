function funcion_input() {
  var Cantidad_P = parseInt(prompt('Ingrese el numero de nombres que se van a procesar'));
  var input, br, form;

  form = document.createElement('form');

  for(let i = 0; i < Cantidad_P; i++) {
    let palabrasDigitadas = prompt(`Ingrese el nombre #${i+1}`);

    br = document.createElement('br');

    input = document.createElement('input');
    input.id = 'Form_input_' + i;
    input.type = 'text';
    input.name = 'Form_input';
    input.setAttribute("value", palabrasDigitadas);
    input.style.fontSize = '18px !important';
    input.style.padding = '0.01em 16px';
    input.style.lineHeight = '1.5';
    input.style.fontFamily = 'serif';
    input.style.borderColor = '#39cece';
    input.style.marginBottom = "5px"
    
    form.appendChild(input);
    form.appendChild(br);
    document.body.appendChild(form);
  }
}
funcion_input();

// https://datatables.net/manual/data