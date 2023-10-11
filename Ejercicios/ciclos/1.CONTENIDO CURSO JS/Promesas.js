/* var numeroDigitado = parseInt(prompt('Digite un numero'));
var min = parseInt(prompt('Digite el minimo'));
var max = parseInt(prompt('Digite el maximo'));
var numRandom = ((min, max) => {
  return Math.round(Math.random() * (max - min) + min);
})(min, max)

var promesa = new Promise((resolve, reject) => {
  if( numeroDigitado ==  numRandom ){
    resolve('Correcto!');
  } else {
    reject('Incorrecto...');
  }
})

promesa
  .then(s => {
    console.log(s)
  } )
  .catch(e => {
    console.error(e)
  })
*/

/*var crearNumeros = (cantidad) => {
  return new Promise ((resolve, reject) => {
    var arr = [];
    for( let i = 1; i <= cantidad; i++){
      arr.push(i);
    }
  
    if(arr.length) {
      resolve(arr);
    } else {
      reject([]);
    }
  })
} 


crearNumeros(5)
  .then(s => {
    console.log(s)
  })
  .catch(e => {
    console.error(e)
  })
*/

/*error : 
{
  ok: false,
  datos: [],
  descripcion: 'error no se pueden obtener mas de 6 datos'
}

ok:
{
  ok: true,
  datos: [
    { nombre: "A", id: 1},
    { nombre: "A", id: 2},
    { nombre: "A", id: 3},
  ],
  descripcion: 'Los datos se obtuvieron correctamente'
}

*/

/*
function ObtenerDatos(){
  var numeroDatos = prompt('Digite la cantidad de datos');
  return new Promise((resolve, reject) => {
  
    if( numeroDatos <= 5 ){
      var o = [];
      for(let i = 1; i <= numeroDatos; i++){
        o.push({nombre: 'A', id:i});
      }

      var acierto = {
        ok: true,
        datos: o,
        descripcion: 'Los datos se obtuvieron correctamente'
      }
      resolve(acierto);

    } else {
      var error = {
        ok: false,
        datos: [],
        descripcion: 'Error no se pueden obtener más de 6 datos'
      }  
      reject(error)
    }
  })
}


ObtenerDatos()
.then(s => {
  console.log(s)
})
.catch(e => {
  console.error(e)
})
*/