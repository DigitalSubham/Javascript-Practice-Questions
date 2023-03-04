// 1. What is the difference between a generator and a function?

// a function and a generator are both used to define a block of code that can be executed at a later time. However, there are several key differences between these two constructs:

// Return values: A function returns a single value using the return statement, whereas a generator can return multiple values using the yield keyword.

// Execution: A function is executed from start to finish, whereas a generator can be paused and resumed at different points in its execution using the yield keyword. 
//            This allows a generator to return multiple values over time, rather than all at once.

// Iteration: A generator can be used to create an iterator object, which can be used to iterate over a series of values produced by the generator. 
//            In contrast, a function does not have this capability.

// Memory usage: A generator is more memory-efficient than a function, as it only generates values when they are requested, 
                //  rather than generating all values at once and storing them in memory.

// In summary, a generator is a special type of function that allows you to return multiple values over time and can be paused and resumed during its execution. 
// It is also more memory-efficient than a regular function.








// 2. What is the syntax of a generator?

// function *disp(){
//     console.log("1");
//     yield '1st Pause'
//     console.log("2");
//     yield '2nd Pause'
//     console.log("3");
//     yield '3rd Pause'
//     console.log("4");
//     yield '4th Pause'
// }

// let control = disp()
// control.next()
// control.next()








// 3. Are function generators iterable in JavaScript?

// Yes, function generators are iterable in JavaScript. A function generator can be used to create an iterator object, 
// which can be used to iterate over a series of values produced by the generator.

// To create an iterator object from a function generator, you can use the built-in Symbol.iterator method, 
// which returns an object with a next() method that produces the next value in the generator sequence. 
// Here is an example:
// function* myGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const iterator = myGenerator()[Symbol.iterator]();
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }


// In this example, myGenerator() is a function generator that produces a sequence of values using the yield keyword. 
// The iterator object is created by calling the Symbol.iterator method on the generator, 
// which returns an object with a next() method that can be used to iterate over the sequence. 
// When the next() method is called on the iterator object, 
// it returns an object with a value property that contains the next value in the sequence, 
// and a done property that indicates whether the end of the sequence has been reached.








// 4. Create a generator for multiplying?
// Output -

// function* multiply(a,b){
//     yield a*b;
// }

// const result = multiply(2,2).next().value;
// console.log(result);






// 5. Print an infinite series of natural numbers using a generator.

// function* naturalNumbers() {
//   let i = 1;
//   while (true) {
//     yield i++;
//   }
// }

// const iterator = naturalNumbers();
// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3



// 6. Create a generator that can throw an exception.

// function* myGenerator() {
//   try {
//     yield 1;
//     yield 2;
//     throw new Error('Generator error');
//     yield 3;
//   } catch (err) {
//     yield err.message;
//   }
// }

// const iterator = myGenerator();
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 'Generator error', done: false }
// console.log(iterator.next()); // { value: undefined, done: true }
