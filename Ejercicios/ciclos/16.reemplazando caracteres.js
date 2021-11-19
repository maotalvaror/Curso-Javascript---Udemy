/*
Entrada =

"din"
"recede"
"Success"
"(( @"

Salida =

=>  "((("
=>  "()()()"
=>  ")())())"
=>  "))((" 

*/

function llamarFuncion(Palabra) {
  Palabra = Palabra.toLowerCase()
  var cadena = ''
  for (let i = 0; i < Palabra.length; i++) { 
    let conteo = 0;
    for (let j = 0; j < Palabra.length; j++) {

      //palabrasConcatenadas =palabrasConcatenadas+' '+palabras;

      if (Palabra[i] == Palabra[j])  
      conteo++;
    } 
    
    if (conteo > 1) {     
      cadena += ")";  
    } else {              
      cadena += "(";  
    } 
  }

  console.log(cadena)
}