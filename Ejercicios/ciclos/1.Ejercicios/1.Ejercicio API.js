async function fn() {
  var res = await fetch('https://jsonplaceholder.typicode.com/users');
  var datos = await res.json();
  var longitud_d = datos.length;

  for(let i = 0; i < longitud_d; i++){

    const { id, name, address } = datos[i];
    const { street, city } = address;

    // var id = datos[i].id;
    // var name = datos[i].name;
    // var address = datos[i].address;
    console.log(`Id: ${id}, name: ${name}, address: ${street} - ${city}`)
  }

  // datos.forEach(usuario => {
  //   const { id, name, address } = usuario
  //   const { street, city } = address

  //   var f = `Id: ${id}, name: ${name}, address: ${street} - ${city}`

  //   console.log(f);
  // });
}

fn();