/* 
//uso de variables tipo de comentarios 
var nombre ='Alejandra';
console.log(nombre);
console.log(typeof(nombre));

var edad =13;
console.log(edad);
console.log(typeof(edad));

var sueldo =199.9;
console.log(sueldo);
console.log(typeof(sueldo));

var TieneTrabajo = false;
 console.log(TieneTrabajo);
 console.log(typeof(TieneTrabajo));
 0


 //operadores matemáticos +, -, * y / 
 
 var edadDeYeison, edadDeElizabeth, DiferenciaDeEdad;
 var sumaEdades, yearYeison, yearElizabeth, yearActual;

 edadDeYeison =32;
 edadDeElizabeth=52;
 yearActual=2021;
 
 DiferenciaDeEdad= edadDeElizabeth-edadDeYeison;
 sumaEdades=edadDeElizabeth+edadDeYeison;


 yearElizabeth=yearActual-edadDeElizabeth;
 yearYeison=yearActual-edadDeYeison;

console.log('Diferencia de edad entre elizabeth y yeison? :'+ DiferenciaDeEdad);
console.log('Suma de edad entre elizabeth y yeison? : '+ sumaEdades);
console.log('En que year nacio elizabeth? :'+ yearElizabeth);
console.log('En que year na-cio yeison? :'+ yearYeison);
console.log(yearActual*2); 
console.log(yearActual/2) 



var edadDeYeison, edadDeElizabeth, DiferenciaDeEdad;


edadDeYeison =32;
edadDeElizabeth=52;

var mayorElizabeth = edadDeElizabeth >edadDeYeison
console.log(mayorElizabeth) 
//Operadores Logicos, Unarios, y de Asignación.
edadDeElizabeth++;
console.log(edadDeElizabeth);

edadDeYeison--;
console.log(edadDeYeison);



// Operadores
// +=, -=, *=, /=, %=
var a = 2;
var b = 4;
a += b;

//suma
var a = 11;
var b = 5;
var c = a + b; 
console.log(c);

a = a+b
console.log(a)
//resta
var a=12;
var b=10; 
var c=a-b;
console.log(c) 

//Multiplicación

var a=51;
var b=31;
var c=a*b;
console.log(c)

//División
var a=1581;
var b=31;
var c=a/b;
console.log(c)
 
//modulo
var a = 11;
var b = 7;
var c = a % b;
console.log(c)

//muestra el residuo o resto de una division*/

/*Sentencia if... else
var nombre ='Alejandra';
var estudia = false;

if (estudia == true){
console.log(nombre + ' si esta estudiando');
} else {
console.log(nombre + ' no estudia. ')
}
*/

// if (true) {
//   // hacer paso 1
// } else if (c) {
//    // hacer paso 2
// } else if (c) {
//    // hacer paso 3
// } else {
//    // hacer paso 4
// }


// var nombre = 'Elizabeth';
//var edad = 51; edad <= a 12, es una niña

//edad >= 13 <18, es una adolecente
//edad >= 18 <59, es adulta
//edad >= 60 es una señora de tercera edad 
/*if (edad < 12){
console.log(nombre + ' es una niña ');
} else if((edad >=  13) && (edad <= 18)){
console.log(nombre+' es adolecente');
} else if(( edad > 18)&&(edad < 59)){
console.log(nombre + ' es adulta');
} else{
  console.log(nombre +' es una señora de tercera edad');
} 
*/



/*Sentencia Switch  */

/*

 var mes=4;
 switch(mes){
    case 1:
   console.log('Enero');
   break;

   case 2:
    console.log('Febrero');
    break;

    case 3:
      console.log('Marzo');
      break;

      case 5:
        console.log('Mayo')
        break; 
  
      
    case 6:
   console.log('Junio');
   break;

    case 7:
   console.log('Julio');
    break;

    case 8:
   console.log('Agosto');
    break;

    case 9:
   console.log('Septiembre');
    break;

    case 10:
   console.log('Octubre');
    break;

    case 12:
   console.log('Diciembre');
    break;

    default:
      console.log('Mes no encontrado')
  }

*/

// for(var i=10; i>=1; i--){
// console.log(i);
// }




// Sentencia while... 

var i = 1;
while(i <= 10){
  console.log(i);
  i++;
}

// Sentencia do while...


  var i = 1;
  do{
    console.log(i);
    i++;
  }while(i <= 10);


  