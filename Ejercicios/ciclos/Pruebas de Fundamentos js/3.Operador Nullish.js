//Operador Nullish = ??

/*
si (a) esta definida sera (a)
si (a) no está definida sera (b)
*/

let VariableIndefinida;
alert(VariableIndefinida ?? 'Definido'); 
// Mostrara (Definido) ya que no tiene nada (VariableIndefinida)

let VariableDefinida = 'Variable Definida';
alert(VariableDefinida ?? 'Definido'); 


//  || devuelve el primer valor verdadero que encuentre, ?? devuelve el primer valor definido.

let plata = 0; // altura cero

alert(plata || 5); // 5 por que plata (0) tiene valor falso
alert(plata ?? 100); // Resultado 0 ya que plata esta definida 