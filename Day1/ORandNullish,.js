/*

|| (Logical OR)

Returns the right-hand side if the left-hand side is falsy.

Falsy values in JS: false, 0, "" (empty string), null, undefined, NaN.

*/ 
let a = 0;
let b = a || 10;
console.log(b); 

/*
?? (Nullish Coalescing)

Returns the right-hand side only if the left-hand side is null or undefined.

Unlike ||, 0, "", false are not considered nullish.
*/
let c = 0;
let d = c ?? 10;
console.log(d); 
