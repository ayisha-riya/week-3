/*function
------------
function is a block of reusable code that perform a specific task.


1-function declaration:-fn declaration is crate a fn using the "fuction" keyword with name
2-function expression:-fn expression is fn is stored inside a variable

-function declaration 
-function expression
-anonymous function:-A function without a name.
-named function expression:-A function stored in a variable, but the function itself has a name.
-first class function:-functions can be stored, passed, or returned just like normal values.
-unary function:-A function that takes only one argument.
-pure function:-Same input gives same output and does not change anything outside.

-Defualt parameter
---------------------
a function parameter that automatically gets a preset value when no argument is given.

-Recursion
-----------
A function that calls itself again and again until it reaches a stop point.

-Rest Parameter
----------------
It allows a function to take unlimited arguments and store them in an array.

*/

function num(a,...rest){
   console.log(a,rest)
}
num("aysha",1,2,3,4)

/*
Higher-order function 
----------------------
-a function that takes another function as argument or returns a function.

First-order function
---------------------
-a function that does NOT take another function as an argument and does NOT return a function.

Callback function
------------------
-a function that is passed as an argument to another function and is called later
*/
 function html(Callback){
   console.log("learn HTML")
   Callback()
 }
 function css(){
   console.log("learn CSS")
 }
 html(css)