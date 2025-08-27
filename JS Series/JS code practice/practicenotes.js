/* Convert number to string and string to number. */
// let num=12
// let strnum=String(num); //"12"
// console.log(strnum)
// let backtonum=Number(strnum) //12
// console.log(backtonum)
// console.log(typeof(strnum),typeof(backtonum)) //string number

/* square root */
// console.log(Math.sqrt(81)); //9

/* Round to 2 decimals */
// console.log(Math.round(3.14159)) //3
// console.log((3.14159).toFixed(2)) //3.14

/* create object */
// let student={
//     name:"Abhi",
//     age:25,
//     marks:90
// };
// console.log(student) //{name: 'Abhi', age: 25, marks: 90}
/* access & modify properties */
// student.age=26;
// console.log(student.age) //26
// // loop througth keys & values
// for (let key in student){
//     console.log(key,student[key]);
// }  //name Abhi
/* check if property exist */
// console.log("marks" in student) //true
/* convert object to key-value pairs */
// console.log(Object.entries(student));  // [ ['name','Abhi'], ['age',26], ['marks',90] ]

/* arrow function to double num */
// let double = num => num * 2;
// console.log(double(4));         // 8

/*  function with default parameters */
// function greet(name = "Guest") {
//     console.log(`Hello, ${name}`);
// }
// greet(); // Hello, Guest
// greet("Abhi"); // Hello, Abhi

/* loop througth an array  */
// let colors=["Red","Green","Blue"]
// for (let color of colors){
//     console.log(color)
// }

//multiplication table nested loop
// for (let i=1;i<=20;i++){
//     for(let j=1;j<=10;j++){
//         console.log(`${i}X${j}=${i*j}`);
//     }
//     console.log("-------------------")
// }

// let n=5;
// for(let i=1;i<=10;i++){
//     console.log(n+"X"+i+"="+(n*i))
// }

// Print "Hello, World!" to the console.
// console.log("Hello World!");  //Hello World!

// Declare a variable to store your age and print it.
// let age=25;
// console.log(age) //25

// Add two numbers and print the result.
// let x=5, y=7;
// console.log(x+y);  //12

// Swap two numbers without using a third variable.
// var a=5, b=7;
// [a,b]=[b,a]
// console.log(a,b);  // 7 5

// Find the remainder when one number is divided by another.
// console.log(10%3);  //1

// Check if a number is even or odd.
// let n=7
// console.log(n%2===0?"Even":"Odd"); //odd

// Convert kilometers to miles.
// let km = 10;
// console.log(km * 0.621371);  //6.21371

// Convert Celsius to Fahrenheit.
// let celsius = 25;  
// let fahrenheit = (celsius * 9/5) + 32;  
// console.log(fahrenheit); //77

// Convert Fahrenheit to Celsius.
// let fahrenheit = 77;
// let celsius = (fahrenheit - 32) * 5/9;
// console.log(celsius); // 25

// Check if a number is positive, negative, or zero.
// let n = -3;    
// if (n > 0) console.log("Positive");
// else if (n < 0) console.log("Negative");
// else console.log("Zero");   //Negative

// Check if a number is divisible by 5.
// console.log(20%5===0);  //true

//  Find the square of a number.
// console.log(5*5); //25

// Find the cube of a number.
// console.log(3**3) //27

// Increment a number by 1 without using ++.
// let inc=5
// inc+=1
// console.log(inc) //6

// Decrement a number by 1 without using --.
// let desc=5
// desc-=1
// console.log(desc) //4

// Calculate the area of a rectangle.
// let l=4,b=5;
// console.log(l*b) //20

// Calculate the perimeter of a rectangle.
// let l=4,b=5;
// console.log(2*(l+b)) //18

// Calculate the area of a circle.
// let r=5
// console.log(Math.PI*r*r)  //78.539

// Calculate the perimeter of a circle.
// let r=5
// console.log(2*Math.PI*r) //31.415

// Check if a year is a leap year.
// let year=2024;
// console.log((year%4===0 && year%100!==0) || (year%400===0)) //true

// Reverse a string.
// let word="hello"
// let reversed=word.split("").reverse().join("");
// console.log(reversed)  //olleh

// Count vowels in a string.
// let s="javascript"
// let vowels=s.match(/[aeiou]/gi);
// console.log(vowels? vowels.length:0);    //3

// Count consonants in a string.
// let consonants=s.match(/[^aeiou\s]/gi)
// console.log(consonants? consonants.length:0);  //7

// Check if a string is a palindrome.
// let word="madam";
// let palindrome=word.split("").reverse().join("");
// console.log(word===palindrome)    //true

// Convert a string to uppercase.
// console.log("hello".toUpperCase());   //HELLO

// Convert a string to lowercase.
// console.log("HELLO".toLowerCase());  //hello

