function Preguntas(){
  let h1, p, p2, form, input, label, br;  
  
  br = document.createElement("br");

  h1 = document.createElement('h1');
  h1.innerText = "Preguntas";
  document.body.appendChild(h1);

  p = document.createElement('p');
  p.innerText = "5 Preguntas:";
  document.body.appendChild(p);

  form = document.createElement('form');

  let arr_ = ["Si", "No", "Tal vez"];
  
  p2 = document.createElement('p');
  p2.innerText = "1.) ¿Haces ejercicio?";
  form.appendChild(p2);

  for(let i = 0; i < arr_.length; i++){

    input = document.createElement('input');
    input.type = "radio";
    input.id = "Pregunta1";
    input.name = "Preguntas1";

    label = document.createElement('label');
    label.for = "Pregunta1";
    label.innerText = arr_[i];

    form.appendChild(input);
    form.appendChild(label);
}

    p2 = document.createElement('p');
    p2.innerText = "2.) ¿Sabes cocinar?";
    form.appendChild(p2);


  for(let i = 0; i < arr_.length; i++){
    input = document.createElement('input');
    input.type = "radio";
    input.id = "Pregunta2";
    input.name = "Preguntas2";

    label = document.createElement('label');
    label.for = "Pregunta2";
    label.innerText = arr_[i];

    form.appendChild(input);
    form.appendChild(label);

  }

    p2 = document.createElement('p');
    p2.innerText = "3.) ¿Tienes Hijos?";
    form.appendChild(p2);


  for(let i = 0; i < arr_.length; i++){
    input = document.createElement('input');
    input.type = "radio";
    input.id = "Pregunta3";
    input.name = "Preguntas3";

    label = document.createElement('label');
    label.for = "Pregunta3";
    label.innerText = arr_[i];

    form.appendChild(input);
    form.appendChild(label);

  }

    p2 = document.createElement('p');
    p2.innerText = "4.) ¿Te gustan las peliculas de miedo?";
    form.appendChild(p2);


  for(let i = 0; i < arr_.length; i++){
    input = document.createElement('input');
    input.type = "radio";
    input.id = "Pregunta4";
    input.name = "Preguntas4";

    label = document.createElement('label');
    label.for = "Pregunta4";
    label.innerText = arr_[i];

    form.appendChild(input);
    form.appendChild(label);
}
    p2 = document.createElement('p');
    p2.innerText = "5.) ¿Sabes jugar Futbol?";
    form.appendChild(p2);


  for(let i = 0; i < arr_.length; i++){
    input = document.createElement('input');
    input.type = "radio";
    input.id = "Pregunta5";
    input.name = "Preguntas5";

    label = document.createElement('label');
    label.for = "Pregunta5";
    label.innerText = arr_[i];

    form.appendChild(input);
    form.appendChild(label);
  }

  input = document.createElement('input');
  input.style="width: 90px;"
  input.type = "Submit";
  input.value = "Guardar";

  form.appendChild(br);
  br = document.createElement('br');
  form.appendChild(br);
  form.appendChild(input);

  input = document.createElement('input');
  input.style="width: 90px;"
  input.type = "Submit";
  input.value = "Imprimir";
  

  form.appendChild(input);

  document.body.appendChild(form);
};

Preguntas();