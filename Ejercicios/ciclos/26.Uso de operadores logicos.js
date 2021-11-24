/* 
fn() => []
fn([1, 2, 3]) => [2, 3, 4]
*/

function llamarFuncion(array) {
  // array = array || [];

  // if (array.length){
  //   return array.map(num => num + 1)
  // }

  // return array;

  // return array ? array.map(num => num + 1) : [];

  array = array || []
  var nuevo_arr = [];
  
  for (let i = 0; i < array.length; i++) {
    nuevo_arr.push(array[i] + 1)      
  }

  return nuevo_arr;
}