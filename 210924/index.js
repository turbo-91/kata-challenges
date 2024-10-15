// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

let string = "Hello World!";

function removeExclamationMarks(string) {
  return string.replaceAll("!", "");
}

console.log(removeExclamationMarks(string));

//////////////////////////////////////////////////////

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

let n = 5;
let s = "Hello";

function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(n, s));

//////////////////////////////////////////////////////

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false

let a = 1;
let b = 2;
let c = 2;

function isTriangle(a, b, c) {
  let smallest, secondSmallest, largest;
  if (a <= b && a <= c) {
    smallest = a;
    secondSmallest = Math.min(b, c);
    largest = Math.max(b, c);
  } else if (b <= a && b <= c) {
    smallest = b;
    secondSmallest = Math.min(a, c);
    largest = Math.max(a, c);
  } else {
    smallest = c;
    secondSmallest = Math.min(a, b);
    largest = Math.max(a, b);
  }
  if (smallest + secondSmallest > largest) return true;
  else return false;
}

// I have to determine
// 1. which two variables are the smallest variables
// 2. add these variables
// 3. return true or false depending on whether the added number is bigger (= a triangle) than the not added number or not

console.log(isTriangle(a, b, c));

//////////////////////////////////////////////////////

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

arr = [1, -4, 7, 12];

function positiveSum(arr) {
  let sum = 0;
  for (const number of arr) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(positiveSum(arr));

// I have to
// 1. get an array without negatives
// 2. check if that array is empty -> return 0
// 3. sum that array and return results

//////////////////////////////////////////////////////

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

const words = "is2 Thi1s T4est 3a";

function order(words) {
  // ...
}
