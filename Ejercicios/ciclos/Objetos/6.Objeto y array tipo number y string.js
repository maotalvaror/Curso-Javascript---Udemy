/*{
  letras: ['A', 'B', ..., 'Z']
  numeros: [ 0, 1, ..., 9]
}
*/

//

function llamarFuncion(){
  var objeto = {
    numeros: [],
    letras: []
  }

  // Genera las letras del alfabeto [A-Z]
  for (let j = 0; j < 26; j++){
    letra = String.fromCharCode(65 + j);
    objeto.letras.push(letra);

    if (j >= 0 && j <= 9)
      objeto.numeros.push(j);
  }

  console.log(objeto)
}


var persona = {
  nombre: 'Elizabeth',
  apellido: 'Rodriguez Baquero',
  sexo: 'Femenino',
  edad: 52,
  hijos:[
    {
      nombre: 'Yeison',
      apellido: 'Rodriguez Baquero',
      sexo: 'Masculino',
      edad: 32,
      hijos:[
        {
          nombre: 'Esteban',
          apellido: 'Rodriguez ',
          sexo: 'Masculino',
          edad: 2,
          hijos:[
            {
              nombre: 'Raul',
              apellido: 'rodriguez',
              edad: 2,
              sexo: 'Masculino',
              hijos: []
            }
          ]
        },
        {
          nombre: 'Gabriela',
          apellido: 'Rodriguez ',
          sexo: 'Femenina',
          edad: 1,
          hijos:[]
        }
      ]
    },
    {
      nombre: 'Betsy',
      apellido: 'Rodriguez Baquero',
      sexo: 'Femenino',
      edad: 27,
      hijos:[
        {
          nombre: 'Dana',
          apellido: 'Ortega Rodriguez',
          sexo: 'femenino',
          edad: 6,
          hijos:[]
        }
      ]
    },
    {
      nombre: 'Maria',
      apellido: 'Otalvaro',
      sexo: 'Femenino',
      edad: 14,
      hijos:[]
    },
    {
      nombre: 'Yeraldin',
      apellido: 'valencia',
      sexo: 'Femenino',
      edad: 3,
      hijos:[]
    },
    {
      nombre: 'Camila',
      apellido: 'Rodriguez',
      sexo: 'Femenino',
      edad: 27,
      hijos:[]
    }
  ]
}

function imprimir(persona) {
  var nombre = `Nombre: ${persona.nombre} ${persona.apellido}, Edad: ${persona.edad} `;
  console.log(nombre);

  if (persona.hijos || persona.hijos.length) {
    var array = persona.hijos;
    
    for (let index = 0; index < array.length; index++) {
      imprimir(array[index])      
    }
  }
}

imprimir(persona)