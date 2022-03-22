let personas = new Set(["Alejandra", "Betsy", "Elizabeth"]);
personas.forEach(function(valor, Llave, setOriginal){
  console.log(valor, Llave, setOriginal);
  
  console.log(Object.is(personas, setOriginal));
})