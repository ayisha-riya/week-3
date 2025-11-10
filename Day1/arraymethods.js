//Array Methods
//--------------

/*
1-forEach()
--------- 
-is an array method that runs a function on every element in the array.
-forEach does NOT return any value.It always returns undefined
*/

const numbers=[1,2,3,4,5]

function Callback(elements){
    console.log(elements)
}
numbers.forEach(Callback)

//standard method
numbers.forEach((numbers)=>console.log(numbers))

/*
2-map()
-------- 
-runs a function on every array element and returns a new array.
-using to transform an array
*/

const double=[1,2,3,4,5]
const result=double.map((element)=>{
    return element*2
})
console.log(result)

/*
3-filter()
--------
-returns a new array with elements that satisfy a given condition.
*/
const filters=[1,2,3,4,5]
const output=filters.filter((Callback)=>{
    if(Callback%2==0){
        return false
    }
    return true
})
console.log(output)

/*
Ternary Operator
----------------
-A short way to write if…else
-using (?)(:)    
*/

const ternary=[1,2,3,4,5]
const ternaryop=ternary.filter((value)=>{
       return value%2==0? true:false
})
console.log(ternaryop)

const mark=60
const grade= mark>90 ? "Grade:A" : "Grade:B" 
console.log(grade)

const greater=[1,5,7,3,8]
const greaterthan=greater.filter(greater=> greater>3)
  
console.log(greaterthan)

/*
Reduce()
--------
-takes all elements of an array and reduces them into one final value

syntax:-
array.reduce((accumulator, currentValue) => { ... }, initialValue)

accumulator → stores result step-by-step
currentValue → current element in array
initialValue → starting value (optional but recommended)
*/
const reduces=[1,2,3,4,5]
const reduceop=reduces.reduce((acc,index)=>{
     return "aysha"
},"anas")
console.log(reduceop)

const nums=[3,4,5]
const sum=nums.reduce((accumulator,sumop)=>accumulator+sumop)
console.log(sum)