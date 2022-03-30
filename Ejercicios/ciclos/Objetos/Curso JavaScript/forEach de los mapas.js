let mapa = new Map([ ["nombre", "Alejandra"], ["edad", "15"] ]);

mapa.forEach(function(Valor, Llave, MapaOriginal){
  console.log(Llave, Valor, MapaOriginal)
})

console.log("------Funcion en flecha------")

mapa.forEach((Valor, Llave) => console.log(Llave, Valor))