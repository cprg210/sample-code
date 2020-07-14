const myString = require('./string');
const myNumber = require('./number');
const myAnimals = require('./animals');

console.log(myString);
console.log(myNumber);
console.log(myAnimals);

const oneAnimal = myAnimals.find(function(item) {
  return item.id > 400;
});

const twoAnimals = myAnimals.filter(function(item) {
  return item.id > 400;
});

console.log(oneAnimal);
console.log(twoAnimals);