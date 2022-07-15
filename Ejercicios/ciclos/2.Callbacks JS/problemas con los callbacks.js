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

const getEmpleado = ( id, callback ) => {
  const empleadoDB = empleados.find(empleado => empleado.id === id);

  if( !empleadoDB ){
    callback(`No existe el empleado con el id ${id}`)
    } else  {
        callback( null, empleadoDB);
    }
};
//Uso de id, empleados

getEmpleado(3, (err, empleado) => {
  if( err ) { return console.log(err); }

  console.log('empleado', empleado)
});

//_____________________________________________________

const getSalario = (id, callback) => {
  const salarioEmpleados = salarios.find(salario => salario.id === id);

  if( !salarioEmpleados ){
    callback(`No se encontro un salario para el empleado ${id}`)
  } else {
      callback(null, salarioEmpleados);
  }
}

//Uso de id, salario

getSalario(1, (err, salario) => {
  if( err ) { return console.log(err); }

  console.log('Salario', salario)
}) 