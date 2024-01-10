// var cargarDatosLocalStorage = (function (data) {
  // var strUsers = JSON.stringify(data);
  // localStorage.setItem('users', strUsers)
// })

// function datos_URL() {
  // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(data => {
      // cargarDatosLocalStorage(data)
    // })
// }

// function onLoad () {
  // var item = localStorage.getItem("users");
  // if (item === null) {
    // datos_URL()
  // }
// }

// window.onload = onLoad;

let users = [{name: "Lesdy", age: 5}, {name: "Dana", age: 8}];

let convertir_A_String = localStorage.setItem("Usuarios", JSON.stringify(users));

let obtener_String = localStorage.getItem("Usuarios");
console.log(obtener_String);

let convertir_A_ElementoJS = JSON.parse(localStorage.getItem("Usuarios"));
console.log(convertir_A_ElementoJS)




let registros = [{idUser:1, userName:'user1'},{idUser:2, userName:'user2'}, {idUser:3, userName:'user3'}]

let mapIdUsers = registros.map((registro) => registro.idUser);
console.log(mapIdUsers);