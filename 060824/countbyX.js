// INSTRUCTION //

// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

// MY THOUGHTS //

/*  I need a function that

1. takes the amount n to determine how many multiples are being produced
2. multiplys x as many times with n+1 until enough multiples are produced
3. stores these result in an array

*/

function countBy(x, n) {
  let z = [];
  for (let counter = 1; counter <= n; counter++) {
    let element = x * counter;
    z.push(element);
  }
  return z;
}
