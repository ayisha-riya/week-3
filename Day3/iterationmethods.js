/*
Iteration method
------------------
iteration methods are special array functions that allow you to loop through (iterate over) each element
of an array without writing a manual for-loop.

syntax:-Three Arguments
       element,index,array
  
iteration methods
----------------
-forEach() – loops through each element (no return value).
- map() – creates a new array by transforming each element.
- filter() – creates a new array with elements that pass a condition.
- reduce() – reduces all elements into a single value (sum, max, etc).
- find() – returns the first element that matches a condition.
- findIndex() – returns the index of the first matching element.
- some() – returns true if at least one element passes the test.
- every() – returns true if all elements pass the test.
*/
//1-forEach()
//------------

const method1=[10,20,30]
 method1.forEach((v,i,a)=>{
      console.log(a)
 })

 //2️-map()

// Purpose: Creates a new array by applying a function to each element.

// Returns: New array of same length.

const numbers1 = [1, 2, 3];
const doubled = numberss.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

//3-filter()

// Purpose: Creates a new array containing only elements that pass a test.

const numbers2 = [1, 2, 3, 4];
const even = numbers2.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

//4️-reduce()

// Purpose: Reduces array to a single value by repeatedly applying a function.

const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

//5️-some()

// Purpose: Checks if any element passes a test.

// Returns: true or false.

const numbers4 = [1, 2, 3];
console.log(numbers4.some(num => num > 2)); // true

//6-every()

// Purpose: Checks if all elements pass a test.

// Returns: true or false.

const numbers5 = [2, 4, 6];
console.log(numbers5.every(num => num % 2 === 0)); // true

//7️-find()

// Purpose: Returns the first element that passes a test.

const numbers6 = [1, 2, 3, 4];
const firstEven = numbers6.find(num => num % 2 === 0);
console.log(firstEven); // 2

//8️-findIndex()

// Purpose: Returns the index of the first element that passes a test.

const numbers7 = [1, 2, 3, 4];
const index = numbers7.findIndex(num => num % 2 === 0);
console.log(index); // 1

//9-for…of loop

// Purpose: Iterates over array values (simpler than for loop).

const numbers = [1, 2, 3];
for (const num of numbers) {
  console.log(num);
}