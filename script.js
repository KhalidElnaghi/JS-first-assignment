//! 1- Write a program that allow to user enter number then print it
// var input = Number(prompt("Enter a Number"));
// console.log("the input value is " + input);
// alert("the input value is " + input);
// document.write(`the input value is ${input}`);

//! 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// var num = Number(prompt("Enter a  number"));
// if (num % 3 == 0 && num % 4 == 0) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

//! 3- Write a program that allows the user to insert 2 integers then print the max
// var fNum = Number(prompt("Enter the first number"));
// var sNum = Number(prompt("Enter the second number"));

// if (fNum > sNum) {
//   console.log("Fisrt number is the greater");
// } else {
//   console.log("second number is the greater");
// }

//! 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// var input = Number(prompt("Enter a number"));
// if (input < 0) {
//   console.log("the input is negative");
// } else {
//   console.log("the input is positive");
// }

//! 5- Write a program that take 3 integers from user then print the max element and the min element.
// var fNum = Number(prompt("Enter the first number"));
// var sNum = Number(prompt("Enter the second number"));
// var tNum = Number(prompt("Enter the third number"));
// if (fNum > sNum && sNum > tNum) {
//   console.log(`max Number = ${fNum} and min Number = ${tNum}`);
// } else if (fNum > tNum && tNum > sNum) {
//   console.log(`max Number = ${fNum} and min Number = ${sNum}`);
// } else if (sNum > fNum && fNum > tNum) {
//   console.log(`max Number = ${sNum} and min Number = ${tNum}`);
// } else if (sNum > tNum && tNum > fNum) {
//   console.log(`max Number = ${sNum} and min Number = ${fNum}`);
// } else if (tNum > sNum && sNum > fNum) {
//   console.log(`max Number = ${tNum} and min Number = ${fNum}`);
// } else if (tNum > fNum && fNum > sNum) {
//   console.log(`max Number = ${tNum} and min Number = ${sNum}`);
// } else {
//   console.log("there is an equailty");
// }

//! 6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// var num = Number(prompt("Enter a number"));
// if (num % 2 == 0) {
//   console.log("the number is even");
// } else {
//   console.log("the number is odd");
// }

//! 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// var char = prompt("Enter a character");
// switch (char) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//     console.log("the character is vowel");
//     break;
//   default:
//     console.log("the character is Consonant");
// }

//! 9- Write aprogram that allows user to insert integer then print all numbers between 1 to  that’s number
// var num = Number(prompt("Enter a number"));
// for (var i = 1; i <= num; i++) {
//   console.log(i);
// }

//! 10- Write a program that allows user to insert integer then print a multiplication table up to 12.
// var num = Number(prompt("Enter a number"));
// for (var i = 1; i < 13; i++) {
//   console.log(num * i);
// }

//! 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
// var num = Number(prompt("Enter a number"));
// for (var i = 1; i < num; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
//! 12- Write a program that take two integers then print the power
// var fNum = Number(prompt("Enter the first number "));
// var sNum = Number(prompt("Enter the second number"));
// var result = 1;
// for (var i = 0; i < sNum; i++) {
//   result = result * fNum;
// }
// console.log(result);

//! 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// var mark_1 = Number(prompt("Enter the first mark"));
// var mark_2 = Number(prompt("Enter the second mark"));
// var mark_3 = Number(prompt("Enter the third mark"));
// var mark_4 = Number(prompt("Enter the fourth mark"));
// var mark_5 = Number(prompt("Enter the fifth mark"));

// var getTotal = function (x, y, z, a, b) {
//   return x + y + z + a + b;
// };
// var getAverage = function (x, y, z, a, b) {
//   return (x + y + z + a + b) / 5;
// };
// var getPercentage = function (x, y, z, a, b) {
//   return ((x + y + z + a + b) / 500) * 100;
// };
// console.log("Total = " + getTotal(mark_1, mark_2, mark_3, mark_4, mark_5));
// console.log("Average = " + getAverage(mark_1, mark_2, mark_3, mark_4, mark_5));
// console.log("Percentage = " + getPercentage(mark_1, mark_2, mark_3, mark_4, mark_5) + "%");

