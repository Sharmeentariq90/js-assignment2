// // Q no 1:
// // take user input
// let char = prompt("Enter a character:");

// // get ASCII code for the character
// let ascii = char.charCodeAt(0);

// // check if the character is a number
// if (ascii >= 48 && ascii <= 57) {
//     console.log(char + " is a number.");
// }
// // check if the character is an uppercase letter
// else if (ascii >= 65 && ascii <= 90) {
//     console.log(char + " is an uppercase letter.");
// }
// // check if the character is a lowercase letter
// else if (ascii >= 97 && ascii <= 122) {
//     console.log(char + " is a lowercase letter.");
// }
// // if the character is not a number or a letter, print an error message
// else {
//     console.log("Invalid input.");
// }
// // Q no 2:
// const num1 = prompt("enter first number");
// const num2 = prompt("enter 2nd number");
// if (num1 > num2) {
//     alert("first number is LARGER");
// }
// else if (num2 > num1) {
//     alert("2nd number is LARGER");
// }
// else {
//     alert("both numbers are EQUAL")
// }
// // Q no3:
// let numm = parseInt(prompt("Enter number"));
// if (numm > 0) {
//     alert("The given number is positive");
// }
// else if (numm < 0) {
//     alert("The given number is Negative");
// }
// else {
//     alert("This is zero");
// }
// // Q no 4:
// // take user input
// let char1 = prompt("Enter a character:");

// // convert the character to lowercase (to simplify the check)
// char1 = char1.toLowerCase();

// // check if the character is a vowel
// if (char1 === "a" || char1 === "e" || char1 === "i" || char1 === "o" || char1 === "u") {
//     //   console.log(char1 + " is a vowel.");
//     alert("The given character is vowel");
// } else {
//     //   console.log(char + " is not a vowel.");
//     alert("The given chracter is Constonent");
// }
// // Q no 5:
// let password = (12345);
// let type = prompt("plz enter ur password");
// if (password === type) {
//     alert("Correct! you have entered the right password");
// }
// else { alert("Incorrect Password"); }
// xxxxxxxxxxxxxxxxxxxxxxxx-----------chapter 12/13--------------xxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // document.write("User input and conditional statement");
// let fNumber = parseFloat(prompt("Enter the first number: "));
// let sNumber = parseFloat(prompt("Enter the second number: "));
// let operation1 = prompt("Enter the operation (+, -, *, /, %): ");

// let result1;

// if (operation === "+") {
//   result1 = fNumber + sNumber;
// } else if (operation1 === "-") {
//   result1 = fNumber - secondNumber;
// } else if (operation === "*") {
//   result1 = fNumber * sNumber;
// } else if (operation === "/") {
//   result1 = fNumber / sNumber;
// } else if (operation === "%") {
//   result1 = fNumber % sNumber;
// } else {
//   console.log("Invalid operation entered.");
// }

// if (result1 !== undefined) {
//   console.log(`The result of ${fNumber} ${operation1} ${sNumber} is ${result1}.`);
// }


// // Q no 9:
// const temp=parseInt(prompt("Plz enter todays Temperature"));
// if(temp>40){
//   alert("it's too hot");
// }
// else if(temp>30){
//   alert("The weather todays is normal")
// }
// else if(temp>20){
//   alert("Todays weather is cool")
// }
// else if (temp>10){
//   alert("OMG todays weather is too Cold");
// }
// // Q no 8:
// const num = prompt("Enter a number");
// if (num % 3 === 0) {
//   alert("the number is divisible by 3");

// }
// else {
//   alert("The number is not divisible by 3");
// }
// // Q no 9:
// const number=prompt("Enter a number");
// if (number%2===0){
//   alert("The is an Even number");
// }
// else{
//   alert("this is an Odd number");
// }


// // Q no 1:
// let city = prompt("plz enter ur city name");
// if (city === "karachi") {
//   city = "welcome to the city of light";
//   alert(city);
// }
// //////////////////
// // Q no 2:
// let gender = prompt("plz enter ur gender");
// if (gender == "male") {
//   gender = "GOOD MORNING SIR";
//   alert(gender);
//   "break"

