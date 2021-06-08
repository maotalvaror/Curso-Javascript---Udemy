//como se comunican las funciones 
iniciarApp();

function iniciarApp(){ //la primera funcion llama a la segunda 
  console.log('Iniciando App...');
  segundaFuncion();//<=
}

function segundaFuncion(){ //la segunda funcion llamara a la tercera 
  console.log('Desde la función...');
  usuarioAutenticado();//<=
}

function usuarioAutenticado(){
  console.log('Autenticando usuario... espere...');
  console.log('Usuario autenticado exitosamente,');
}