let Frutas = ["Fresa", "Uva"];
let [fruta1, fruta2 = "Manzana"] = Frutas;
console.log(fruta1);
console.log(fruta2);

let datos_persona = {
  nombre: "Alejandra"
};
let {nombre, apellido = "Otalvaro"} = datos_persona

console.log(nombre, apellido)