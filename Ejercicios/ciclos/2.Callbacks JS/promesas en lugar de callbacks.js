const empleados = [{
  id: 1,
  nombre: 'Maria'
},{
  id: 2,
  nombre: 'Yeison'
},{
  id: 3,
  nombre: 'Elizabeth'
}];

const salarios = [{
  id: 1,
  salario: 1000
},{
  id: 2,
  salario: 2000
}];

const getEmpleado = ( id ) => {

  return new Promise( (resolve, reject) => {

    const empleadosDB = empleados.find( empleado => empleado.id === id)
    
    if( !empleadosDB ){
      reject(`No existe el empleado con el id ${id}`);
    } else {
        resolve( empleadosDB );
    }
  });
  //return promesa;
};

const getSalario = ( empleado ) => {
  return new Promise( ( resolve, reject ) => {
    const salarioEmpleados = salarios.find(salario => salario.id === empleado.id);

    if( !salarioEmpleados ){
      reject(`No existe un salario para el empleado ${empleado.nombre}`)
    } else {
        resolve({
        nombre:empleado.nombre,
        salario: salarioEmpleados.salario,
        id: empleado.id
      });
    }
  });
};

getEmpleado( 1 )
  .then( getSalario )
  .then( console.log)
.catch(err => {
  console.log(err);
});

// getEmpleado( 1 ).then( empleado => {
//   // getSalario( empleado ).then( resp => {
//   //   console.log(resp);
//   return getSalario( empleado );
// })
// .then( resp => {
//   console.log(resp);
// })
// .catch(err => {
//   console.log( err );
// });

/*El método then() lo que se va a ejecutar despues de que la promesa se resuelva.
La promesa Recibe dos argumentos:
funciones callback  resolve y reject.*/
/*
resolve es cuando la promesa funciona 
reject es cuando hay un error en la promesa
*/