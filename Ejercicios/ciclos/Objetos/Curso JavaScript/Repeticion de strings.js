let texto = "Hola";
console.log(texto.repeat(2)) // Variable declarada texto = "Hola"
console.log("0".repeat(10)) // Variable anonima "0"


/*
Fernando   |99998888
Melissa    |33445566
Juan       |44221122
*/

let arr_nombres = ["Fernando", "Melissa", "Juan"];
let arr_numeros = [99998888, 33445566, 44221122];
const espacios = 12;

for (i in arr_nombres){
  let dif = espacios - arr_nombres[i].length;
  console.log( arr_nombres[i] + " ".repeat(dif) + "|" + arr_numeros[i])
}

