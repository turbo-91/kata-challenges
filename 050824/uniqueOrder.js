/* 

I need a function that
- takes a sequence (string or array)
- goes through every element of the sequence in the order
- and checks if the element does not repeate the element before
- if not it adds it to a new array
- if yes it does nothing
- then I return the new array

*/

var uniqueInOrder = function (iterable) {
  let orderedArray = [];
  let lastAdded = null;

  Array.from(iterable).forEach((char) => {
    if (char !== lastAdded) {
      orderedArray.push(char);
      lastAdded = char;
    }
  });

  return orderedArray;
};
