let arrNumeros = [100, 20, 30, 50, 200];

//Recorrer arreglos
for(let i = 0; i < arrNumeros.length; i++) {
  console.log(arrNumeros[i])
}

console.log("-------")

for(let i in arrNumeros){
  console.log(arrNumeros[i])
}

console.log("-------")

for(let i of arrNumeros){
console.log(i)
}

let personas = [ 
  { nombre: "Elizabeth", edad: 52 },
  { nombre: "Yeison", edad: 32 },
  { nombre: "Camila", edad: 27 },
  { nombre: "Dana", edad: 6 },
  { nombre: "Maria", edad: 15 }
];

for(let i of personas){
  console.log(i.nombre, i.edad);
}