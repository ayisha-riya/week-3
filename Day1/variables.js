    //Variables in js
//---------------------
//-Variable is container used to store data
//-3 Keywords to declare variables
  //1-var
  //2-let
  //3-const-unchangeble
//-variables don't have a fixed type.we can store store any kind of data
   //(number,string,object,etc.)in the same variable and even change it later
   // this behaviour is called dynamic typing or loosely type language.


   //Scope
//-----------  
//scope is where a variable is available or accessible in your code.
//3 Types
  //1-Global   Scope- variable can be accessed anywhere in the file
  //2-Function Scope- variables is only accessible inside a function
  //3-Block    Scope- variable in only accessible inside {}

  //var(old way,before ES6) 
//---------------------------
//-can be Redeclared and Reassigned
//-has function scope

   //let(modern,ES6)
//--------------------
//-can be Reassigned but not Redeclared in the same scope.
//-has block scope (only works inside {}). 

  //const(modern,ES6)
//-----------------------  
//-cannot be Redeclared or Reassigned.
//-must be initialized when declared.
//-has block scope

var num=25
console.log('number',num)