// Remove spaces from a string.
// console.log("Hello World JS".replace(/\s/g, "")); //HelloWorldJS

// Replace all occurrences of "Java" with "JS" in a string.
// console.log("I love Java and Java is fun".replace(/Java/g, "JS")); //I love JS and JS is fun

// Find the length of a string without using .length.
// let text = "hello";
// let lengthCount = 0;
// for (let _ of text) lengthCount++;
// console.log(lengthCount);      //5

// Count the number of words in a string.
// let sentence = "I love JavaScript";
// console.log(sentence.trim().split(/\s+/).length);  //3

// Find the first character of a string.
// console.log("hello"[0]);  //h

// Find the last character of a string.
// let myStr="hello";
// console.log(myStr[myStr.length-1]);   //o
 
// Check if a string contains a specific word.
// console.log("I love JS".includes("JS"));  //true

// Repeat a string 5 times.
// console.log("Hi ".repeat(5));   //Hi Hi Hi Hi Hi 

// Convert the first letter of each word to uppercase.
// let capStr = "hello world";
// console.log(capStr.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" "));  //Hello World

// Extract a substring from a string.
// console.log("JavaScript".substring(0, 4)); // "Java"

// Find the ASCII value of a character.
// console.log("A".charCodeAt());  //65

// Convert a number to a string.
// let num1 = 123;
// // console.log(num1.toString()); //"123"
// console.log(String(num1))   //"123"

// Convert a string to a number.
// let numStr = "456";
// // console.log(Number(numStr)); //456
// console.log(parseInt(numStr))  //456

// Remove punctuation from a string.
// let punctStr = "Hello, world!";
// console.log(punctStr.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " "));     //Hello world

// Find the largest of three numbers.
// let a = 10, b = 20, c = 15;
// console.log(Math.max(a, b, c));    //20

// Find the smallest of three numbers.
// console.log(Math.min(a, b, c));           //10

// Check if a number is prime.
// let num = 7;
// let isPrime = num > 1;
// for (let i = 2; i <= Math.sqrt(num); i++) {
//   if (num % i === 0) { isPrime = false; break; }
// }
// console.log(isPrime);              //true

// Print all prime numbers from 1 to 50.
// for (let n = 2; n <= 50; n++) {
//   let prime = true;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) { prime = false; break; }
//   }
//   if (prime) console.log(n);
// }

// Find the factorial of a number.
// let factNum = 5, fact = 1;
// for (let i = 1; i <= factNum; i++) fact *= i;
// console.log(fact);            //120

// Find the sum of all numbers from 1 to N.
// let sum=0,n=100;
// for(let i=1;i<=n;i++) sum+=i;
// console.log(sum)             //5050

// Find the product of all numbers from 1 to N.
// let n=5,prod=1;
// for (let i=1;i<=n;i++) prod*=i;
// console.log(prod)              //120

// Find the sum of digits of a number.
// let nums=1234,total=0;
// while(nums>0){
//     total+=nums%10;
//     nums=Math.floor(nums/10);
// }
// console.log(total)  //10

// Reverse a number.
// let nums=12345,reversed=0;
// while(nums>0){
//     reversed=reversed*10+(nums%10);
//     nums=Math.floor(nums/10)
// }
// console.log(reversed)     //54321

// Check if a number is an Armstrong number.
// let armnum=153,total=0,temp=armnum;
// let digits=(String(armnum).length)
// // console.log(digits)    //3
// while(temp>0){
//     let digit=temp%10;
//     total+=digit ** digits;
//     temp=Math.floor(temp/10);
// }
// // console.log(total)    //153
// console.log(total===armnum)  //true

// Check if a number is a perfect number.
// let perNum = 28, perSum = 0;
// for (let i = 1; i <= perNum / 2; i++) {
//   if (perNum % i === 0) perSum += i;
// }
// console.log(perSum === perNum);          //true

// Generate a random number between 1 and 100.
// console.log(Math.floor(Math.random()*100)+1);

// Find the GCD of two numbers.
// let [a, b] = [8, 12];
// while (b) [a, b] = [b, a % b];
// console.log(a);         // 4

// Find the LCM of two numbers.
// const gcd = (x, y) => y ? gcd(y, x % y) : x;
// const lcm = (a, b) => (a * b) / gcd(a, b);
// console.log(lcm(8, 12));  //24

// Convert decimal to binary.
// console.log((10).toString(2));  //1010

// Convert binary to decimal.
// console.log(parseInt("1010",2));  //10

// Convert decimal to hexadecimal.
// console.log((255).toString(16));   //ff

// Convert hexadecimal to decimal.
// console.log(parseInt("ff", 16));   //255

