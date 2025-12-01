/*
Array
-----
array is a collection of values stored in one variable, and the values are arranged in order.
/*Array
----------
array is a ordered collection of elements
-arrays are flexible.That means you can add, remove, or change elements anytime.
-they can grow and shrink automatically.
-array can store mixed datatypes
 eg:-
 const arr=[10,"aysha",true,null]
-Arrays are non-pimitive datatype.so they are stored by reference.
*/

const numbers=[1,2,3,4]

console.log(numbers)


/*CRUD Operation (Very Simple)
-------------------------------
CRUD means the 4 basic actions you can do on data:

C-	Create-	Add new data
R-	Read  -	Get/view data
U-	Update-	Change existing data
D-	Delete-	Remove data
*/

/*
array length
-------------
-array.length returns the total number of items in the array.
*/



const arr=[10,20,30,40]
console.log(arr.length)

/*
push() 
------
adds an item to the end of an array */

 const push=[1,2,3,4]
 push.push(5)
 console.log(push)


/*
pop()
-----
removes the last item from an array.
*/

const pop=[1,2,3,4]
pop.pop()
console.log(pop)

/*


shift()
-------
removes the first item of an array.
*/
const shift=[1,2,3,4]
shift.shift()
console.log(shift)


/* 
unshift()
---------
adds an item to the beginning of an array.
*/
const  unshift=[1,2,3,4]
unshift.unshift(0)
console.log(unshift)

/*
slice()
-------
-copies part of an array or string without changing the original.
*/
const slicy=[10,20,30,40]
console.log(slicy.slice(1,3),slicy)
/*
splice()
--------
-method that changes the contents of an array by removing, replacing, or adding elements at a specific index.
-Add items
-Remove items
-Replace items
*/
//remove and add element
const splicy=[10,20,30,40,50]
console.log(splicy.splice(1,3, 100),splicy)
/*
-1 is starting index
-3 is removing numbers
-100 is add number
 */
//remove element
const remove=[1,2,3,4,5]
console.log(remove.splice(2,1),remove)

/*
slice()
--------

-Does NOT change original array

-Returns a NEW array

-Used to COPY part of array

-Works with negative index

Syntax: array.slice(start, end)

splice()
---------

-Changes original array

-Removes/Adds/Replaces elements

-Returns removed elements

-Works with negative index

Syntax: array.splice(start, deleteCount, items...)
 */

//for loop
const loop=[10,20,30,40,50]
for(let i=0;i<=loop.length;i++){
    console.log(loop[i])
}
//for of loop
for(let elements of loop){
    console.log(elements)
}


