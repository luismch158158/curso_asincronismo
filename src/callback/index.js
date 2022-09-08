// Haremos ejemplos con las funciones calc

function sum(a, b) {
  return a + b;
};

function rest(a, b) {
  return a - b;
};

function mul(a, b) {
  return a * b;
};

function potencia(a, b) {
  return a**b;
};

function calc(a, b, callback) {
  return callback(a, b);
};

console.log(calc(4, 5, sum));
console.log(calc(4, 5, rest));
console.log(calc(4, 5, mul));
console.log(calc(4, 5, potencia));

// Haremos con setTimeout

setTimeout(function() {
  console.log("Hola Javascript");
}, 2000);

// Otro ejemplo

function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Oscar');