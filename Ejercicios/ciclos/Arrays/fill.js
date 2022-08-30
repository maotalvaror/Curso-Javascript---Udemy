//El primer parametro que recibe es (un valor por el cual se va a modificar)
//El segundo parametro que recibe es (La primera posicion en donde se va a cambiar)
//El tercer parametro que recibe es ( Sin incluir la posicion que se digite )
let array = [true, false, [[]], {}, 1, 2, 3];
let cambiar_array = array.fill("Array", 2, 5);
console.log(cambiar_array);

// Array(7) [ true, false, (1) […], {}, 1, 2, 3 ]               <= Original
// Array(7) [ true, false, "Array", "Array", "Array", 2, 3 ]    <= Modificado