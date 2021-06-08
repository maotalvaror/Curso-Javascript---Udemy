const aprendiendo = function(tecnologia){
  console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo('JavaScript')

//Si se le pasa un solo parametro es opcional el parentesis, si se le pasa 2 o más ya seria obligatorio 
const aprendiendo2 = (tecnologia) => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo2('JavaScript'))