//! 13-Write a program to input month number and print number of days in that month.
// var num = Number(prompt("Enter the Month number"));
// if (
//   num == 1 ||
//   num == 3 ||
//   num == 5 ||
//   num == 7 ||
//   num == 8 ||
//   num == 10 ||
//   num == 12
// ) {
//   console.log("this month have 31 day in it ");
// } else if (num == 4 || num == 6 || num == 9 || num == 11) {
//   console.log("this month have 30 day in it ");
// } else {
//   console.log(
//     "this month have 28 day in a common year and 29 day in leap years "
//   );
// }

//! 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
// var phMark = Number(prompt("Enter the Physics mark"));
// var chMark = Number(prompt("Enter the Chemistry mark"));
// var biMark = Number(prompt("Enter the Biology mark"));
// var maMark = Number(prompt("Enter the Mathematics mark"));
// var coMark = Number(prompt("Enter the Computer mark"));

// var getPercentage = function (a, b, c, d, e) {
//   return ((a + b + c + d + e) / 500) * 100;
// };

// var percentage = getPercentage(phMark, chMark, biMark, maMark, coMark);
// if (percentage >= 90) {
//   console.log("Your Crad is A");
// }
// else if (percentage >= 80) {
//   console.log("Your Crad is B");
// }
// else if (percentage >= 70) {
//   console.log("Your Crad is C");
// }
// else if (percentage >= 60) {
//   console.log("Your Crad is D");
// }
// else if (percentage >= 40) {
//   console.log("Your Crad is E");
// }
// else {
//   console.log("Your Crad is F");
// }

//! ******************************** Using switch case*******************************

//!15- Write a program to print total number of days in month
// var num = Number(prompt("Enter the Month number"));
// switch (num) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("this month have 31 day in it ");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("this month have 30 day in it ");
//     break;
//   case 2:
//     console.log("this moave 28 day in a common year and 29 day in leap years ");
//     break;
// }

//! 16- Write a program to check whether an alphabet is vowel or consonant
// var char = prompt("Enter a character");
// switch (char) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//     console.log("the character is vowel");
//     break;
//   default:
//     console.log("the character is Consonant");
//     break;
// }
//! 17- Write a program to find maximum between two numbers
// var fNum = Number(prompt("Enter the first number "));
// var sNum = Number(prompt("Enter the second number"));

// switch (fNum > sNum) {
//   case true:
//     console.log("first number is greater than the second number ");
//     break;
//   default:
//     console.log("first second is greater than the first number ");
//     break;
// }

//! 18- Write a program to check whether a number is even or odd
// var num = Number(prompt("Enter  a number "));

// switch (num % 2 == 0) {
//   case true:
//     console.log("the number is even");
//     break;
//   default:
//     console.log("the number is odd");
//     break;
// }

//! 19- Write a program to check whether a number is positive or negative or zero
// var num = Number(prompt("Enter  a number "));

// switch (num > 0) {
//   case true:
//     console.log("the number is positive");
//     break;
//   case false:
//     switch (num < 0) {
//       case true:
//         console.log("the number is negative");
//         break;
//       default:
//         console.log("the number is equal to zero");
//         break;
//     }
// }

//! 20- Write a program to create Simple Calculator
// var fNum = Number(prompt("Enter the first number "));
// var sNum = Number(prompt("Enter the second number"));
// var operation = prompt("Enter the operation sign");

// switch (operation) {
//   case "+":
//     console.log(`the result = ${fNum + sNum}`);
//     break;
//   case "-":
//     console.log(`the result = ${fNum - sNum}`);
//     break;
//   case "/":
//     console.log(`the result = ${fNum / sNum}`);
//     break;
//   case "*":
//     console.log(`the result = ${fNum * sNum}`);
//     break;
// }