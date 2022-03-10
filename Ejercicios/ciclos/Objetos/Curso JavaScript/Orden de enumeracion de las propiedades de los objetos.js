var objeto = {
  c: 1,
  0: 1,
  x: 1,
  15: 1,
  r: 1,
  3: 1,
  b: 1
};

objeto.d = 1;
objeto["2"] = 1;
objeto["a"] = 1;

//Numeros agregados 0, 2, 3, 15
//letras de manera que fueron creadas = c, x, r, b, d, a

/*
Object.getownPropertyNames =
devuelve un array con todas las propiedades
encontradas en un objeto
*/
console.log(Object.getOwnPropertyNames(objeto).join(", "))