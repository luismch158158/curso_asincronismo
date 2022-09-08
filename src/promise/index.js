// Una promesa es algo que va a pasar ahora, mas tarde o nunca

const promise = new Promise(function(resolve, reject) {
  resolve('hey!');
});

// Other example

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("There is no cows on the farm");
  }
});

countCows.then((result) => {
  console.log(result);
}).catch ((error) => {
  console.log(error);
}).finally(() => {
  console.log('Finally');
})