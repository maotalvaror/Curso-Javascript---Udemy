/*
Acceder a los metodos de los objetos,
siendo heredados de otro

la palabra super : es usada 
para acceder y llamar funciones del padre,
de un objeto.
*/

let persona = {
  saludar(){
    return "Hola";
  }
};

let amigo = {
  saludar(){
    return super.saludar() + ", Saludos!!!";
  }
};

Object.setPrototypeOf( amigo, persona );
console.log( amigo.saludar() );