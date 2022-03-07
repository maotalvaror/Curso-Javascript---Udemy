//Extrae las propiedades de persona1 y las "copia" a persona2
let persona1 =  {
  nombre: "María",
  edad: 14
}

let persona2 = {...persona1};

persona2.nombre = 'Alejandra'; //cambiando el nombre de persona1

console.log(persona1);
console.log(persona2);