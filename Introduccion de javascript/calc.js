const botonNumeros = document.getElementsByName('data-number');//getElementsByName:que seleccionaría todos los elementos basándose en el atributo name
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.etElementById('result');//getElementsById:permite como su nombre indica seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado
opeActual = ''; // variable operacion actual
opeAnterior = '';//variable operacion anterior
var operacion = undefined;//variable de la operacion indefinida

botonNumeros.forEach(function(boton){ //forEach:sirve para moverse por los elementos de una estructra de datos como podría ser un vector y realizar acciones para cada una de los elementos
  boton.addEventListener('click', function(){//para que se pueda dar click en cada uno de los botones
    agregarNumero(boton.innerText);
  })
});

botonOpera.forEach(function(boton){//los botones de operacion Esto solamente me deja darle click
boton.addEventListener('click', function(){
  selectOperacion(boton.innerText);
  })
});

botonIgual.addEventListener('click', function(){//que se pueda dar click al boton de igual 
 calcular();
 actualizarDisplay();
});

botonDelete.addEventListener('click', function(){//boton para borrar *click
  clear();
  actualizarDisplay();
});

function selectOperacion(op){ //que si se cumple opeactual retorne la anterior depende si es igual a vacio
  if(opeActual == '') return;
  if(opeAnterior !== ''){
    calcular()
  }
  operacion = op.toString();
  opeAnterior = opeActual;
  opeActual= '';
}
function calcular(){
  var calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat (opeActual);
  if(isNaN(anterior) || isNaN(actual)) return;
  switch(operacion){
    
    case '+': //si el caso es + sume
    calculo = anterior + actual;
    break;
      
    case '-': //si el caso es - reste
    calculo = anterior - actual;
    break;

    case 'x': //si el caso es x multiplique
    calculo = anterior * actual;
    break;

    case '/': //si el caso es / Divide
    calculo = anterior / actual;
    break;

    default:
    return; 
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num){
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}
function clear(){//funcion para poder darle click y borrar 
  opeActual = '';
  opeAnterior = '';
  operacion = undefined;
}

function actualizarDisplay(){
  result.value = opeActual;
}
clear();
