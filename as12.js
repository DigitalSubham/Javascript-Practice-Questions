// 1. Write a JavaScript program to map Employee Records according to Employee IDs.
// Employee: { id, name, salary }
// a) Print an array of all employee ids
// b) Print count of employees
// c) Print the name of the employee according to their id { key: value }
// d) Store the salaries of all employees in an array
// e) Calculate the average salary the company is paying to its employees
// Sample Input:
// "id": [ 67, 48, 29 ]
// "name": [ "Hitanshu", “Ninad”, “Amandeep” ]
// "salary": [ 75000, 82000, 98000 ]
// Output:
// [ 67, 48, 29 ]
// 3
// 67: Hitanshu
// 48: Ninad
// 29: Amandeep
// [ 75000, 82000, 98000 ]
// 85000

// const person = {
//     "id": [ 67, 48, 29 ],
//     "name": [ "Hitanshu", "Ninad", "Amandeep" ],
//     "salary": [ 75000, 82000, 98000 ]
// }
// let sum = 0
// console.log(person.id);
// console.log(person.id.length);
// for(let i = 0; i<person.salary.length; i++){
//     sum += person.salary[i];
//     console.log(person.id[i], ":" , person.name[i]);
// }
// console.log(person.salary);
// console.log("Average Salary = ", sum/person.salary.length);

 



// 2. Write a program in JavaScript to map the student ids, names and scores.
// a) Add data for 3 students (use map functions)
// b) Get Student Names using map functions
// c) Delete Student Scores using map functions

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3
// parameters (value + key + map) for the student
// Sample Input:
// "id": [ 1, 2, 3 ]
// "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// "scores": [ 90, 88, 92 ]
// Output:
// [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// -----one parameter-----
// [ 1, 2, 3 ]
// [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// [ 90, 88, 92 ]
// -----two parameter-----
// id 1, 2, 3
// name Hitanshu,Ninad,Amandeep
// scores 90,88,92
// -----three parameter-----
// id 1, 2, 3
// Map(3) {
// 'id' => [ 67, 48, 29 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }
// name Hitanshu,Ninad,Amandeep
// Map(3) {
// 'id' => [ 1, 2, 3 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }
// scores 90,88,92
// Map(3) {
// 'id' => [ 1, 2, 3 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }

let studentData = {
  id: [1, 2, 3],
  name: ['Hitanshu', 'Ninad', 'Amandeep'],
  scores: [90, 88, 92],
};

// a) Add data for 3 students (use map functions)
let studentMap = new Map();
studentMap.set('id', studentData.id.map((id) => id + 66));
studentMap.set('name', studentData.name);
studentMap.set('scores', studentData.scores);

// b) Get Student Names using map functions
let studentNames = studentMap.get('name');

// c) Delete Student Scores using map functions
studentMap.delete('scores');

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student
// Sample Input:
// "id": [ 1, 2, 3 ]
// "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// "scores": [ 90, 88, 92 ]
// Output:
// [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// -----one parameter-----
console.log("-----one parameter-----");
console.log(studentNames);

// [ 1, 2, 3 ]
// [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// -----two parameter-----
console.log("-----two parameter-----");
console.log(`id ${studentData.id}`);
console.log(`name ${studentNames}`);

console.log("-----three parameter-----");  
console.log(`id ${studentData.id}`);
console.log(studentMap);
console.log(`name ${studentNames}`);
console.log(studentMap.get('id'));



// 3. Write a JavaScript program to iterate over an array inputted by the user using
// mapping. Perform the square of all elements in the original array, store the
// squares in a new array and make a mapping for the squares and display it.
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Explanation:
// Original Array = [ 1, 2, 3, 4, 5 ]
// New Array = [ 1, 4, 9, 16, 25 ]
// Mapping = squares => [ 1, 4, 9, 16, 25 ]
// Output:
// [ 1, 4, 9, 16, 25 ]

// const arr = [ 1, 2, 3, 4, 5 ]

// const newArr = arr.map((num)=>{
//     return num*num
// })
// console.log(newArr);
