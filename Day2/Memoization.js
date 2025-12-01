/*
Memoization 
-----------
Memoization is a technique where you store the results of a function call so that if the same inputs occur again, 
you can return the stored result instead of recalculating.
*/
let cache = {};

function square(n) {
  if (cache[n]) return cache[n]; 

  console.log("Calculating...");
  cache[n] = n * n;               
  return cache[n];
}

console.log(square(4)); 
console.log(square(4));