/*
Function Declaration
-----------------------
A function declaration is a way to define a function using the function keyword.
*/
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); 
/*
Function Expression
--------------------
A function expression is when you create a function and assign it to a variable.
*/
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 3)); 
/*
Arrow Function 
----------------
An arrow function is a shorter, modern way to write functions using the => (arrow) syntax.

*/
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3)); 

/*
Anonymous Function 
-------------------
An anonymous function is a function without a name.
 */
const greet = function() {
  console.log("Hi");
};
greet()
/*
Callback Function 
------------------
A callback function is a function that you pass as an argument to another function, and it gets executed later.
*/
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Aysha");
}

processUser(greet); 

/*
Higher-Order Function (HOF)
---------------------------
-A higher-order function is a function that accepts another function as an argument or returns a function.

A Higher-Order Function is a function that does one or both of these:

-Takes another function as an argument, or

-Returns another function
*/
function greet() {
  console.log("Hello!");
}

function callMe(fn) {
  fn(); // calling the callback
}

callMe(greet);
/*
First-Class Functin
---------------------
-JavaScript treats functions as first-class citizens.
-Functions in JavaScript can be treated like values.

* Store functions in variables
* Pass functions as arguments
* Return functions from other functions
* Store functions in arrays or objects
 */

//1. Store function in a variable
const greet = function() {
  console.log("Hello!");
};

//2. Pass function as an argument (callback)
function sayHi() {
  console.log("Hi");
}

function callMe(fn) {
  fn();
}

callMe(sayHi);

//3. Return a function
function outer() {
  return function() {
    console.log("Inside function");
  };
}
/*
Factory Function 
-----------------
A factory function is a function that creates and returns an object.
It is used to produce multiple similar objects without using classes or constructors
*/
function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      console.log("Hello " + name);
    }
  };
}
/*
Generator Function
-------------------
A generator function is a special function that can pause and resume its execution using the yield keyword.

You define it using function* (a star).
 */
//Syntax
function* generatorName() {
  yield value1;
  yield value2;
  // ...
}
//Example:-
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numbers();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

/*Function Currying in JavaScript

Currying means converting a function that takes multiple arguments into a series of functions that take one argument at a time.*/

// Normal Function
function add(a, b, c) {
  return a + b + c;
}

// Curried Version
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // 6

/*
Named Function Expression
-------------------------
A function expression that has its own internal name.
*/
const greet = function sayHello() {
  console.log("Hello");
};

/*
Duplicate Function Names 
-------------------------
If two functions have the same name in the same scope,
the last one overwrites the previous one.

*/
function add() { return 1; }
function add() { return 2; }

console.log(add()); 