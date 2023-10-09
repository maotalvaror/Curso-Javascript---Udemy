/*
El constructor de promesas 
espera una función que va a tener: 
dos argumentos resolve y reject.
*/
// new Promise(function(resolve, reject){ /*...*/ });

// new Promise(/* espera 1 función, conocida como "executor" */);
// "executor" recibe 2 argumentos ( resolve, reject ) para cambiar el estado de la promesa.

//Primera Promesa
const myPromise = new Promise(function(resolve){
  setTimeout(function(){
    resolve('Primera Promesa');
  }, 5000);
})
myPromise.then(function(value){
  console.log('Valor de la promesa: ',value);
  console.log('Estado de la promesa despues de mostrar el valor: ',myPromise);
})

console.log('Estado de la promesa: ',myPromise);

//Segunda Promesa
const myPromise2 = new Promise((resolve) => {
  setTimeout(() => resolve('Segunda Promesa'), 5000)
});

myPromise2.then(value => console.log('Promesa exitosa: ',value));
console.log(myPromise2);

// Crear una promesa para contar los numeros del 1 al 3 dejando un segundo de intervalo

// sin promesa
setTimeout(() => {
  console.log('Sin promesa ',1);
  setTimeout(() => {
    console.log('Sin promesa ',2);
    setTimeout(() => {
      console.log('Sin promesa ',3);
    }, 1000);
  }, 1000);
}, 1000);

// con funcion
function unSegDespues(otraFunc){
  setTimeout(otraFunc, 1000);
}
unSegDespues(() => {
  console.log('Funcion un segundo despues ',1);
  unSegDespues(() => {
    console.log('Funcion un segundo despues ',2);
    unSegDespues(() => {
      console.log('Funcion un segundo despues ',3);
    })
  })
})

// con promesa
// function esperar1Seg() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000);
//   });
// }

const esperar1Seg = () => new Promise(resolve => setTimeout(resolve, 1000));
esperar1Seg()
.then(() => {
  console.log('Con promesa ',1);
  return esperar1Seg();
})
.then(() => {
  console.log('Con promesa ',2);
  return esperar1Seg();
})
.then(() => {
  console.log('Con promesa ',3);
  return esperar1Seg();
})

//--------------------------------------------------------

const printIn1Sec = (function(){
  function setTimeoutPromise(timeout){
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  function printIn1Sec(value, promise){
    const newPromise = promise
    .then(() => setTimeoutPromise(1000))
    .then(() => console.log(value));

    return {
      printIn1Sec(value) {
        return printIn1Sec(value, newPromise);
    },
  };
}
  return value => printIn1Sec(value, Promise.resolve());
}());

printIn1Sec('printIn1Sec: 1')
  .printIn1Sec('printIn1Sec: 2')
  .printIn1Sec('printIn1Sec: 3');