/*
{
  resultado:

  {
    'Yeison': {nombre: 'Yeison', apellido: 'Rodriguez', edad: 34, sexo: 'M'},
    'Elizabeth': {nombre: 'Elizabeth', apellido: 'Rodriguez', edad: 53, sexo: 'F'},
    ...
  }
}
*/

var personas = [
  {nombre: 'Yeison', apellido: 'Rodriguez', edad: 34, sexo: 'M'},
  {nombre: 'Elizabeth', apellido: 'Rodriguez', edad: 53, sexo: 'F'},
  {nombre: 'Jose', apellido: 'Otalvaro', edad: 48, sexo: 'M'},
  {nombre: 'Dana', apellido: 'Ortega', edad: 7, sexo: 'F'},
  {nombre: 'Dana', apellido: 'Rodriguez', edad: 8, sexo: 'F'}
];


var longitud = personas.length;
var obj = {};

for(let i = 0; i < longitud; i++){
  if(!(personas[i].nombre in obj)){
    var nombres = personas[i].nombre;
    obj[nombres] = personas[i];
  }
}

obj = obj;

//console.log(obj)



var o = { 
  ...(
    personas
      .map((e,i, arr) => { 
        return { 
          [e.nombre]: e, 
          existe:  arr.find((e2, i2) => e.nombre == e2.nombre &&  i2 < i)  != undefined
        }
      })
      .filter(e => !e.existe)
  )  
}
  


var o = { 
  ...(
    personas
      .map((e) => ({ [e.nombre]: e }))
  )
}
console.log( o);

