// function statement
function a() {
  // `name` is available everywhere
  console.log(outside); // 'global'
  
  // This new value is not available outside of this function
  let inside = 'function scope';
  
  console.log(inside); // 'function scope'
}

let outside = 'global';

a();

// Error: inside is not defined
console.log(inside);
