// 1. Can we put duplicate values in the set object ?
// => No

// 2. Write the syntax for
// a) Creating new set object
// const a = new Set();
// b) Adding new element to set object
// a.add("a");
// a.add("b");
// a.add("c");
// console.log(a);

// c) Deleting element from set object
// a.delete("c")
// console.log(a);


// 3. Create a set object with four random numbers from 0 to 10. Check if this
// newly created set object has 8 in it. Use set object methods.

const num = new Set([1,3,5,8])
console.log(num.has(8));