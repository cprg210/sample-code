// function statement
function greet() {
  console.log('Hi!');
  // return 'returned';
}
// function invoked
greet();

// function expression
const greetMe = function() {
	console.log('Hi Tony!');
}
// function invoked
greetMe();

// immediately invoked function expression (IIFE)
(function() {
  console.log('Who dis?');
})()

console.log(greet);
console.log(greet());
