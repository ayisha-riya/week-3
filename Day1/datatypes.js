  //javascript data types
//--------------------------
//2 categories of data types:
//   1.primitive Data Types
//   2.Non-primitive Data types 

//1.primitive Data Types
//-primitive means means "single" or "basic"
//-These hold one value at a time,and are stored directely in stack memory.
//-these are stored in stack memory

//1. String
//Represents a sequence of characters (text).
let name = "Aysha";
//2. Number
//Represents both integer and floating-point numbers.
let age = 20;
//3. BigInt
//Used for very large integers that can’t be represented by the Number type.
let bigNumber = 1234567890123456789012345678901234567890n;
//4. Boolean
//Represents logical values: true or false.
let isLoggedIn = true;
let hasAccess = false;
//5. Undefined
//A variable that has been declared but not assigned a value.
let score;
console.log(score)
//6. Null
//Represents no value or empty value (intentionally set).
let data = null;
//7. Symbol
//Introduced in ES6 — used to create unique identifiers.
let id = Symbol("id");
let anotherId = Symbol("id");
console.log(id === anotherId); 