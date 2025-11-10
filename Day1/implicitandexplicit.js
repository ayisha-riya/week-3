// Type Conversion in JavaScript
//---------------------------------


// 1) Implicit (Type Coercion)
//-----------------------------------
// JavaScript automatically converts types when needed.

// let x = "5" - 2; // 5 is string, 2 is number
// console.log(x); // 3 (string converted to number)

// let y = "5" + 2;
// console.log(y); // "52" (number converted to string)



// 2) Explicit (Manual Conversion)
//--------------------------------------
// You convert types using functions:

// let str = "123";
// let num = Number(str); // string → number
// let bool = Boolean(1); // number → boolean
// let str2 = String(456); // number → string
