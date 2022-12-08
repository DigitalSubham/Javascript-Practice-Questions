// 1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

let triangle =(Side1,Side2,Side3) => {
    if(Side1===Side2 && Side2===Side3){
        console.log("It is an Equilateral Triangle")
    }
    else if(Side1===Side2 && Side2!==Side3 || Side1===Side3 && Side1!==Side2){
        console.log("It is an Isosceles Triangle")
    }
    else if(Side1!==Side2 && Side2!==Side3){
        console.log("It is an Scalene Triangle")
    }
}

triangle(5,3,4)


// 2. Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

function Grading(score) {
  
    switch(true) {
      case (score <= 100 && score >= 90):
         console.log("S grade");
          break;
      case (score <= 89 && score >= 80):
        console.log("A grade");
           break;
      case (score <= 79 && score >= 70):
        console.log("B grade");
           break;

         case (score <= 69 && score >= 60):
            console.log("C grade");
           break;
      case (score <= 59 && score >= 50):
        console.log("D grade");
          break;
      case (score <= 49 && score >= 40):
        console.log("E grade");
          break;   

      case (score < 40 && score >= 0):
         console.log("Student has failed");
          break; 
  
      default:
        console.log('INVALID SCORE');
    }
  
  };
  
Grading(-10);

// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000
// 
sum = 0
for(let i = 1;i<=1000;i++){
    if(i%3===0 && i%5===0){
        sum = sum+i
    }
}
console.log(sum)

//4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

let factorial = (r1,r2)=>{
    for (let i = r1; i <= r2; i++) {
        let flag = 0;
        var fact = 1
    
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = 1;
                break;
            }
        }
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            for(let k = i; k >0;k--){
                fact =fact*k
            }
            console.log(`factorial of ${i} is = `,fact)
        }
    }
}

factorial(1,20)
