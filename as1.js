// Write a program to find whether a given year is a leap year or not.

year = 1812

if (year % 4 === 0 && year % 100 !== 0){
    console.log('leap year')}
else{
        if (year % 400 === 0){
            console.log("leap year")
    }   else{
        console.log("not leap year")
    }
}

// Write a JavaScript program to convert temperatures to and from Celsius
F = 45
C = 60

resultInCelsius = (F-32) * 5/9
resultInFahrenheit = ( 32+(9/5)*C)
console.log(`${C}°F is ${resultInFahrenheit}°C`)
console.log(`${F}°F is ${resultInCelsius}°C`)

// Write a program to find the factorial of a number.

number = 6
factorial = 1
for (let i = number; i>=1; i--){
    factorial *= i

}
console.log(factorial)