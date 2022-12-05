(function() {
  var unir = '';
  for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
      unir += `${i},${j} `;
    }
    unir += "\n"
  }
  console.log(unir)
})();
