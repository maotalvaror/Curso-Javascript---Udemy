// La primera posicion en los templates es vacia 

function etiqueta(A, ...B) {
  let resultado = "";

  console.log(A); //Array   "", " lapices cuestan ", " pesos" 
  console.log(B) //variables (5, 50)

  for(let i = 0; i < B.length; i++) {
    resultado += A[i];
    resultado += B[i];
  }

  return resultado;
}

let unidades = 5, 
    costo = 10;

let mensaje = etiqueta`${unidades} lapices cuestan ${unidades * costo} pesos`;
console.log( mensaje );