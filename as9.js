// 1. Carefully observe this example.
// a) Is the InnerFunction() a closure?
// b) What is output of this program

// function OuterFunction(){ 
//     var outerVariable = 100;
//     function InnerFunction() {
//     console.log(outerVariable);
//     }
// return InnerFunction;
// }

// var innerFunc = OuterFunction();

// innerFunc();

// a answer => Definitely this InnerFunction is closure because when variable Innerfunc is invoking Outerfunction(), according to code Outerfunction is returning InnerFunction 
//  then Innerfunc is having Innerfunction. And from execution context or callstack OuterFunction is gone, but still when we call InnerFunc the 100 is printed because closure is a function bind together with  its lexical scope. it store OuterVariable as a reference and use it.

// b answer => it will print 100 due to closure




// 2. What is the difference between a closure and a scope ?
// A closure is a function that has access to the variables in its lexical scope, even when the function is executed outside of its lexical scope.

// A scope is the set of rules that determine the visibility and accessibility of variables in a program. In JavaScript, 
// there are two types of scope: global scope and local scope. Variables defined in the global scope are available to all parts of the program, while variables defined in a local scope are only available within the block of code in which they are defined.





// 3. What is a lexical scope and how is it related to closure?

// a lexical scope refers to the regions of a program where a variable is accessible. A lexical scope is determined at the time a program is written, and it cannot be changed at runtime.

// A closure is a function that has access to the variables in its lexical scope, even when the function is executing outside of that lexical scope. This is possible because the function retains access to the variables in its lexical scope even after it has left that scope.

// For example, consider the following code in JavaScript:
// function outerFunction() {
//     let outerVariable = 'I am outside!';
  
//     function innerFunction() {
//       console.log(outerVariable);
//     }
  
//     return innerFunction;
//   }
  
//   const outer = outerFunction();
//   outer();  // Output: "I am outside!"
//   
//   In this example, the innerFunction has access to the outerVariable even though it is executed outside of the outerFunction. This is because innerFunction is a closure that retains access to the variables in its lexical scope.  





// 4. Output of following closure ?
// for (var i = 0; i < 3; i++) {
// setTimeout(function log() {
// console.log(i); // What is logged?
// }, 1000);
// }


// It will print 3 times 3 after 1000 ms this is happing because the value of i accessed by callback function after execution of for loop 3 times and value of i become 3, and every time value of i accessed by callback function form same i.
// if we change var to let then we get 0 1 2 as output because let is block scoped a new copy of i is created after each iteration and different i value is taken every time by callback function.