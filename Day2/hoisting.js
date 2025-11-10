/*
Hoisting
-----------
JavaScript moves variable and function declarations to the top of their scope before the code runs.
*/
sayHi(); 

function sayHi() {
  console.log("Hello");
}
/*
1.var

Declaration is hoisted

Value becomes undefined until assigned

Can use before writing, but value will be undefined

2.let & const

Hoisted but blocked by Temporal Dead Zone

Cannot use before declaration

If used early → ReferenceError

3.Function Declaration

Fully hoisted

Can call function even before writing it

4.Function Expression & Arrow Function

Depends on var/let/const

If created with var → hoisted but undefined

If created with let/const → error if called early
*/
//1.var
console.log(a);  
var a = 10;
console.log(a); 

//2. let Hoisting 
console.log(b);  
let b = 20;


//3. const Hoisting 
console.log(c);   
const c = 30;

//4. Function Declaration Hoisting
test(); 

function test() {
  console.log("Hello from function!");
}

//5. Function Expression (var)
console.log(sum);
var sum = function() {
  return 5 + 5;
};