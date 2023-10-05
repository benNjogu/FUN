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
