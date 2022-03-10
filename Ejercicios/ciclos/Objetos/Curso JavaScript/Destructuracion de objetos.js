let ajustes = {
  nombre : "Alejandra Otalvaro",
  email : "otalvaroalejandra03@gmail.com",
  google : "Alejandra Otalvaro R",
  premium : true
};

let nombre = ajustes.nombre,
    email = ajustes.email,
    google = ajustes.google;

console.log(nombre, email,google);


//______________________________________

let ajustes2 = {
  nombreA : "Alejandra Otalvaro",
  emailA : "otalvaroalejandra03@gmail.com",
  googleA : "Alejandra Otalvaro R",
  premiumA : true
};

let {nombreA, emailA, googleA, premiumA: dePago} = ajustes2;

//La destructuración permite la inicializacion de variables aunque no existan
console.log(googleA, dePago)
