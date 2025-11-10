  //Scope
//----------
// 1. Global Scope

// If you make a variable outside any function or block
let name = "Aysha"; // global

function greet() {
  console.log(name); // can use it here
}

console.log(name);

// 2. Function Scope

// If you make a variable inside a function,
function sayHi() {
  let message = "Hello!";
  console.log(message); // works
}

sayHi();

// 3. Block Scope

// If you make a variable with let or const inside { } (like in if, for),
if (true) {
  let x = 10;
  const y = 20;
  console.log(x, y); // works
}
