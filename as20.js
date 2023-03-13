// 1). How does async/await help with performance and scalability?

// Async/await is a programming technique that allows developers to write asynchronous code in a more readable and manageable way.
// Asynchronous code is code that doesn't block the execution of the program while waiting for an I/O operation to complete,
// such as reading data from a file or making a network request.

// Async/await can help with performance and scalability in several ways:

// Improved Responsiveness: Async/await allows the program to continue executing other tasks while waiting for a long-running operation to complete.
// This can help improve the responsiveness of the application, making it feel faster and more fluid.

// Efficient use of Resources: Asynchronous code can make more efficient use of system resources,
// such as CPU time and memory, by allowing the program to switch between tasks more quickly and reducing the need to create new threads or processes.

// Reduced Blocking: Async/await can help reduce the amount of time that the program spends blocked,
// waiting for I/O operations to complete.
// This can help improve the overall performance of the application, especially in cases where there are many concurrent I/O operations.

// Scalability: Async/await can help improve the scalability of an application by allowing it to handle a larger number of concurrent requests or users.
// Asynchronous code can make more efficient use of system resources, which can help reduce the overhead of handling multiple requests simultaneously.

// Overall, async/await can help improve the performance and scalability of an application by making more efficient use of system resources and reducing the time spent waiting for I/O operations to complete.
// However, it's important to use async/await appropriately and to be aware of potential pitfalls, such as deadlocks and race conditions.





// 2). Is it possible to use async/await with promise chains? If yes,
// how can this be achieved?

// Yes, it's possible to use async/await with promise chains.

// To use async/await with promise chains, you can define an async function that
// returns a Promise and use the await keyword to wait for each Promise in the chain to complete before moving on to the next one.
// Here's an example:

// function getData() {
//   return fetch('https://abc.com/data')
//     .then(response => response.json())
//     .then(data => {
// Do something with the data
//       return data;
//     })
//     .catch(error => {
// Handle errors
//       console.error(error);
//     });
// }

// async function fetchData() {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();




// 3). Give 3 real world examples where async/await has been used?

// three real-world examples of how async/await is used:

// Web applications - Many modern web applications use async/await to handle requests from users in a non-blocking manner.
// For example, when a user submits a form or clicks a button on a web page,
// the web application might use async/await to fetch data from an API or database, update the page with the new data,
// and respond to the user without blocking other requests.

// Mobile applications - Mobile applications often use async/await to handle asynchronous operations such as fetching data from a server,
// accessing device APIs, or performing background tasks. For example,
// a mobile app might use async/await to download and display new content from a server while the user continues to interact with the app.

// Internet of Things (IoT) devices - IoT devices often use async/await to handle asynchronous events such as receiving data from sensors,
// communicating with other devices, or sending alerts to users.
// For example, an IoT device might use async/await to send a notification to a user's smartphone when a sensor detects an unusual activity or condition.






// 4) Find output.

// async function inc(x) {
//   x = x + await 1;
//   return x;
// }
// async function increment(x) {
//   x = x + 1;
//   return x;
// }
// inc(1).then(function (x) {
//   increment(x).then(function (x) {
//     console.log(x);
//   });
// });

// The output is 3
// The inc function is called with an initial value of 1.
// The await keyword pauses the execution of the inc function until the Promise is fulfilled with a value of 1.
// The value of 1 is added to the initial value of 1, resulting in a value of 2.
// The increment function is called with the value of 2.
// The value of 2 is incremented by 1, resulting in a value of 3.
// The resulting value of 3 is logged to the console using console.log.



// 5) Find output

// let p = new Promise(function (resolve, reject) {
//   reject(new Error("some error"));
//   setTimeout(function () {
//     reject(new Error("some error"));
//   }, 1000);
//   reject(new Error("some error"));
// });
// p.then(null, function (err) {
//   console.log(1);
//   console.log(err);
// }).catch(function (err) {
//   console.log(2);
//   console.log(err);
// });





// 6) Find output.
// async function f1() {
// console.log(1);
// }
// async function f1() {
// console.log(2);
// }
// console.log(3);
// f1();
// console.log(1);
// f2();
// async function f2() {
// console.log("Go!");
// }

// The output is
// 3
// 2
// 1
// Go!

// First of all 3 is logged immediately then f1() is called here there are two async function with same name,
// so lower f1() async function is executed looged 2 in the console.
// then 1 is logged after that f2() is called and Go! is logged in the console.





// 7)Find output.

// function resolveAfterNSeconds(n, x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, n);
//   });
// }

