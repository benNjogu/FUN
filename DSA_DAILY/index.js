//1. Adding two numbers
const sumOfTwoNumbers = (a, b) => a + b;

//2.0 finding the maxmum number in an array
let a = [3, 5, 7, 8, 9];
const maxNumber = (a) => Math.max(...a);

console.log(maxNumber(a));

//2.1 alternatively
let b = [3, 5, 24, 7, 8, 9, 13, 39];

const maxOfB = (b) => {
  let maxNum = 0;
  for (let i = 0; i < b.length; i++) {
    maxNum = maxNum >= b[i] ? maxNum : b[i];
  }

  return maxNum;
};

console.log('b', maxOfB(b));
