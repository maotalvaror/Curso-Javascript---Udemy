async function fn() {
  var res = await fetch('https://jsonplaceholder.typicode.com/users');
  var datos = await res.json();
  console.log(datos);

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(datos => console.log(datos))
}

fn();