// (function () {
//   let a = resolveAfterNSeconds(1000, 1);
//   a.then(async function (x) {
//     let y = await resolveAfterNSeconds(2000, 2);
//     let z = await resolveAfterNSeconds(1000, 3);
//     let p = resolveAfterNSeconds(2000, 4);
//     let q = resolveAfterNSeconds(1000, 5);
//     console.log(x + y + z + (await p) + (await q));
//   });
// })();

// The output is 15, because function resolveAfterNSeconds which returns a promise that resolves with a value x after a delay of n milliseconds using setTimeout function.

// Then, it defines an anonymous function Inside the function, it calls resolveAfterNSeconds function with parameters (1000, 1), which returns a promise.
//  It then attaches a then handler to this promise, which is a function that receives x as an argument.

// Inside the then handler, it calls resolveAfterNSeconds function twice with parameters (2000, 2) and (1000, 3) respectively. 
// Both these functions also return promises which are resolved with values 2 and 3 after a delay of 2 and 1 seconds respectively.

// Then, it calls resolveAfterNSeconds function twice more with parameters (2000, 4) and (1000, 5) respectively. 
// These functions also return promises which are resolved with values 4 and 5 after a delay of 2 and 1 seconds respectively.

// Finally, it logs the sum of x, y, z, p, and q (which are resolved values of different promises) after waiting for their resolution using the await keyword.






// 8). Is it possible to nest async functions in JavaScript? Explain with
// examples.


// Yes, it is possible to nest async functions in JavaScript.

// An async function returns a Promise and can contain await expressions that pause the execution of the function until the Promise is resolved. This means that we can use await inside an async function to wait for the resolution of another Promise returned by another async function.

// Here's an example of nesting async functions:

// async function outerFunction() {
//   console.log("Outer function started");

//   async function innerFunction() {
//     console.log("Inner function started");
//     return "Inner function completed";
//   }

//   const result = await innerFunction();
//   console.log(result);
  
//   console.log("Outer function completed");
// }

// outerFunction();

// we define an async function called outerFunction. Inside outerFunction, we define another async function called innerFunction.

// When outerFunction is called, it logs "Outer function started" to the console, then calls innerFunction using the await keyword. 
// This pauses the execution of outerFunction until innerFunction returns a Promise that is resolved with the string 
// "Inner function completed".

// Once innerFunction is completed, its resolved value is stored in the result variable, which is then logged to the console. 
// Finally, "Outer function completed" is logged to the console.

// This demonstrates how we can nest async functions to wait for the resolution of Promises returned by other async functions.







// 9) What is the best way to avoid deadlocks when using async/await?

// Deadlocks can occur when multiple asynchronous operations are waiting for each other to complete, which can cause the program to hang or become unresponsive. 
// Here are some best practices to avoid deadlocks when using async/await in JavaScript:

// Avoid using nested async/await functions whenever possible. Instead, use Promise.all() or Promise.race() to execute multiple asynchronous operations in parallel.

// Use timeouts or timeouts with rejection to fail fast if a Promise takes too long to complete. 
// This can help avoid a deadlock scenario where a Promise is waiting indefinitely for another Promise to complete.

// Be aware of the order in which you call your asynchronous operations. If one operation depends on the completion of another, 
// make sure to call them in the correct order.

// Avoid using synchronous code inside async functions, as this can cause the function to block and potentially create a deadlock scenario.

// Use a debugger or logging statements to identify the source of any potential deadlocks, and consider refactoring your code to avoid them.

// By following these best practices, you can help ensure that your code is more resilient and less likely to encounter deadlocks 
// when using async/await.






// 10)In which scenarios would you use synchronous code instead of asynchronous code?

// Synchronous code executes one operation at a time, blocking other operations until the current operation is complete. 
// Asynchronous code, on the other hand, allows multiple operations to be executed concurrently, 
// improving the performance and responsiveness of the program. 
// However, there are still some scenarios where synchronous code is preferable over asynchronous code. Here are some examples:

// When the operation is short and does not involve any I/O operations, such as simple calculations or small data manipulations.

// When the performance overhead of managing asynchronous code outweighs the benefits of asynchronous execution, 
// such as in cases where the data set is small or the operation is not computationally intensive.

// When it is necessary to maintain a certain order of execution, such as when modifying shared data or state.

// When the program does not need to be highly scalable or responsive, such as in small scripts or one-off applications.

// When the operation is part of a larger synchronous operation, such as a loop or recursive function.

// In general, it is best to use asynchronous code when dealing with I/O operations, network requests, or other long-running tasks that can benefit from concurrent execution. However, 
// there may be cases where synchronous code is more appropriate for the task at hand, depending on the specific requirements and constraints of the program.