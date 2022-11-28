// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.map(function(numero){
//   return numero * 2;
// }).forEach(function(e, i){
//   console.log(`${arr[i]} x 2 = ${e}`);
// });

//-------------------------------------------

function fn_boolean(){
  var cantidad = prompt('Digite la cantidad de numeros que desea ingresar');
  var nuevo_arr = [];
  var arr_boolean = [];

  for (let i = 0; i < cantidad; i++){
    var numero = parseInt(prompt('Digite los numeros'));
    nuevo_arr.push(numero);

    if(nuevo_arr[i] % 2 == 0){
      var par = "true";
      arr_boolean.push(par);
    } else {
        var impar = "false";
        arr_boolean.push(impar);
    }
  }
  console.log(arr_boolean);
}

function mejora_1(){
  var cantidad = prompt('Digite la cantidad de numeros que desea ingresar');
  var arr_boolean = [];

  for (let i = 0; i < cantidad; i++){
    var numero = parseInt(prompt('Digite los numeros'));

    if(numero % 2 == 0){
      arr_boolean.push(true);
    } else {
      arr_boolean.push(false);
    }
  }
  console.log(arr_boolean);
}

function mejora_2(){
  var cantidad = prompt('Digite la cantidad de numeros que desea ingresar');
  var arr_boolean = [];

  for (let i = 0; i < cantidad; i++){
    var numero = parseInt(prompt('Digite los numeros'));
    arr_boolean.push(numero % 2 == 0);
  }
  console.log(arr_boolean);
}

mejora_2();