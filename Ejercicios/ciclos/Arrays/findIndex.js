// findIndex : devuelve el indice del primer elemento de un array que cumpla con la funcion
const numA = [103, 475, 821, 93, 36, 52, 76, 2, 666];
let indice = ( numeroA ) => numeroA > 600;
console.log(numA.findIndex(indice));

const arrA = ["Yeison", "Jose", "Elizabeth", "Maria"];
indice = ( arrA ) => arrA.includes("a");
console.log(arrA.findIndex(indice));
