
// 1. Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result -str = "Icecream"

// if( str.length > 4 ){
//     console.log(str.slice(0,4)+"...")

// }
// else{
//     console.log("bye")
// }


// 2. Input a String S with multiple words, and remove whitespaces and
// output the result -

// str1 = "   Hii Boy"
// output = ""

// for(let i of str1){
//      if(i.charCodeAt() !== 32){
//         output +=i
//      }
// }
// console.log(output)

 
 


// 3) Input a String S with two words, and replace first word with second word
// and display the result -

// str2 = "Hii Boy"
// output = 0

// for(let i in str2){
//      if(str2[i].charCodeAt() === 32){
//         output = i
//      }
// }
 
// console.log(str2.slice(Number(output)+1,str2.length)+ " "+ str2.slice(0,output));



// 4)4. Input a String S with a word, and replace character “a” with “x” and
// display the result -

// str3  = "apple"
// const newString = str3.replace("a", "x");
// console.log(newString);



// 5 What string method can be used to convert string into array ?
//  ---> Split method



// 6 What string method can be used to check the occurrence of a specified
// => indexOf()




// 7. How can you break a string to a newline in Javascript ?
// => we can use \n 





//8. Write a Javascript function to test whether the first character of a string
// is lowercase.

// const test = (str) =>{
//     if(str.charCodeAt(0) >=  97 && str.charCodeAt(0) <= 122 ){
//         console.log(`First letter => ${(str[0])} is in lower case`)
//     }else{
//         console.log(`first character => ${(str[0])} is not a lowercase character`);
//     }
// } 

// test("Subham")
// test("ineuron")





// 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods. How will you handle that ?

// => In this case we convert all that to lowercase or uppercase. 




// 10. Given a String S, achieve following tasks

// a) Convert the String into upper case.
// s = "Subham"
// S = s.toUpperCase();
// console.log(S)




// b) Convert only the first character to uppercase.
// s = "subham"
// S = s[0].toUpperCase() + s.slice(1,);
// console.log(S);




// c) Convert the String into lower case.
// s = "SUBHAM"
// S = s.toLowerCase();
// console.log(S);



// d) Break the string into two halves and swap them.
// s = "Subham"
// S = s.slice(0,Math.floor((s.lenght)/2))
// console.log(S);



// e) Count the repeating characters.
// s = "subhamma"
// count = 0
// for(let i = 0; i< s.length; i++){
//      for(let j = i+1; j<s.length; j++){
//         if (s[i] === s[j]){
//             count+=1
             
//         }
//      }

// }

// console.log(`There is ${count} reapeating character.`)



// f) Reverse the string
// string = "subham"
// string = [...string].reverse().join("");
// console.log(string);