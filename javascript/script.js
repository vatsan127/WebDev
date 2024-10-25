console.log("Hello World");

/*
let - block-scoped, can be reassigned.
const - block-scoped, cannot be reassigned.
*/

let index = 10;
const month = "October";
console.log("month : ", month, "index : ", index);

/*
Data Types

Primitive Types: String, Number, Boolean, Null, Undefined.
Reference Types: Object, Array, Function.
*/

/*
Operators

Arithmetic Operators: +, -, *, /, %.
Assignment Operators: =, +=, -=, *=, /=.
Comparison Operators: ==, ===, !=, !==, >, <, >=, <=.
Logical Operators: && (AND), || (OR), ! (NOT).
*/

/* Conditional Statements */

console.log('--- If Statement ---');
if (index < 6) {
    console.log("Summer Season");
} else {
    console.log("Rainly Season");
}

console.log('--- Switch Statement ---');
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Another day");
}

/*  Loops (Iterations) */

console.log('--- For Loop ---');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('--- While Loop ---');
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

console.log('--- Do While Loop ---');
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);


/* Functions */
function namedFunc(name) {
    console.log(`Hello, ${name}!`);
}

namedFunc("srivatsan");


let anonymousFunc = function (name) {
    return `Hello, ${name}!`;
};
console.log(anonymousFunc("steve"));

const arrowFunc = (name) => `Hello, ${name}!`;
console.log(arrowFunc("steve"));


/* Arrays */
console.log('--- Arrays ---');
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]);

let numbers = [1, 2, 3, 4, 5, 6];

// map
let double = numbers.map(num => num * 2);
console.log("double: " + double);

// filter
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("evenNumbers: " + evenNumbers);

// reduce
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce: " + sum);

// find - returns the first element that satisfies the condition
let findNumber = numbers.find(num => num > 3);
console.log("findNumber: " + findNumber);

// findIndex - returns the index of first element that satisfies the condition
let firstIndex = numbers.findIndex(num => num > 3);
console.log("firstIndex: " + firstIndex);

/* Objects */
console.log('--- Objects ---');
let person = {
    name: "steve",
    age: 22
}

console.log("person name: " + person.name);
console.log("person age: " + person['age']);

// Loop keys in Objects
console.log("--- Loop Objects ---");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}