// 1. Write a JavaScript program to:
// a) filter employees according to department = IT
// b) filter employees who earn a salary < 65000
// Sample Input:
// let employees = [
//   { id: 1, name: "Abhinav", department: "IT", Salary: 75000 },
//   {id: 2,name: "Gaurav",department: "Sales",Salary: 52000,},
//   {id: 3,name: "Raj",department: "IT",Salary: 64000,},
// ];
// Output: [
//   {
//     id: 1,
//     name: "Abhinav",
//     department: "IT",
//     Salary: 75000,
//   },
//   {
//     id: 3,
//     name: "Raj",
//     department: "IT",
//     Salary: 64000,
//   },
// ]

// [
//   ({
//     id: 2,
//     name: "Gaurav",
//     department: "Sales",
//     Salary: 52000,
//   },
//   {
//     id: 3,
//     name: "Raj",
//     department: "IT",
//     Salary: 64000,
//   })
// ];

// let employees = [
//   { id: 1, name: "Abhinav", department: "IT", Salary: 75000 },
//   {id: 2,name: "Gaurav",department: "Sales",Salary: 52000,},
//   {id: 3,name: "Raj",department: "IT",Salary: 64000,},
// ];

// a) filter employees according to department = IT
//solution============

// employees.forEach((employee) =>{
//     if(employee.department === "IT"){
//         console.log(employee);
//     }

// })

// b) filter employees who earn a salary < 65000
//solution==================

// employees.forEach((employee) =>{
//     if(employee.Salary < 65000){
//         console.log(employee);
//     }

// })

// 2. Write a JavaScript program to filter the hospitals according to:
// a) Number of Beds > 200
// b) Availability of Beds = Yes
// c) Location = Pune

// Sample Input:
// let hospitals = [
// {
// "id": 1,
// "name":"Hospital A",
// "location":"Delhi",
// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 2,
// "name":"Hospital B",

// "location":"Pune",
// "noOfBeds":150,
// “availability”:”No”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350.
// “availability”:”Yes”
// }]
//

// Output:
// [
// {
// "id": 1,
// "name":"Hospital
// A",
// "location":"Delhi",
// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]

// [
// {
// "id": 1,
// "name":"Hospital
// A",
// "location":"Delhi",

// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]
// [
// {
// "id": 2,
// "name":"Hospital B",
// "location":"Pune",
// "noOfBeds":150,
// “availability”:”No”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]

// let hospitals = [
// {"id": 1,"name":"Hospital A","location":"Delhi","noOfBeds":450,"availability":"Yes"},
// {"id": 2,"name":"Hospital B","location":"Pune","noOfBeds":150,"availability":"No"},
// {"id": 3,"name":"Hospital C", "location":"Pune","noOfBeds":350,"availability":"Yes"}]

// a) Number of Beds > 200 solution

// hospitals.forEach((hospital) =>{
//     if(hospital.noOfBeds>200){
//         console.log(hospital);
//     }
// })

// b) Availability of Beds = Yes
// hospitals.forEach((hospital) =>{
//     if(hospital.availability === "Yes"){
//         console.log(hospital);
//     }
// })

// c) Location = Pune solution
// hospitals.forEach((hospital) =>{
//     if(hospital.location === "Pune"){
//         console.log(hospital);
//     }
// })
