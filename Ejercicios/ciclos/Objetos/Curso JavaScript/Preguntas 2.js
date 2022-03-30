const opcionesRespuesta = [ 'Si', 'No', 'Tal vez' ];
const preguntas = [
  {
    id: 1,
    pregunta: '1.) ¿Haces ejercicio?',
    posiblesRespuestas: opcionesRespuesta,

  },
  {
    id: 2,
    pregunta: '2.) ¿Sabes cocinar?',
    posiblesRespuestas: opcionesRespuesta
  },
  {
    id: 3,
    pregunta: '3.) ¿Tienes Hijos?',
    posiblesRespuestas: opcionesRespuesta
  },
  {
    id: 4,
    pregunta: '4.) ¿Te gustan las peliculas de miedo?',
    posiblesRespuestas: opcionesRespuesta
  },
  {
    id: 5,
    pregunta: '5.) ¿Sabes jugar Futbol?',
    posiblesRespuestas: opcionesRespuesta
  }
];


function main(){
  let form, h1, p, htmlPreguntas, button;  

  form = document.createElement('form');
  form.classList.add('p-5')
  
  h1 = document.createElement('h1');
  h1.innerText = "Cuestionario";
  h1.classList.add('fs-1', 'ps-5')
  document.body.appendChild(h1);

  p = document.createElement('p');
  p.innerText = `${preguntas.length} Preguntas:`;
  p.classList.add('fs-2', 'ps-5')
  document.body.appendChild(p);

  const longuitud = preguntas.length;

  for (let i = 0; i < longuitud; i++){
      htmlPreguntas = renderizar_pregunta(preguntas[i]);
      form.appendChild(htmlPreguntas);
  }
  
  button = document.createElement('button');
  button.type = "button";
  button.classList.add('btn', 'btn-outline-primary',"m-2")
  button.innerText = "Guardar";
  button.onclick = ObtenerRepuestas;

  form.appendChild(button);
  document.body.appendChild(form);
};

function renderizar_pregunta({ id, pregunta, posiblesRespuestas }) {
  let div, p, error;
  
  div = document.createElement('div');

  p = document.createElement('p');
  p.id = 'p_pregunta_' + id;
  p.innerText = pregunta;
  div.appendChild(p);

  let respuestasHTML = renderizar_posibles_respuestas(id, posiblesRespuestas);
  div.appendChild(respuestasHTML);

  error = document.createElement('div');
  error.id = 'error_' + id;
  error.classList.add('invalid-feedback')
  error.innerText = 'La respuesta es requerida.'

  div.appendChild(error)

  return div;
}

function renderizar_posibles_respuestas(id_pregunta, posiblesRespuestas) {
  const longuitud = posiblesRespuestas.length;
  let input, label, div, br;

  div = document.createElement('div');
  div.classList.add("form-check", 'mb-3');
  br = document.createElement('br');

  for (let i = 0; i < longuitud; i++) {
    const value = posiblesRespuestas[i];
    const id = `pregunta_${id_pregunta}_respuesta_${i}`;

    input = document.createElement('input');
    input.classList.add("form-check-input");
    input.type = 'radio';
    input.id = id;
    input.name = `pregunta_${id_pregunta}`;
    input.value = value;
    

    br = document.createElement('br');
    label = document.createElement('label');
    label.classList.add("form-check-label");
    label.setAttribute('for', `${id}`);
    label.innerText = value;
    div.appendChild(br)
    

    div.appendChild(input);
    div.appendChild(label);
  }

  return div;
}

function ObtenerRepuestas(){
  let respuestas = [];
  let p, radios, error;

  for (let index = 0; index < preguntas.length; index++) {
    let { id, pregunta } = preguntas[index];

    let input_respuesta = document.querySelector(`[id^=pregunta_${id}]:checked`)

    p = document.getElementById('p_pregunta_' + id);
    radios = document.querySelectorAll(`[name=pregunta_${id}]`);
    
    error = document.getElementById('error_' + id);

    if (!!input_respuesta){
      p.classList.remove('text-danger');
      radios.forEach( e  => e.classList.remove('is-invalid'));
      error.classList.remove('d-block','mb-2');

      respuestas.push({ id, pregunta, respuesta: input_respuesta.value })
    }
    else {
      p.classList.add("text-danger");
      radios.forEach( e  => e.classList.add('is-invalid'));
      error.classList.add('invalid-feedback', 'd-block','mb-2');

    }
  };


  // id = p_pregunta_${numero}
  //  p.classList.add('text-danger')

  // radio button
  // radios.classList.add('is-invalid')

    // errror_${numero}
   //error.classList.add('invalid-feedback', 'd-block','mb-2')
  //error.classList.remove('invalid-feedback', 'd-block','mb-2')

  console.log(respuestas)
}


main();