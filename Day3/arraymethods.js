//1️- concat()

// Purpose: Combines two or more arrays into a new array.

// Returns: New array (original arrays are not changed).

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

//2-join()

// Purpose: Joins all array elements into a string.

// Returns: String with elements separated by a specified separator.

const arr3 = ['Hello', 'World'];
const str = arr3.join(' ');
console.log(str); // "Hello World"

//3-reverse()

// Purpose: Reverses the order of elements in an array.

// Returns: Reversed array (changes original array).

const arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]

//4- sort()

// Purpose: Sorts the elements of an array.

// Returns: Sorted array (changes original array).

// By default, sorts as strings.

const numbers1 = [3, 1, 4, 2];
numbers.sort();
console.log(numbers1); // [1, 2, 3, 4] (string comparison works here)

//Numeric sort example
const numbers2 = [10, 2, 5, 1];
numbers2.sort((a, b) => a - b);
console.log(number2s); // [1, 2, 5, 10]

// Method	          Returns 	        Example Use
// concat	          new               array	Combine arrays
// join	string	      Join              elements into a string
// reverse	          reversed array	Reverse order
// sort               sorted array      Sort elements (lexical or numeric)