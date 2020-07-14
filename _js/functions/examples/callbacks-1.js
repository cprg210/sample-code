// Callback: a function passed to another function to be invoked at a later time.

const greet = function(callback) {
  // Pretend we're retrieving a name from the database...
  const name = 'Tony';

  callback(name);
}

const casual = function(name) {
  console.log(`Hi ${name}!`);
}
const formal = function(name) {
  console.log(`Hello, Mr. ${name}.`);
}

greet(casual);

greet(formal);

greet(function(name) {
  console.log(`This is my on-the-fly greeting. Doesn't even have a variable name (btw, ${name} was here)`);
});
