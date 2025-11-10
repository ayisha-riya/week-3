/*
String
------
A string  is a sequence of characters written inside quotes.
"STRING IS IMMUTABLE"
Examples:
1.Double quotes
----------------
"Hello World"

2.Single quotes
-----------------
'Hello World'
Works same as double quotes

3.Template Literal (Backticks)
--------------------------------
const name = "Aysha";
`Hello ${name}`

*/

//single and double quotes
const single='aysha'
const double="riya"
const backtick=`ayshariya`
console.log(single ,"and",double)

//backtick
//write strings with variables and multiple lines.
const result=`${single} and ${backtick}`
console.log(result)

/*
.length
-------
the total number of characters in a string.
*/
const length="string length"
console.log(length.length)
console.log(length.length-1)
//.length = 13 (total characters)
//Last character index = length - 1 = 12

/*charAt() 
----------
-always returns a character (safe, never undefined)
-safe using empty string*/
const charat=""
console.log(charat.charAt(0))  

/* [] can return undefined if the string is empty.
console.log(charat[])*/


/*
toUpperCase()
-------------
converts all letters in a string to uppercase and returns a new string.
(convert into capital letter)
*/

const firstname="aysha"
console.log(firstname.charAt(0).toUpperCase()+firstname.slice(1))

/*
slice()
--------
-in a string returns a part of the string without changing the original string.
-Negative index counts from the end of the string.
*/

const slice="aysha"
console.log(slice.slice(0,5))
console.log(slice.slice(-5))

/*
substring() 
-----------
-cannot use negative indexes
-automatically swaps the indexes if the first one is larger, but slice() does not.
*/

const sub="javascript"
console.log(sub.substring(2,5))







