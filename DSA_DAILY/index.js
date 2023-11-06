//1. Adding two numbers
const sumOfTwoNumbers = (a, b) => a + b;

//2.0 finding the maxmum number in an array
let a = [3, 5, 7, 8, 9];
const maxNumber = (a) => Math.max(...a);

console.log(maxNumber(a));

//2.1 alternatively (my way)
let b = [3, 5, 24, 7, 8, 9, 13, 39];

const maxOfB = (b) => {
  let maxNum = 0;
  for (let i = 0; i < b.length; i++) {
    maxNum = maxNum >= b[i] ? maxNum : b[i];
  }

  return maxNum;
};

console.log('b', maxOfB(b));

//3.0 pallindrome (my way)
let _string = ' was it a car or a cat i saw';

const isPallidrome = (_str) => {
  let stack = [];
  let que = [];

  for(let i = 0; i < _str.length; i++) {
    stack.push(_str[i])
    que.unshift(_str[i]);
  }

  for(let j=0; j<_str.length; j++){
    if(stack[j] !== que[j]) return false;
    else return true;
  }
}

if(isPallidrome(_string.toLowerCase().trim())) console.log(_string, ' is a pallidrome');
else console.log(_string, ' is not a pallidrome');

//3.1 Their way
let _str = '[({[]})]';

const pallid = (str) => str === str.split('').reverse().join('');

console.log(pallid(_str.toLowerCase().trim()));

//4.0 to reverse a given string
const reverseString = (str) => {
  return str.split('').reverse().join('')
}

console.log(reverseString('Hello'));

//5.0 valid parenthesis problem
const isValid = (str) => {
  const stack = [];
  const chars = {')': '(', ']': '[', '}': '{'};

  for(const char of str) {
    if(!chars[char]) {
      stack.push(char);
    } else if(stack.pop() !== chars[char]) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid('first', '[()]{}{[()()]()}'));
console.log(isValid('second', '[()]{}'));

//6.0 Take an array and return a new array with only the even numbers
// my way
let array = [14, 3, 7, 8, 9, 11, 98, 7, 112];

const evenArray = (arr) => {
  let evenNums = [];
  for (let i = 0; i < array.length; i++) {
    if (arr[i] % 2 === 0) evenNums.push(arr[i]);
  }

  return evenNums;
};

// their way
const _evenArray = (arr) => {
  return arr.filter((i) => i % 2 === 0);
};

console.log('even array: ', _evenArray(array));


// factorial
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));

//Prime number
const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log('prime', isPrime(2));

//Finding the largest element in a nested array
let nested_array = [
  [1, 2, 3],
  [2, 8, 4],
  [4, 5, 6],
];

const findLargestInNested = (array) => {
  let largest_num = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > largest_num) {
        largest_num = array[i][j];
      }
    }
  }

  return largest_num;
};

console.log('largest', findLargestInNested(nested_array));