/*
La primera restriccion:
1.Solo puede existir un parametro rest en la fn
2.El parametro rest debe ir siempre como ultimo parametro en la fn
*/

function fn(...A, ...B) {
//Error ya que solo puede existir un solo parametro rest
}

function fn2(...C, B) {
//Error ya que el parametro rest debe ir de ultimo
}