   
//JavaScript runs one line at a time, in order, from top to bottom — this is called synchronous.

   //primitive and non-primitive

   //1-primitive values are immutable, meaning they cannot be changed,but can be replaced with a new value.
   let courseName='js'
   courseName[0]='k'
   console.log(courseName[0])

   //2-non-primitive values are mutable,can be changed

   const course=['java','python']
   course[1]='c++'
   console.log(course)

   //lowest value

   const value=2.5

   const result=Math.floor(value)

   console.log(result)

   //highest value

   const value2=2.5

   const result2=Math.ceil(value2)

   console.log(result2)

   //template literal

   const single='aysha'
   const double="riya"
   const backtick=`ayshariya`

   const results=`${single} and ${backtick}`
   console.log(results)
//----------------------------------------------------
   //string reverse
   /*LOOPS
   1.for loop
   
   const string="java script"
   for (let i=string.length;i>=0;i--){
      console.log(string[i])
   }
      
   2.while loop
   */
  const string="java script"
  let j=string.length-1

  while (j>=0) {

   console.log(string[j])
   j--; 
  }


  

 

