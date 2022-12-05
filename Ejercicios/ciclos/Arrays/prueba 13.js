(function(){
  var arr = [];

  for (let i = 0; i < 5; i++){
    arr.push([])
    for (let j = 0; j < 5; j++){
      arr[i].push(parseFloat(`${i}.${j}`))
    }
  }
  console.log(arr);
})();