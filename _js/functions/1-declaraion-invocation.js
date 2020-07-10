// function statement
function greet() {
	console.log('Hi!');
}
// function invoked
greet();

// function expression
var greetMe = function() {
	console.log('Hi Tony!');
}
// function invoked
greetMe();

// immediately invoked function expression (IIFE)
(function() {
  console.log('Who dis?');
})()