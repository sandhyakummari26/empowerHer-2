// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`);
console.log(`Line 1\nLine 2\nLine 3`);
const firstName = "John";
const lastName = "Doe";
console.log(`Full name: ${firstName} ${lastName}`);

// 2. Arrow Functions & this
const square = n => n * n;
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); // undefined
const obj2 = {
  value: 50,
  test: function() { console.log(this.value); }
};
obj2.test(); // 50

// 3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
const a = { x: 1 };
const b = { y: 2 };
const mergedObj = { ...a, ...b };
const maxValue = (...nums) => Math.max(...nums);

// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [a_, b_] = arr;
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
const info = {};
console.log(info?.user); // undefined

// 5. Scoping (let/var/const)
for (var i = 0; i < 3; i++) { console.log(i); }
for (let j = 0; j < 3; j++) { console.log(j); }
// const is used for variables that should not be reassigned

// 6. Ternary Operator – Practice
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
const age = 15;
console.log(age >= 18 ? "Adult" : "Minor");
const checkNumber = n => n > 0 ? "Positive" : n === 0 ? "Zero" : "Negative";

// 7. Spread, Rest & Arrays
const nums = [1,2,3];
const newNums = [...nums, 4, 5];
const aArr = ["x", "y"];
const bArr = ["z"];
const combinedArr = [...aArr, ...bArr];
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));

// 8. Object Destructuring & Shorthand
const user1 = { id: 101, status: "active" };
const { id, status } = user1;
const id2 = 101;
const role = "admin";
const user2 = { id: id2, role };
const user3 = {
  id: 101,
  role: "admin",
  greet() { console.log("Hello!"); }
};

// 9. Template Literals (More Practice)
console.log(`Today is ${new Date().toDateString()}`);
const NAME = "Sam";
const SCORE = 80;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

// 10. Arrow Function Shorthands
const add = (a, b) => a + b;
const isAdult = age => age >= 18;
const double = n => n * 2;

// 11. Spread Operator (Arrays & Objects)
const arrClone = [...nums];
const arrWith100 = [100, ...nums];
const objA = { x: 1, z: 1 };
const objB = { y: 2, z: 2 };
const combinedObj2 = { ...objA, ...objB }; // z from objB overwrites objA

// 12. Optional Chaining (More Practice)
const user4 = { name: "Alex", address: { city: "Bangalore" } };
console.log(user4.address?.city);
console.log(user4.job?.title); // undefined
const person = {};
console.log(person.job?.title); // undefined
