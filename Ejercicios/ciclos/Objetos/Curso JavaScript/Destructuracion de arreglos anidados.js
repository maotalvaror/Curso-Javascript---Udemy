let colores = ["Rojo", ["Verde", "Amarillo"], "Morado", "Naranja"];

let [color1, [color2]] = colores;

console.log(color1);
console.log(color2);


let colores2 = ["Rojo", "Verde", "Amarillo", "Morado", "Naranja"];

let [colorPrincipal, ...colores_Secundarios] = colores2;
console.log(colorPrincipal);
console.log(colores_Secundarios);

let [colorPrincipalA, Color_Secundario,...colores_SecundariosA] = colores2;
console.log(colorPrincipalA);
console.log(Color_Secundario);
console.log(colores_SecundariosA);
