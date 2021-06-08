//ConCat: Nos permite unir estos dos arreglos o hasta mas
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2= ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const meses3= meses.concat(meses2)
console.log(meses3)

const Materias = ['Español', 'Matematicas', 'Artes']
const Materias2= ['Danzas', 'Ingles', 'Biologia']
const Materias3= ['Sociales', 'Orientacion', 'Convivencia']
const resultado= Materias.concat(Materias2, Materias3)
console.log(resultado)

//Spread operator:Copia de meses y copia de meses2 para unirlos
const resultado2 = [...meses, ...meses2]
console.log(resultado2)

//.concat: unir los 'Paises'
const paises = ['Colombia', 'España', 'Ecuador', 'Venezuela'];
const paises2= ['Argentina', 'Honduras', 'Rusia', 'Italia'];
const paises3= paises.concat(paises2)
console.log(paises3)

//Spread operator
const resultadoPaises = [...paises,...paises2]
console.log(resultadoPaises)