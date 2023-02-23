// Write a JavaScript program to take an array as input from the user and calculate
// the sum of numbers in odd places and the sum of numbers at even places.
// a) Print the difference between the two sums
// b) Print the number of elements in odd places
// c) Print the number of elements in even places
// d) Print the average of all elements in the array
// e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at EvenPlaces

// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Explanation:
// Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
// Sum of Numbers at Even Places = 2 + 4 = 6
// Difference = 9 - 6 = 3
// Sample Output:
// Difference = 3
// Odd Elements = 3
// Even Elements = 2
// Average = 3
// GCD = 3

//code

// a  = [ 1, 2, 3, 4, 5 ]
// let evenSum = 0;
// let oddCount = 0;
// let evenCount = 0;
// let oddSum = 0;
// let avg = 0;
// for (let i =0; i<a.length; i++){
//     if(i % 2 === 0){
//        evenSum += a[i]; 
//        evenCount +=1;
//     }else{
//         oddSum +=a[i];
//         oddCount +=1;
//     }
// }
// for (let i = 1; i <= oddSum && i <= evenSum; i++) {
//     if( oddSum % i == 0 && evenSum % i == 0) {
//         hcf = i;
//     }
// }

// console.log("Difference = ", oddSum - evenSum);
// console.log("Odd Elements = ", oddCount);
// console.log("Even Elements = ", evenCount);
// console.log("Average of Elements = ", (evenCount + oddSum)/(a.length));
// console.log(`GCD of ${oddSum} and ${evenSum} is ${hcf}.`);


// 2. Write a JavaScript program to take 2 arrays from the user and check if the
// number 4 exists in any of the arrays, or both of the arrays.
// Sample Input 1:
// [ 1, 2, 3, 4, 5 ]
// [ 4, 6, 1, 8, 2 ]
// Output:

// 4 in both arrays
// Sample Input 2:
// [ 1, 2, 3, 6, 5 ]
// [ 4, 6, 1, 8, 2 ]
// Output: 4 in array 2
// Sample Input 3:
// [ 1, 2, 3, 4, 5 ]
// [ 5, 6, 1, 8, 2 ]
// Output: 4 in array 1

//way 1 using include method
// Taking input from user
// const array1 =  [1, 2, 3, 6, 5 ];
// const array2 = [ 4, 6, 1, 8, 2 ];

// Checking if 4 exists in any of the arrays or both of the arrays
// if (array1.includes(4) && array2.includes(4)) {
//   console.log("4 in both arrays");
// } else if (array1.includes(4)) {
//   console.log("4 in array 1");
// } else if (array2.includes(4)) {
//   console.log("4 in array 2");
// } else {
//   console.log("4 not found in any of the arrays");
// }



// way2 - traditional method
// a1 = [ 1, 2, 3, 6, 5 ];
// a2 = [ 4, 6, 1, 8, 2 ];
// let c1 = 0;
// let c2 = 0;
// for (let i = 0; i<a1.length; i++){
//     if(a1[i] === 4){
//         c1  += 1;
//     }
// }
// for (let i = 0; i<a1.length; i++){
//     if(a2[i] === 4){
//         c2  += 1;
//     }
// }

// if(c1 === 1 && c2 ===1){
//     console.log("4 in both arrays");
// }else if(c1 === 1 && c2 !==1){
//     console.log("4 in arrays 1");
// }
// else if(c1 !== 1 && c2 ===1){
//     console.log("4 in arrays 2");
// }else{
//     console.log("4 not in any array");
// }


// 3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
// ar"ray.
// Note: Do not use array.flat();
// Sample Input:
// [ 1, 2, [ 3, 4, [ 5 ] ] ]
// Output:
// [ 1, 2, 3, 4, 5 ]

// Recursive function to flatten the array
// function flattenArray(arr) {
//   let flattenedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flattenedArr.push(...flattenArray(arr[i]));
//     } else {
//       flattenedArr.push(arr[i]);
//     }
//   }
//   return flattenedArr;
// }

// // Test the function with sample input
// const deepArray = [1, 2, [3, 4, [5]]];
// const flatArray = flattenArray(deepArray);
// console.log(flatArray);




// 4. Write a JavaScript program to take an array as input from the user and:
// a) Store all duplicate elements in a separate array
// b) Remove the duplicate elements from the original array
// Sample Input:
// [ 1, 2, 3, 2, 3, 4, 5 ]
// Output:
// Duplicate Elements = [ 2, 3 ]
// Array without duplicate elements = [ 1, 2, 3, 4, 5 ]


// let arr = [ 1, 2, 3, 2, 3, 4, 5 ]
// duplicate = []
// for(let i =0; i<arr.length; i++){
//      for(let j = i+1; j<arr.length; j++){
//         if(arr[i] === arr[j]){
//             if (!duplicate.includes(arr[i])) {
//                 duplicate.push(arr[i]);
//         }
//         arr.splice(j, 1);
//       j--;
//      }
//     }
// }
// console.log("duplicate elements are = ",duplicate);
// console.log("Array without duplicate elements = ",arr);
  



// 5. Debug the given JavaScript program and execute the correct code.

// function thirdLargest(arr, arr_size) {
//   /* There should be at least three elements */
//   if (arr_size < 3) {
//     console.log("Invalid Input");
//     return;
//   }
  
//   let first = arr[0];
//   for (let i = 1; i < arr_size; i++) {
//     if (arr[i] > first) {
//       let temp = first;
//       first = arr[i];
//       arr[i] = temp;
//     }
//   }
  
//   let second = Number.MIN_VALUE;
//   for (let i = 0; i < arr_size; i++) {
//     if (arr[i] > second && arr[i] < first) {
//       let temp = second;
//       second = arr[i];
//       arr[i] = temp;
//     }
//   }
  
//   let third = Number.MIN_VALUE;
//   for (let i = 0; i < arr_size; i++) {
//     if (arr[i] > third && arr[i] < second) {
//       third = arr[i];
//     }
//   }
  
//   console.log("The third Largest element is " + third);
// }

// let arr = [12, 13, 1, 10, 34, 16];
// let n = arr.length;
// thirdLargest(arr, n);
