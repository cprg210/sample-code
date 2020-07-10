// function expression (function statements are first-class too)
var greet = function() {
	console.log('Hi!');
}
// function invoked
greet();

// functions are first-class
function logGreeting(callback) {
  // function invoked at a later time
	callback();
}
// function passed as an argument (a callback) to another function
logGreeting(greet);


// use an anonymous function expression 
logGreeting(function() {
	console.log('Hi, Tony!');
});