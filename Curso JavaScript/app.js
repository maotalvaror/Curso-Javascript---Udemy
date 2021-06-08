//String:basicamente son representaciones de texto
const producto  = "Monitor 20 pulgadas"; 
const producto2 = String('Monitor 24 pulgadas');
const producto3 = new String('Monitor de 28 pulgadas');
console.log(producto);
console.log(producto2);
console.log(producto3);

//conocer la cantidad de letras en la cadena de texto
const producto4 = 'Monitor 32 pulgadas';
console.log(producto4.length);

//busca el tipo de palabra que necesitamos
console.log(producto4.indexOf('pulgadas'));

//Concatenando cadenas de texto 
const producto5 = ' Monitor 16 pulgadas';
const precio    = ' 30 USD';
//concatenando varios tipos de cadena de texto
console.log(producto5.concat(precio));
console.log(producto5.concat(' en descuento'));
console.log(producto5 + 'con un precio de' + precio);
console.log("El producto" + producto5 + " Tiene un precio de " +precio);

//concatenando de mas maneras: ${}   O   , :("comas")
console.log(`El producto ${producto} tiene un precio de $ ${precio}`)
console.log("El producto" , producto5 , " Tiene un precio de" ,precio);

//
const producto6 = '                Monitor 22 pulgadas                   ';

console.log(producto6);
console.log(producto6.length);

//Eliminacion del inicio:
console.log( producto6.trimStart() );

//Eliminacion de final
console.log( producto6.trimEnd() );

//Eliminando inicio y final
console.log( producto6.trimStart().trimEnd() );

//.replace para remplazar
const producto7 = 'Monitor 32 pulgadas'
console.log(producto7);
console.log(producto7.replace('pulgadas','"'));
console.log(producto7.replace('Monitor', 'Monitor Curvo'));

//.slice para cortar
console.log(producto7.slice(0, 10));

//subString alternativa a slice
console.log(producto7.substring(1, 10));
console.log(producto7.substring(3, 1));
const usuario = "Alejandra";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));

//Repeat: permite repetir una cadena de texto.
const producto8 = 'Monitor 28 pulgadas'
const texto     = ' En promoción'.repeat(2);
console.log(texto);
console.log(`${producto8} ${texto} !!!!`)
 
//split, dividir un string
const actividad = "Estoy aprendiendo JavaScript";
console.log(actividad.split(""));
const hobbies = 'Caminar, correr, saltar, gritar, morder, jugar y estudiar';
console.log(hobbies.split(","));

//toUpperCase: Me cambia las letras del producto a MAYUSCULAS
const producto9 = 'Monitor 25 pulgadas'
console.log(producto9.toUpperCase());

//toLowerCase: Me cambia las letras del producto a minusculas
console.log(producto9.toLowerCase());