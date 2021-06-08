const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
console.table(numeros);

//Acceder a numeros del arreglo.
console.log(numeros[2]);
console.log(numeros[4]);

//Recorriendo arrays.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);
console.table(meses[3]);
console.table(meses[4]);
console.table(meses[5]);

//Cuanto mide el arreglo.
console.log(meses.length);
//recoriendo el arreglo.
for(let i = 0; i < meses.length; i++){
console.log(meses[i]);
}

