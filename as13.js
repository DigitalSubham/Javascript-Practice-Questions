// 1. Write a JavaScript program to get an array from the user and return the:
// a) Sum of all elements in the array using reduce()
// b) Average of all elements in the array using reduce()
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Output:
// 15
// 3


// arr = [ 1, 2, 3, 4, 5 ];
// const sum = arr.reduce((total,amount) =>{
//     return total+amount;
// })
// console.log(`Sum is: ${sum}`);
// console.log(`Average is is: ${sum/arr.length}`);





// 2. Write a JavaScript program to
// a) Calculate grades on basis of marks
// >90 = A
// >80 = B
// >70 = C
// >60 = D
// >50 = E
// else = F


//solution========================================

// => we can solve this using if else and using switch statements

// => i am using switch statements to solve this problem
// marks = 5
// switch(true){
//     case marks>90:
//         console.log(`grade is A`); 
//         break;
//     case marks>80:
//         console.log(`grade is B`); 
//         break;
//     case marks>70:
//         console.log(`grade is C`); 
//         break;
//     case marks>60:
//         console.log(`grade is D`); 
//         break;
//     case marks>50:
//         console.log(`grade is E`); 
//         break;
//     default:
// 		console.log("grade is F");
// }









// b) Map the grades of each student
//solution========================================

let students = [
  { name: "John", marks: "92" },
  { name: "Oliver", marks: "85" },
  { name: "Michael", marks: "79" },
  { name: "Dwight", marks: "95" },
  { name: "Oscar", marks: "64" },
  { name: "Kevin", marks: "48" },
];

for (let i = 0; i < students.length; i++) {
  let marks = Number(students[i].marks);
  let grade;
  switch (true) {
    case marks > 90:
      grade = "A";
      break;
    case marks > 80:
      grade = "B";
      break;
    case marks > 70:
      grade = "C";
      break;
    case marks > 60:
      grade = "D";
      break;
    case marks > 50:
      grade = "E";
      break;
    default:
      grade = "F";
  }
  students[i].grade = grade;
}

console.log(students);










// c) Group students according to the grades they have received and display.
// Sample Input:
// let students = [
// { name: "John", marks: “92” },
// { name: "Oliver", marks: “85” },
// { name: "Michael", marks: “79” },
// { name: "Dwight", marks: “95”},
// { name: "Oscar", marks: “64” },
// { name: "Kevin", marks: “48” },
// ];

// Output:

// {
// 'A': [ { name: "John", grade: “A” },
// { name: "Dwight", grade: “A” } ],
// 'B': [ { name: "Oliver", grade: “B” } ],
// 'C': [ { name: "Michael", grade: “C” } ],
// 'D': [ { name: "Oscar", grade: “D” } ],
// 'E': [ ],
// 'F': [ { name: "Kevin", grade: “F” } ],
// }


//solution========================================

// let students = [
//   { name: "John", marks: "92" },
//   { name: "Oliver", marks: "85" },
//   { name: "Michael", marks: "79" },
//   { name: "Dwight", marks: "95" },
//   { name: "Oscar", marks: "64" },
//   { name: "Kevin", marks: "48" },
// ];

// let grades = {
//   A: [],
//   B: [],
//   C: [],
//   D: [],
//   E: [],
//   F: [],
// };

// students.forEach((student) => {
//   let grade;

//   if (student.marks >= 90) {
//     grade = "A";
//   } else if (student.marks >= 80) {
//     grade = "B";
//   } else if (student.marks >= 70) {
//     grade = "C";
//   } else if (student.marks >= 60) {
//     grade = "D";
//   } else if (student.marks >= 50) {
//     grade = "E";
//   } else {
//     grade = "F";
//   }

//   grades[grade].push({ name: student.name, grade: grade });
// });

// console.log(grades);

