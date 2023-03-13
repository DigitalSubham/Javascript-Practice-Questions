// 1)
// function job() {
//   return new Promise(function (resolve, reject) {
//     reject(err);
//   });
// }
// let promise = job();
// promise
//   .then(function () {
//     console.log("Success 1");
//   })
//   .then(function () {
//     console.log("Success 2");
//   })
//   .then(function () {
//     console.log("Success 3");
//   })
//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("Success 4");
//   });

// The Output for this program will be
// Error 1
// Success 4

// Why we get this as output => because of catch method,
// all the error above are handled by catch method,
// so we get Error 1 (callback function is attached to it) and below catch there is one then method will be absolutely executed and we get Success 4 (callback function is attached to it).

// 2). Write a sleep function using a promise in javascript?
// function sleep(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve(), ms)});
// };

// 3

// const promise = new Promise((res) => res(2));
// promise
//   .then((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .finally((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v);
//   });

//  The ouput of this program will be
// 2
// 4
// undefined
// 8

// This output is because of promise is having resolve which returns promise object which having data 2, now this data gone in then method we get
// 2 as printed in console and also return 4, now this 4 will go to next then method we get printed on console 4 and return 8.

// Now finally method will execute its callback function regardless of whether the promise is resolved or rejected. , the finally method has a callback function that receives a value v as a parameter.
// However, the finally method does not affect the value of the promise, so the value v will be undefined in this case.
// Therefore, the finally method will log undefined to the console.

// last then method is called with its callback function, from prevuious then method 8 is returned so that is printed on console.

// 4 What is the output of this code snippet?
// console.log("start");
// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// console.log("middle");
// fn().then((res) => {
//   console.log(res);
// });
// console.log("end");

// The output of this code will be
// start
// middle
// 1
// end
// success

// This is because "start" and "middle" are logged immediately,
// while the call to fn and the logging of 1 are added to the JavaScript event loop to be executed later. T
// hen, "end" is logged immediately after the call to fn.
// Eventually, the Promise returned by fn is resolved with the value "success",
// causing the then method to execute and log "success" to the console.



// 5). Write a function delay that returns a promise. And that promise
// should return a setTimeout that calls resolve after 1000ms.


// function delay(){
//     return new Promise( function (resolve) {
//         setTimeout(resolve(), 1000)
//     })
// }

 


// 6) What will the output be?

// Promise.resolve("Success!")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// This output will be success! in upperCase
// because first then method get success from promise and call callback function attached to it will Success! in uppercase and
// next then method log data to the console, that data which is get from upper then method


// 7) What will the output be?

// var p = new Promise((resolve, reject) => {
//   reject(Error("The Fails!"));
// })
//   .catch((error) => console.log(error))
//   .then((error) => console.log(error));

// This output is 

// Error: The Fails!
// undefined

// because  the output of this code will be a single line in the console, containing the error message "Error: The Fails!". 
// The second console.log statement will log undefined to the console, 
// because the Promise was rejected and there is no value to be passed to the then method.


// 8) What will the output be?

// console.log("start");
// setTimeout(() => {
//   console.log("setTimeout");
// });
// Promise.resolve().then(() => {
//   console.log("resolve");
// });
// console.log("end");

// The output is
// start
// end
// resolve
// setTimeout
// because "start" and "end" are logged immediately, while the callbacks scheduled with Promise.resolve().then() and setTimeout are added to the JavaScript event loop to be executed later.
// The then method attached to the resolved Promise is executed before the callback scheduled with setTimeout, so "resolve" is logged to the console before "setTimeout".

// the setTimeout callback was scheduled to execute before the Promise callback, the Promise callback executes first because it is attached to a resolved Promise.
// This causes "resolve" to be logged to the console before "setTimeout".




// 10) What will the output be?

// console.log("start");
// Promise.resolve(1).then((res) => {
//   console.log(res);
// });
// Promise.resolve(2).then((res) => {
//   console.log(res);
// });
// console.log("end");

// The output is 
// Start
// end
// 1
// 2

//because "start" and "end" are logged immediately, and then promise resolve having 1 as argument so then method is executed and attached callback function will logs 1 to the console similarly 2 is logged in the console

 
function delay(){
    return new Promise( function (resolve) {
        setTimeout(resolve, 1000)
    })
}
 

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(function(){
    console.log("hello");
});