// Print a multiplication table for a number.
// let n=5;
// for(let i=1;i<=10;i++){
//     console.log(`${n} x ${i} = ${n*i}`);
// }

// Count the number of digits in a number.
// let numCount = 123456, count = 0;
// while (numCount > 0) {
//   count++;
//   numCount = Math.floor(numCount / 10);
// }
// console.log(count);     //6
// 2nd method
// console.log(String(numCount).length)   //6

// Find the largest number in an array.
// let arr = [3, 7, 2, 9, 5];
// console.log(Math.max(...arr));   //9

// Find the smallest number in an array.
// let arr = [3, 7, 2, 9, 5];
// console.log(Math.min(...arr)); //2

// Calculate the sum of all numbers in an array.
// let arr = [3, 7, 2, 9, 5];
// let sum = arr.reduce((a, b) => a + b, 0);
// console.log(sum);  //26

// Calculate the average of numbers in an array.
// let arr = [3, 7, 2, 9, 5];
// let sum = arr.reduce((a, b) => a + b, 0);
// console.log(sum/arr.length);  //5.2

// Remove duplicates from an array.
// let dupArr = [1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
// console.log([...new Set(dupArr)]);     //[1,2,3,4,5,6,7,8,9]

// Sort an array in ascending order.
// let nums=[5,2,9,1]
// nums.sort()
// console.log(nums)   //[1,2,5,9]

// Sort an array in descending order.
// let nums=[5,2,9,1]
// nums.sort((a,b)=>b-a)
// console.log(nums)    //[9,5,2,1]

// Reverse an array.
// let arr = [3, 7, 2, 9, 5];
// console.log([...arr].reverse());  //[5, 9, 2, 7, 3]

// Check if an array contains a specific element.
// let arr = [3, 7, 2, 9, 5];
// console.log(arr.includes(7));    //true

// Find the index of an element in an array.
// console.log(arr.indexOf(9));    //true

// Merge two arrays or merge arrays without duplicates-
// let arr1=[1,2,3]
// let arr2=[3,4,5]
// // let merged=[...new Set([...arr1,...arr2])];
// // console.log(merged) // [1, 2, 3, 4, 5]
// console.log(arr1.concat(arr2)); //[1, 2, 3, 3, 4, 5]

// Remove the first element from an array.
// let states=['Delhi','mumbai','hyderabad']
// states.shift()
// document.write(states)  //mumbai,hyderabad

// Remove the last element from an array.
//  let books=['maths','chemistry','physics']
//  let someres=books.pop()
//  document.write(books+ '</br>')   //maths,chemistry
//  document.write('Deleted by pop method is '+ someres)  //Deleted by pop method is physics


// Add an element at the beginning of an array.
// let scores=[22,69,58,74,45,65,'amar']
// scores.unshift('suresh',26) 
// document.write(scores)      //suresh,26,22,69,58,74,45,65,amar

// Add an element at the end of an array.
//  let sports=['cricket','football']
//  sports.push('socker',68)
//  document.write(sports+'<br>')   //cricket,football,socker,68
//  document.write(sports.length)   //4

// Count the number of even numbers in an array.
// let arr = [3, 7, 2, 9, 5];
// console.log(arr.filter(n => n % 2 === 0).length);   //1


// Count the number of odd numbers in an array.
// console.log(arr.filter(n => n % 2 !== 0).length);    //4

// Find the second largest number in an array.
// let nums=[3, 7, 2, 9, 5];  //[5,2,9,1]
// nums.sort((a,b)=>b-a)
// console.log(nums)      //[9, 7, 5, 3, 2]  //[9,5,2,1]  
// console.log(nums[1])  //7     //5

// Find the second smallest number in an array.
// let nums=[3, 7, 2, 9, 5];  //[5,2,9,1]
// nums.sort()
// console.log(nums)      //[2,3,5,7,9]  //[1,2,5,9]  
// console.log(nums[1])  //3     //2

// Flatten a nested array.
// let nested = [1, [2, [3, 4]], 5];
// console.log(nested.flat(Infinity));  //[1, 2, 3, 4, 5]
//flat(Infinity): "Take the array and remove all nested levels, make it one flat list."

// Write a function to check if a number is even or odd.
// function isEven(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }
// console.log(isEven(4));   //Even

// Write a function to add two numbers.
// function add(a,b){
//     return a+b;
// }
// console.log(add(5,3));  //8

// Write a function to find the square of a number.
// function square(n) {
//   return n * n;
// }
// console.log(square(6)); //36

// Write a function to find the cube of a number.
// function cube(n) {
//   return n ** 3;
// }
// console.log(cube(3));  //27

// Write a function to check if a number is prime.
// function isPrime(n){
//     if(n<=1) return false;
//     for(let i=2;i<n;i++){
//         if(n%i===0) return false;
//     }
//     return true;
// }
// console.log(isPrime(7))  //true

