/* Recibe multiples argumentos,
 entonces se agrupan toda esta cantidad indefinida de valores en un arreglo */
function sumar(...valores){

  let resultado = 0;
  valores.forEach(
    valor => { resultado += valor
  });
  console.log(resultado);
}

sumar(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);