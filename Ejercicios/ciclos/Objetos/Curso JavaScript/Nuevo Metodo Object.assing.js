/*
"Heredar las propiedades de un objeto
o transmitirselas a otras"
*/

function Fn_Objeto(objVacio, objPropiedades){
  Object.keys(objPropiedades).forEach( function(key){
    objVacio[key] = objPropiedades[key];
  });
  return objVacio;
}

var objVacio = {};
var objPropiedades = {
  nombre: "Elizabeth",

}

console.log(Fn_Objeto( objVacio, objPropiedades ));

//________________________________________________________

function Fn_Objeto2(objVacio2, objPropiedades2){
  Object.keys(objPropiedades2).forEach( function(key){
    objVacio2[key] = objPropiedades2[key];
  });
  return objVacio2;
}

var objVacio2 = {};
var objPropiedades2 = {
  get nombre(){
    return  "María"
  }
}

console.log(Object.assign(objVacio2, objPropiedades2));
console.log(objPropiedades2);