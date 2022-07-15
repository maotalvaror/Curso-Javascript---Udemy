const empleados = [{
  id: 1,
  nombre: "Yeison"
},{
  id: 2,
  nombre: "Elizabeth"
},{
  id: 3,
  nombre: "Maria"
}];

const salarios = [{
  id: 1,
  salario: 1000
},{
  id: 2,
  salario: 2000
}];

const getEmpleado = async( id ) => {

  const empleadoDB = empleados.find( empleado => empleado.id === id);

  if( !empleadoDB ){
    throw new Error(`No existe un empleado con el id ${id}`);
  } else {
    return empleadoDB;
  }
};

const getSalario = async( empleado ) => {

  const salarioDB = salarios.find( salario => salario.id === empleado.id );

    if( !salarioDB ){
      throw new Error(`No se encontro un salario para el empleado: ${empleado}`)
    } else {
      return {
        nombre: empleado.nombre,
        salario: salarioDB.salario,
        id: empleado.id
    }
  }
}

const getInformacion = async(id) => {
  const empleado = await getEmpleado(id);
  const resp = await getSalario( empleado );

  return `${ empleado.nombre } tiene un salario de ${resp.salario}`;
}

getInformacion(1).then( console.log );