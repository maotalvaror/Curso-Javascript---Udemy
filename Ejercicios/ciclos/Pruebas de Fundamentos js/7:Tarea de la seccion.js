/*
Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function minOmax(a,b) {
  if (a < b){
    return a;
  } else {
    return b;
  }
}

/*
max(7, 3) == 7
min(5, 98) == 98
min(-23, 344) == 344
*/

function max(a,b) {
  if (a > b){
    return a;
  } else {
    return b;
  }
}
