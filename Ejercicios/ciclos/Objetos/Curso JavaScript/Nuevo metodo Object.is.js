//Comparador de igualdad == / ===
console.log("==== +0 vs -0 ====");
console.log(+0 == -0) // true
console.log(+0 === -0) // true

console.log("==== NaN vs NaN ====");
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log("==== 5 vs 5 ====");
console.log("==== 5 vs '5' ====");
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(5 === 5); // true
console.log(5 === "5"); // false

// comparacion de Object.is
console.log("==== +0 vs -0 con Object.is ====");
console.log( Object.is(+0, -0) ) // false

console.log("==== NaN vs NaN con Object.is ====");
console.log( Object.is(NaN, NaN) ); // true


console.log("==== 5 vs 5 con Object.is ====");
console.log( Object.is(5, 5) ) // true
console.log( Object.is(5, "5") ) // false

