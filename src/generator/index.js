function* gen() {
  yield 1;
  yield 2;
  yield 3;
}


const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

// ---------------------------------------

function* iterable(array) {
  for (let value of array) {
    yield value;
  }
}

let arr =  ["oscar", "omar", "ana", "lucia", "juan"]

const it = iterable(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(it.next().value);
}