// Write a function to check if a string is a palindrome.
// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("madam"));  //true

// Write a function to reverse a string.
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello")); //olleh

// Write a function to find the factorial of a number.
// function factorial(n){
//     if(n===0) return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(5)) //120

// Write a function to find the GCD of two numbers.
// function gcd(a, b) {
//   return b === 0 ? a : gcd(b, a % b);
// }
// console.log(gcd(36, 60));  //4   36,60 o/p 12

// Write a function to find the LCM of two numbers.
// function lcm(a, b) {
//   return (a * b) / gcd(a, b);
// }
// console.log(lcm(12, 15));  //24   12,15 o/p 60

// Print numbers from 1 to 10 using a for loop.
// for(let i=1;i<=10;i++) console.log(i)

// Print numbers from 1 to 10 using a while loop.
// let i=1;
// while(i<=10){
//     console.log(i)
//     i++;
// }

// Print numbers from 1 to 10 using a do...while loop.
// let j = 1;
// do {
//   console.log(j);
//   j++;
// } while (j <= 10);

// Print all even numbers between 1 and 50.
// let i=2;
// while(i<=50){
//     console.log(i)
//     i+=2;
// }
// 2nd method
// for (let k = 2; k <= 50; k += 2) console.log(k);

// Print all odd numbers between 1 and 50.
// for (let k = 1; k <= 50; k += 2) console.log(k);

// Find the sum of all even numbers between 1 and 100.
// let evenSum = 0;
// for (let k = 2; k <= 100; k += 2) evenSum += k;
// console.log(evenSum); //2550

// Find the sum of all odd numbers between 1 and 100.
// let oddSum = 0;
// for (let k = 1; k <= 100; k += 2) oddSum += k;
// console.log(oddSum);  //2500

// Print the Fibonacci sequence up to N terms.
// let fibN = 10, fib = [0, 1];
// for (let idx = 2; idx < fibN; idx++) {
//   fib[idx] = fib[idx - 1] + fib[idx - 2];
// }
// console.log(fib);  //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Check if a number exists in the Fibonacci sequence.
// function isFibonacci(num) {
//   let a = 0, b = 1;
//   while (a < num) {
//     let temp = a;
//     a = b;
//     b = temp + b;
//   }
//   return a === num;
// }
// console.log(isFibonacci(21));   //true

// Write a program to simulate a simple calculator using functions.
// function calculator(a, b, op) {
//   switch (op) {
//     case '+': return a + b;
//     case '-': return a - b;
//     case '*': return a * b;
//     case '/': return b !== 0 ? a / b : "Cannot divide by zero";
//     default: return "Invalid operator";
//   }
// }
// console.log(calculator(10, 5, '+'));  //15
// console.log(calculator(10, 5, '-'));  //5
// console.log(calculator(10, 5, '*'));  //50
// console.log(calculator(10, 5, '/'));  //2

/* triange pattern */
// for (let i=1; i<=5; i++) console.log("* ".repeat(i));

// arr=[1,4,3,2,6,5] remove number 3 in js
// let arr = [1, 4, 3, 2, 6, 5];
// arr = arr.filter(num => num !== 3);
// console.log(arr); // [1, 4, 2, 6, 5]
// 2nd method (Find index first and then remove)
// let arr = [1, 4, 3, 2, 6, 5];
// let index = arr.indexOf(3);
// if (index !== -1) {
//   arr.splice(index, 1);
// }
// console.log(arr); // [1, 4, 2, 6, 5]

//sum of array elements
// function sumArray(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArray([1, 2, 3, 4])); // 10

//first non repeating character
// function firstUniqueChar(str) {
//   for (let char of str) {
//     if (str.indexOf(char) === str.lastIndexOf(char)) return char;
//   }
//   return null;
// }
// console.log(firstUniqueChar("aabbccd")); // "d"

//anagram
// function isAnagram(str1, str2) {
//   return str1.split('').sort().join('') === str2.split('').sort().join('');
// }
// console.log(isAnagram("listen", "silent")); // true

//count occurance of each character
// function countChars(str) {
//   const result = {};
//   for (let char of str) {
//     result[char] = (result[char] || 0) + 1;
//   }
//   return result;
// }
// console.log(countChars("hello")); // { h:1, e:1, l:2, o:1 }

//Write a function that returns two arrays – one with even numbers, one with odd numbers.
// function separateEvenOdd(arr) {
//   let even = [], odd = [];
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       even.push(num);
//     } else {
//       odd.push(num);
//     }
//   }
//   return { even, odd };
// }

// const result = separateEvenOdd([10, 3, 5, 8, 9]);
// console.log(result.even); // [10, 8]
// console.log(result.odd);  // [3, 5, 9]