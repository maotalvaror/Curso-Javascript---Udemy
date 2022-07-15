/*
Resultado operadores logicos =

var a = true || false; // true
var b = true && false; // false
var c = a && b; // false
var d = null || 1; // 1

Sentencia for =
for(let i = 0; i < numero; i++){

}

Sentencia while =
let i = 0
while(i < numero){

i++
}

Sentencia do while =
do {
...
} while (expresion_verdadera)

Sentencia switch =
switch {

case :
break;

default:
}
_______________________________________________________*/

/*
Ejemplos de sentencias for =
*/
var numeroI = prompt('Ingrese un numero de su preferencia');

for (let i = 0; i <= numeroI; i++){
  //por ejemplo si ingresa 3 = 0, 1, 2, 3
  console.log(i);
}

/*
Ejemplos de sentencias while =
1
2
3
3 <= Resultado final
*/

let i = 1;
let numeroIngresado = prompt('Digite un numero');

while (i <= numeroIngresado){
console.log(i);
  i++
}

/*
Ejemplos de sentencia do while =
let j = 0;
let numero = prompt('Digite un numero');

do {
i++
console.log(i)  // 4
} while (i < numero)
*/
/*
Ejemplos de sentencia Switch =
*/

let valor = prompt("Ingrese un valor entre 0, 1 o 2");

switch (valor) {
  case '0':
    console.log( 'Cero' );
    break;
  case '1':
    console.log( 'Uno' );
    break;
  case '2':
    console.log( 'Dos' );
    break;

  default:
    console.log('Los unicos valores que debe ingresar son (0, 1 o 2)');
}

//Propiedades

let obj = {
  Num1: 7,
  Num2: 5,
  Num3: 4
};

console.log( obj.Num1 + obj.Num2 + obj.Num3);  // 16

/*
Sin el Operador especial = (in)
*/
alert('Prueba sin Operador in ')
let PruebaObjetoNoExistente = {}
let PruebaObjetoExistente = {
   Propiedad_Existente: "Existe esta propiedad"
  };

console.log( PruebaObjetoNoExistente.PropiedadNoExistente === undefined ); // true significa que no existe
console.log( PruebaObjetoExistente.Propiedad_Existente === undefined);  //  false por que esta propiedad si existe

/*
OPERADOR ESPECIAL ( IN )
*/
alert('Operador in ')
let ObjetoDatos = { nombre: "John", edad: 30 };

console.log( "edad" in ObjetoDatos ); // mostrara true, ObjetoDatos.edad si existe
console.log( "Nada" in ObjetoDatos ); // mostrara false, user.Nada no existe

//Parte NO entera
console.log('Orden de creacion')
let ParteNoEntera = {
  "+49": "A",
  "+41": "B",
  "+44": "C",
  "+1": "D"
};

for (let Object in ParteNoEntera) {
  console.log( +Object ); // 49, 41, 44, 1
}

console.log('Orden por numero')

let ParteEntera = {
  "49": "D",
  "41": "B",
  "44": "C",
  "1": "A"
};

for (let Object in ParteEntera) {
  console.log( +Object ); // 1, 41, 44, 49
}

/*
  ¿Para eliminar una propiedad? : delete objeto.propiedad
  ¿Para comprobar si existe una propiedad? : "propiedad" in objeto
  ¿Para crear bucles sobre un objeto? : (let propiedad in obj).

  ¿Para acceder a propiedades de un objeto? : (  objeto.propiedad  )  O de igual manera (  objeto["propiedad"]  )

*/

//Copiar REFERENCIA del objeto
var objetoPrincipal = {
  Nombre_Usuario: "Maria",
  Edad_Usuario: 14,
}
var copiaObjeto = objetoPrincipal;

console.log(objetoPrincipal == copiaObjeto) //true

if (objetoPrincipal == copiaObjeto) {
  console.log('Si son iguales')
}

// ¿Cuando se declara la propiedad con valor undefined es existente o realmente si es undefined?

let pruebaObj = {
  propiedad: undefined
}
console.log(pruebaObj.propiedad) // undefined
console.log("propiedad" in pruebaObj) // true ya que si existe esta propiedad


//para recorrer todas las "claves" de un objeto existe una forma especial de bucle (for in)

//Objeto de Datos usuario

let user = {
  nombre: "John",
  edad: 30,
  isAdmin: true
};

for (var PropiedadesObtenidas in user) {
  console.log( PropiedadesObtenidas );          // nombre, edad, isAdmin
  console.log( user[PropiedadesObtenidas] );    // John, 30, true
}

//Objeto de Letras

let objetoLetras = {
  propiedadletra1: "A",
  propiedadletra2: "B",
  propiedadletra3: "C"
}

for (letrasAbecedario in objetoLetras) {
  console.log( letrasAbecedario );                //  propiedadLetra1, propiedadletra2, propiedadletra3
  console.log( objetoLetras[letrasAbecedario] );  //  A, B, C
}

//Object assign
let objt = { name: "John" };

let prop1 = { valortrue: true };
let prop2 = { valor_true: true };

Object.assign(objt, prop1, prop2);


//Si la propiedad ya existe se sobre escribe
let usuario = { nombre: "John" };
console.log('(Sin sobrescribir)', usuario.nombre);

Object.assign(usuario, { nombre: "Pete" });
console.log('(El nombre sobrescrito)', usuario.nombre);

//Clonacion simple sin (for in ...)
let o = {
  n: "John",
  e: 30
};

let cln = Object.assign({}, o);

//Clonacion

let nuevos_Datos = {
  nombre: "Junior",
  DatosImportantes: {
    peso: "3.130gr",
    EsUnAnimal: true
  }
};

console.log( nuevos_Datos ); // Object
console.log( nuevos_Datos.DatosImportantes ); // Object
console.log( nuevos_Datos.DatosImportantes.peso ); // 3.130gr


//otra Clonacion
let Datos_user_Junior = {
  nombre: "Junior",
  preguntas: {
    height: "3.130 gr",
    edad: 3
  }
};

let clonacionObjeto = Object.assign( {}, Datos_user_Junior);

console.log( Datos_user_Junior.preguntas === clonacionObjeto.preguntas ); //true, ya que es el mismo objeto
Datos_user_Junior.preguntas.edad++;      //cambia el valor de la propiedad en este lugar
console.log(clonacionObjeto.preguntas.edad); //4 <= resultado

/*Es importante saber que cuando se declara un objeto con ( const )
El valor del objeto es constante, debe siempre hacer referencia al mismo objeto,
Pero sus propiedades pueden cambiar libremente
*/

const objetoConstante = {
  nombre: "Maria"
}

objetoConstante.nombre = "Alejandra";
console.log(objetoConstante.nombre)   //Resultado = Alejandra
