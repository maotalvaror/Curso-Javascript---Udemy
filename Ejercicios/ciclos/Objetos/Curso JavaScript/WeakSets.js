/*
En un WeakSet = add(), has(), remove() 
dan error si se envia como parametro algo que no sea un objeto

No tienen forEach ni la propiedad size
*/

let set = new WeakSet();

let persona1 = {
  nombre: "Elizabeth"
};

let persona2 = {
  nombre: "Camila"
};

set.add(persona1);
set.add(persona2);
console.log(set);

set.delete(persona1);
console.log(set);