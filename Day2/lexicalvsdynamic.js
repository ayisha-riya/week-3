/*Lexical Scope vs Dynamic Scope

Lexical Scope (JavaScript uses this)
--------------------------------------
Definition:
Scope is determined by where the function is written in the code (its physical location).

Meaning:
Inner functions can access variables from the outer function where they are defined, not where they are called.*/

 /*Example (Lexical Scope)
 ----------------------*/
let a = 10;
function outer() {
 let b = 20;

  function inner() {
    console.log(a, b);
  }
  inner();
}

outer(); // 10 20

/*'
Dynamic Scope (JS does NOT use this)
------------------------------------------

Definition:
Scope is determined by where the function is called, not where it was defined.

This means variables come from the caller’s scope.

Example (Dynamic Scope Concept — NOT JS)
-
If JS had dynamic scope:*/

var c = 1;

function foo() {
  console.log(c);
}

function bar() {
  var a = 2;
  function baz() {
    foo(); // would print 2 in dynamic scope
  }
  baz();
}

bar();


//But JavaScript is NOT dynamically scoped, so this never happens in JS.


/*
Key Difference in One Line
-----------------------------
Lexical Scope: depends on where the function is written.
Dynamic Scope: depends on where the function is called.
*/
