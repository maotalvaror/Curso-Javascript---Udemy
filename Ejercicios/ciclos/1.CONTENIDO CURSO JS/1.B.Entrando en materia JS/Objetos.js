var personaA = {name: "Jose", age:"48", "favorite lenguage": "HTML"};
var equipoFutbol = {name: "Millos", leader: personaA};

console.log( personaA.name );
console.log( personaA.age );
console.log( personaA['favorite lenguage'] );
console.log( equipoFutbol.name );
console.log( equipoFutbol.leader['favorite lenguage'] );
console.log( equipoFutbol.leader.name );