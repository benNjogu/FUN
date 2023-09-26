const foo = { name: 'Tom', age: 30, nervous: false };
const bar = { name: 'Dick', age: 40, nervous: true };
const baz = { name: 'Harry', age: 50, nervous: false };

//Bad code 💩
//part a: logging stuff
console.log(foo);
console.log(bar);
console.log(baz);

//Good code ✅
//part a: logging stuff
//Using computed property names(can add variables to an object)
console.log({ foo, bar, baz }); //-> {foo: {…}, bar: {…}, baz: {…}}

console.log('%c My Friends', 'color: red; font-weight: bold;'); //-> My Friends

// console.table([foo, baz, table]);

//console.time
console.time('looper');
let i = 0;
while (i < 1000000) {
  i++;
}

console.timeEnd('looper'); //-> looper: 4.855712890625 ms

const deleteMe = () => console.trace('bye bye database');
deleteMe();
deleteMe();
