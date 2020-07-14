// function expression
const greetMe = function() {
	console.log('Hi!');
}
// function invoked
greetMe();

// function expression with parameter
const greetMe = function(name) {
	console.log(`Hi, ${name}!`);
}
// function invoked with argument
greetMe('Tony');

// passing an argument to an immediately invoked function expression (IIFE)
// this is an advanced technique behind frameworks like jQuery
(function(name) {
  console.log(`Who ${name}?`);
})('Tony')

// Exercise: refactor the first two functions using function statements (IIFEs require a function expression)