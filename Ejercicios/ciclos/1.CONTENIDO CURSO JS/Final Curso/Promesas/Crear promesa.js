// CREAR UNA PROMESA :
/*
- Se inicia escribiendo new Promise.
- Se define la función "executor".
- Y en el interior se utiliza una operación asincrona.
- Se utiliza la funcion setTimeout.
- La funcion setTimeout: 
    lo que hace es llamar a un callback,
    luego de que han transcurrido X milisegundos,
    (en este caso 3000 milisegundos),
    ya que esto se cumple en 3 segundos.
- Luego de que pasan 3 segundos se llama el callback,
- Cuando se cumpla, se llama a la funcion resolve,
- Luego se resuelve la promesa con un valor, ('Hola').
- De esta manera se utiliza una promesa en vez de callbacks.
-HASTA ESTE PUNTO SE ESTA CREANDO LA PROMESA,
-TODAVIA NO SE ESTA USANDO POR QUE FALTA EL METODO (then).
AUNQUE AUN NO SE ESTA USANDO LA PROMESA SE LLAMA LA FUNCION EXECUTOR.

SIEMPRE SE LLAMA A THEN DESDE UNA PROMESA
*/

const myPromise = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve('Hola');
  }, 3000);
});

myPromise.then(function(value){
  console.log(value);
});