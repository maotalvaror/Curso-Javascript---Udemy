// keys : devuelve un nuevo objeto que contiene los indices de cada elemento

const letras = ['A', 'B', 'C'];
const iteracion = letras.keys();

for( const key of iteracion ) {
  console.log(key, letras[key]);
}
