class Perro {
  constructor(nombre, edad, raza) {
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
  }
  ladrar() {
    console.log(`El perro ${this.nombre} ha ladrado.`);
  }
};

let perro1 = new Perro('Gru', 3, 'Rottweiler');
perro1.ladrar();