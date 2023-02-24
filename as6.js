// 1) Perform the following operations to provide the implementation for a
// Rectangle class. The operations are:
// 1. Add an area() method to the Rectangle class.
// 2. Create a Square class that satisfies the following conditions:
// ○ It is a subclass of Rectangle.
// ○ It contains a constructor and no other methods.
// ○ It can use the Rectangle class' area method to print the area
// of a Square object.

// class Rectangle{
//     constructor(Name,length, Width){
//         this.Name = Name;
//         this.length = length;
//         this.Width = Width;
//     }
//     area(){
//         const area = this.length*this.Width
//         console.log(`area of ${this.Name} = `,area);
//     }
// }

// class Square extends Rectangle{
//     constructor(Name,length,Width){
//         super(Name,length,Width)
//     }

// }

// let obj1 = new Rectangle("rectangle",10,2)
// obj1.area()

// let obj2 = new Square("Square",2,2)
// obj2.area()

// -------------------------------------------------------------------------------------

// 2) Write a javascript function find_largest to return the nth largest number

// in an array-
// eg- given an array of integers- [3,45,6,7,23,5,7,8]

// find_largest(3) will return third largest number from the above array -
// which is 8.

// function find_large(arr,n){
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[i] < arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     } console.log(`The ${n} largest element is ${arr[n-1]}`);
// }

// const a = [3,45,6,7,23,5,7,8]
// const n = 3
// find_large(a,n)

// -------------------------------------------------------------------------------------

// 3) Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes (-) between each two even
// numbers.
// For example if you accept 025468 as the output should be 0-254-6-8.
// computeDash(025468) -> 0-254-6-8.

// function computeDash(n){
//     let newStr = String(n)[0]
//     for(let i = 1; i<String(n).length; i++){
//         if(Number(String(n)[i-1]) % 2 === 0 && Number(String(n)[i]) % 2 === 0 ){
//             newStr += "-" + String(n)[i]
//         }else{
//             newStr += String(n)[i]
//         }
//     }console.log(newStr);
// }
// computeDash(425468)
// computeDash("025468")

 