// }
// else
//   (gender == "female")
// {
//   gender = "GOOD MORNING MAAM";
//   alert(gender);
// }
// // Q no 3:

// // let color = prompt("plz tyle traffice signal color", 'red yellow or green');

// // if (color === red) {
// //   red = "Must go";
// //   alert(red);
// // }
// // if (color === yellow) {
// //   yellow = "Ready to move";
// //   alert(yellow);
// // }
// // if (color === green) {
// //   green = "Move now";
// //   alert(green);
// // }
// // document.write(color);
// // Q no 4:
// let petrol = prompt("plz enter ur car FUEL", 'In Litres');
// if (petrol <= 0.25) {
//   petrol = "please refill the fuel in ur car";
//   alert(petrol);
// }
// else {
//   petrol = "Enjoy ur journey";
//   alert(petrol);
// }
// //////////////////
// // Q no 5:
// // a:
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// // b.
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// // c. 
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// // d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// // e.
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// // Q no:6
// // Take input of marks obtained in three subjects and total marks
// let marks_subject_1 = parseFloat(prompt("Enter marks obtained in subject 1: "));
// let marks_subject_2 = parseFloat(prompt("Enter marks obtained in subject 2: "));
// let marks_subject_3 = parseFloat(prompt("Enter marks obtained in subject 3: "));
// let total_marks = parseFloat(prompt("Enter total marks: "));

// // Calculate percentage
// let percentage = ((marks_subject_1 + marks_subject_2 + marks_subject_3) / total_marks * 100);

// // Determine grade based on percentage
// let grade;
// if (percentage >= 80) {
//   grade = "Aone";
//   Remarks = "Exelent";

// } else if (percentage >= 70) {
//   grade = "A";
//   Remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   Remarks = "You need improvment";
// } else if (percentage < 60) {
//   grade = "Fail";
//   Remarks = "Sorry :-("
// }

// // Display percentage and grade
// document.write("Percentage obtained: " + percentage + "%<br>");
// document.write("Grade obtained: " + grade + "<br>");
// document.write("Remarks:" + Remarks);
// // Q no7:
// // Store secret number
// // const secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt user to guess the secret number
// // const guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check if user's guess is correct or close enough
// // if (guess === secretNumber) {
// //   console.log("Bingo! Correct answer");
// // } else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
// //   console.log("Close enough to the correct answer");
// // } else {
// //   console.log(`Sorry, incorrect guess. The secret number was ${secretNumber}`);
// // }
// // Q no 8:
// const given_number = prompt("Enter a number");
// if (given_number % 3 === 0) {
//   alert("the number is divisible by 3");

// }
// else {
//   alert("the number is not divisible by 3");
// }
// // Q no 11:
// let firstNumber = parseFloat(prompt("Enter the first number: "));
// let secondNumber = parseFloat(prompt("Enter the second number: "));
// let operation = prompt("Enter the operation (+, -, *, /, %): ");

// let result;

// if (operation === "+") {
//   result = firstNumber + secondNumber;
// } else if (operation === "-") {
//   result = firstNumber - secondNumber;
// } else if (operation === "*") {
//   result = firstNumber * secondNumber;
// } else if (operation === "/") {
//   result = firstNumber / secondNumber;
// } else if (operation === "%") {
//   result = firstNumber % secondNumber;
// } else {
//   console.log("Invalid operation entered.");
// }

// if (result !== undefined) {
//   console.log(`The result of ${firstNumber} ${operation} ${secondNumber} is ${result}.`);
// }
// xxxxxxxxxxxxxx--------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Q no 6:var greeting=prompt("what time is it");
// var hour = 13;
// if (hour < 18) {
//     alert = ("Good day");
// }
// else( hour>=18) 
// {
//     alert = ("Good evening");
// }

