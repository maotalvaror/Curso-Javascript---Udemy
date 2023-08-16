class Mascota {
  constructor(nombre, edad, raza, tipo){
  this.nombre = nombre;
  this.edad = edad;
  this.raza = raza;
  this.tipo = tipo; // Perro o Pato
  }
  verInfo(){
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Raza: ${this.raza}`);
    console.log(`Tipo de mascota: ${this.tipo}`);
  }
}

class Perro extends Mascota{
  constructor(nombre, edad, raza, volumenLadrido){
    super(nombre, edad, raza, 'Perro');
    this.volumenLadrido = volumenLadrido;
  }
  ladrar() {
  console.log(`El perro ${this.nombre} ha ladrado con volumen ${this.volumenLadrido}`);
  }
}

class Pato extends Mascota{
  constructor(nombre, edad, raza){
    super(nombre, edad, raza, 'Pato');
  }
  graznido() {
    console.log(`El pato ${this.nombre} ha graznido`);
  }
}

let perro1 = new Perro('Gru', 3, 'Dalmata', 'muy fuerte');
perro1.ladrar();
perro1.verInfo();

let pato1 = new Pato('Donald', 4, 'Munchkin');
pato1.graznido();
pato1.verInfo();