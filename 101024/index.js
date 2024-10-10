// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

let names = ["Torben", "Alex", "Jacob", "Mark", "Max"];

function likes(names) {
  if (names.length === 0) {
    return `no one likes this`;
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

console.log(likes(names));

////////////////////////////////////////

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

let data = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

function openOrSenior(data) {
  let output = data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return "Senior";
    } else return "Open";
  });
  return output;
}

console.log(openOrSenior(data));

///////////////////////////////////////////

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

let time = 3;

function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(time));

////////////////////////////////////////////////////////////////

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// I have to iterate over the array and compare the number with the previous number

function sumTwoSmallestNumbers(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[0] + sortedNumbers[1];
}

////////////////////////////////////////////////////////////////

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

let s = "test";

function getMiddle(s) {
  if (s.length === 1) {
    return s;
  }
  if (s.length % 2 === 0) {
    let indexA = Math.floor((s.length + 1) / 2);
    let indexB = indexA - 1;
    return s[indexB] + s[indexA];
  } else {
    let index = (s.length + 1) / 2 - 1;
    let letters = s.split("");
    return letters[index];
  }
}

console.log(getMiddle(s));
