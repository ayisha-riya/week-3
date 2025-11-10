// JavaScript Operators
// a) Arithmetic Operators
// let a = 10, b = 3;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.3333
// console.log(a % b); // 1 (remainder)
// console.log(a ** b); // 1000 (power)

// b) Comparison Operators
// console.log(a > b);  // true
// console.log(a < b);  // false
// console.log(a >= 10); // true
// console.log(a <= 10); // true
// console.log(a == "10"); // true
// console.log(a === 10); // true

// c) Logical Operators
// let x = true, y = false;
// console.log(x && y); // false
// console.log(x || y); // true
// console.log(!x);     // false

// d) Ternary Operator
// let age = 18;
// let status = (age >= 18) ? "Adult" : "Minor";
// console.log(status); // "Adult"

// e) typeof Operator

// Returns the type of a variable.

// console.log(typeof 123);        // "number"
// console.log(typeof "hello");    // "string"
// console.log(typeof true);       // "boolean"
// console.log(typeof {});         // "object"
// console.log(typeof null);       // "object" (quirk)

// f) Nullish Coalescing Operator (??)

// Returns the right-hand side value only if the left is null or undefined.

// let name;
// console.log(name ?? "Guest"); // "Guest"

// g) Difference between || and ??

// || → returns right value if left is falsy (0, "", null, undefined, false)

// ?? → returns right value if left is null or undefined only

// let x = 0;
// console.log(x || 10); // 10
// console.log(x ?? 10); // 0

// h) Difference between == and ===

// == → checks value only (type coercion)

// === → checks value + type (strict equality)

// console.log(5 == "5");  // true
// console.log(5 === "5"); // false