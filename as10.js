// 1. Are Higher Order functions and Call back functions the same ? If not,
// briefly explain about both functions.

//No Higher Order Functions order function are different
//example to understand

// const radius = [1,2,3,4];
// const area = function(radius){
//     return Math.PI * radius * radius;
// }

// const calculate = function(area){
//     let output = []
//     for(let i = 0; i<radius.length; i++){
//         output.push(area(radius[i]));
//     }
//     return output;
// }
// console.log(calculate(area));

//In the above code calculate() is a higher order function because it is taking another function (area()) as argument.
//And the area() is a callback function because it is passed inside another function

// 2. Is filter a Higher Order function in Javascript ? If yes, why ?

//yes filter is a higher is function

//example
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

//In the above code filter is taking another function as in argument, through this we conclude that filter is higher order function

// 3. Give an example of a Higher Order function and a call back function
// used in the same program.

// const radius = [1,2,3,4];
// const area = function(radius){
//     return Math.PI * radius * radius;
// }

// const calculate = function(area){
//     let output = []
//     for(let i = 0; i<radius.length; i++){
//         output.push(area(radius[i]));
//     }
//     return output;
// }
// console.log(calculate(area));

//area is a callback function and calculate is higher order function

// 4. Carefully check the example below:
// a) What will be the output of this program ?
// b) Which function is a Higher Order function here ?
//
const names = ["John", "Tina", "Kale", "Max"];
function useFunction(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}
function argFn(name) {
  console.log("Hello " + name);
}
useFunction(names, argFn);

//a answer => 

// b answer => usFunction is higher order function taking another function as an argument