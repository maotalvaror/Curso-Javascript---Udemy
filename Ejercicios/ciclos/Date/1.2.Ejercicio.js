function ObtenerFecha(fecha){
  var dividir_ = fecha.split('/');
  var revertir = dividir_.reverse();
  console.log(revertir);
  var unir = revertir.join('/');
  console.log(unir);
}

function ObtenerFecha_(fecha_){
  var dividir_ = fecha_.split('/');
  var [dia, mes, anio] = dividir_;
  var concatenar = `${anio}/${mes}/${dia}`;
  console.log(concatenar);
}

function ObtenerFecha_2(fecha_){
  var dividir_ = fecha_.split('/');
  console.log(dividir_[dividir_.length - 1]);
}

function ObtenerFecha_3(fecha_){
  var dividir_ = fecha_.split('/');
  var [,,anio] = dividir_;
  console.log(anio);
}