// /** ANCHOR ------------------------------------------------------VARIABLES----------------------------------------------------------  */

// var av = "I am var";
// let bv = "I am let";
// const c = "I am CONST";

// console.log("a:", av);
// console.log("b:", bv);
// console.log("c:", c);

// av = 'I am VAR and I can be modified';
// bv = 'I am LET and I can be modified too';
// // c = 'I am CONST, and no one can change me, I am going to throw error';

// console.log('a:', av);
// console.log('b:', bv);
// console.log('c:', c);

// /**
//  * NOTE: Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, 
//  * meaning that there exist data types, but variables are not bound to any of them.
//  */

// let message = 'open devs';
// message = true;
// console.log(message);

// /**
//  * --------------------NUMBER
//  * NOTE: The number type represents both integer and floating point numbers.
//  */

// let number = 123;
// console.log(number);

// /**
//  * ------------------STRING
//  * NOTE: In JavaScript, there are 3 types of quotes.
//  * Double quotes: "Hello".
//  * Single quotes: 'Hello'.
//  * Backticks: `Hello`.
//  * Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
//  * Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…},
//  */

// let name1 = "Student";
// let rank = 7;
// let str2 = 'Single quotes are ok too';
// let phrase = `My name is ${name1} and my rank is ${rank}`; // backtick
// console.log(name1);
// console.log(str2);
// console.log(phrase);

// let name2 = "John";
// // embed a variable
// console.log(`Hello, ${name2}!`); // Hello, John!
// // embed an expression
// console.log(`the result is ${1 + 2}`); // the result is 3
// console.log("the result is ${1 + 2}"); // the result is ${1 + 2}

// /**
//  * -------------------BOOLEAN
//  * NOTE: The boolean type has only two values: true and false.
//  */

// let nameFieldChecked = true;
// console.log(nameFieldChecked); // true
// let isGreater = 4 == 4;
// console.log(isGreater); // true (the comparison result is "yes")

// /**
//  * -------------------NULL
//  * NOTE: It forms a separate type of its own which contains only the null value.
//  * It’s just a special value which represents “nothing”, “empty” or “value unknown”.
//  */

// let age = null;
// console.log(age);

// /**
//  * -------------------undefined
//  * NOTE: The meaning of undefined is “value is not assigned”.
//  * If a variable is declared, but not assigned, then its value is undefined.
//  */


// let age1;
// console.log(age1); // shows "undefined"

// let age2 = 100;
// // change the value to undefined
// age2 = undefined;
// console.log(age2); // "undefined"

// /**
//  * -------------------Object
//  * NOTE: The object type is special.
//  * All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever).
//  * In contrast, objects are used to store collections of data and more complex entities.
//  */


// /**
//  * -------------------TYPEOF
//  * NOTE: The typeof operator returns the type of the argument.
//  * It’s useful when we want to process values of different types differently or just want to do a quick check.
//  * It supports two forms of syntax:
//  * As an operator: typeof x.
//  * As a function: typeof(x).
//  * The call to typeof x returns a string with the type name:
//  */
// console.log(typeof undefined) // "undefined"
// console.log(typeof 0) // "number"
// console.log(typeof false) // "boolean"


// /** ANCHOR ------------------------------------------------------ARRAYS----------------------------------------------------------  */
// /*
// NOTE: There are two syntaxes for creating an empty array:
// let arr = new Array();
// let arr = [];
// */
// let fruits = ["Apple", "Mango", "Orange"];
// console.log(fruits);
// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Mango
// console.log(fruits[2]); // Orange

// // We can replace an element:
// fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
// console.log(fruits);

// // …Or add a new one to the array:
// fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
// console.log(fruits);

// // The total count of the elements in the array is its length:
// console.log(fruits.length); // 4

// // An array can store elements of any type.
// let tempArr = [1, 'Student', 'opendevs', true];
// console.log(tempArr);

// /**
//  * Array Methods:
//  * push: adds an element to the end.
//  * pop: takes an element from the end.
//  * shift: Extracts the first element of the array and returns it.
//  * unshift: Add the element to the beginning of the array.
//  * length: Access the length of the array.
//  * delete: Changes the element to undefined.
//  *** Using delete may leave undefined holes in the array. Use pop() or shift() instead.
//  *** Methods push and unshift can add multiple elements at once:
//  */

// // push
// let fruits1 = ["Apple", "Orange"];
// fruits1.push("Pear");
// console.log(fruits); // Apple, Orange, Pear

// // pop
// let fruits2 = ["Apple", "Orange", "Pear"];
// console.log(fruits2.pop()); // remove "Pear"
// console.log(fruits2); // Apple, Orange

// // Methods that work with the beginning of the array: 
// // shift
// let fruits3 = ["Apple", "Orange", "Pear"];
// console.log(fruits3.shift()); // remove Apple
// console.log(fruits3); // Orange, Pear

// // unshift
// let fruits4 = ["Orange", "Pear"];
// fruits4.unshift('Apple');
// console.log(fruits4); // Apple, Orange, Pear

// // delete
// let fruits5 = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits5[2]; // Changes the first element in fruits5 to undefined
// console.log(fruits5);


// /** ANCHOR ------------------------------------------------------OBJECTS----------------------------------------------------------  */
// /**
//  * NOTE: objects are used to store keyed collections of various data and more complex entities.
//  * An object can be created with figure brackets {…} with an optional list of properties.
//  * A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
//  * An empty object (“empty cabinet”) can be created using one of two syntaxes:
//  * let user = new Object(); // "object constructor" syntax
//  * let user = {};  // "object literal" syntax
//  */

// // In the user object, there are two properties:
// // The first property has the name "name" and the value "John".
// // The second one has the name "age" and the value 30.
// let user = { // an object
//     name: "John", // by key "name" store value "John"
//     age: 30 // by key "age" store value 30
// };

// // We can add, remove and read files from it any time.
// // Property values are accessible using the dot notation or []
// // get property values of the object:
// console.log(user.name); // John
// console.log(user.age); // 30

// // The value can be of any type. Let’s add a boolean one:
// user.isAdmin = true;
// console.log(user);

// // To remove a property, we can use delete operator:
// delete user.age;
// console.log(user);

// // We can also use multiword property names, but then they must be quoted:
// let user1 = {
//     name: "John",
//     age: 30,
//     "likes birds": true // multiword property name must be quoted
// };

// /**
//  * NOTE: Please note: an object declared as const can be modified.
//  * The const would give an error only if we try to set user=... as a whole.
//  */

// const user2 = {
//     name: "John"
// };
// user2.name = "Pete"; // It might seem that the line (*) would cause an error, but no. The const fixes the value of user, but not its contents.
// console.log(user2.name); // Pete


// const obj1 = {
//     name: "Student",
//     rank: 7,
//     std: "B. Tech",
//     friends: ["Student2", "Student"],
//     "best friend": "open devs",
//     "favrt book": "Maths"
// }
// // obj1 = "Student" // Not allowed as obj1 is const
// console.log(obj1)

/** ANCHOR ------------------------------------------------------OPERATORS----------------------------------------------------------  */

// // NOTE: guess some examples?
// console.log('1' + 2);
// console.log(2 + 2 + '1');
// console.log(6 - '2');
// console.log('6' / '2');

// // NOTE: exponential operators
// console.log(4 ** (1 / 2));

// // NOTE: assignment operators
// let a = 1;
// let b1 = 2;
// let c1 = 3 - (a = b1 + 1);
// console.log(a);
// console.log(c1);

// // NOTE: Increment decrement operators
// let counter = 2;
// counter++ // works the same as counter = counter + 1, but is shorter
// console.log(counter);

// let counter1 = 2;
// counter1--; // works the same as counter1 = counter1 - 1, but is shorter
// console.log(counter1);

// let counter2 = 1;
// let a1 = ++counter2; // (*) counter2 + 1
// console.log(a1);

// let counter3 = 1;
// let a2 = counter3++ // (*) counter;
// // counter = counter + 1;
// console.log(a2);

// NOTE: Boolean operators
// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 != 1);

// let result = 5 > 4; // assign the result of the comparison
// console.log(result);

// console.log(true == 1);
// console.log(false == 0);

// let a3 = 0;
// console.log(Boolean(a3));
// let b = "0";
// console.log(Boolean(b));
// console.log(a3 == b);

// console.log(0 == false);
// console.log('' == false);
// console.log(null == undefined);

// console.log(0 === false);
// console.log(0 === "0");
// console.log(null === undefined);

// // NOTE: Logical operators
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// console.log(!true);
// console.log(!0)

/** ANCHOR ------------------------------------------------------CONDITIONALS----------------------------------------------------------  */
// let year = 2015;

// if (year < 2015) {
//     console.log('Too early...');
// } else if (year > 2015) {
//     console.log('Too late');
// } else {
//     console.log('Exactly!');
// }

// let accessAllowed = (year >= 2015) ? true : false;
// console.log(accessAllowed);

// const expr = 'Mangoes';
// switch (expr) {
//     case 'Oranges':
//         console.log('Oranges are $0.59 a pound.');
//         break;
//     case 'Mangoes':
//         // console.log('Mangoes are $2.79 a pound.');
//         // break;
//     case 'Papayas':
//         console.log('Mangoes & Papayas are $2.79 a pound.');
//         // expected output: "Mangoes and papayas are $2.79 a pound."
//         break;
//     default:
//         console.log(`Sorry, we are out of ${expr}.`);
// }

/** ANCHOR ------------------------------------------------------LOOPS----------------------------------------------------------  */

/**
 * --------------------WHILE Loop
 * NOTE: While the condition is truthy, the code from the loop body is executed.
 */

// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//     console.log(i);
//     i++;
// }

/**
 * --------------------DO-WHILE Loop
 * NOTE: The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
 */
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// /**
//  * --------------------FOR Loop
//  * NOTE: The for loop is more complex, but it’s also the most commonly used loop.
//  * for (begin; condition; step) {
//  *   // ... loop body ...
//  * }
//  */
// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//     console.log(i);
// }

// for (;;) {
//     // repeats without limits
//     console.log('hey');
// }

// break keyword
// let sum = 0;

// while (true) {
//     let value = +prompt("Enter a number", '');
//     if (!value) break;
//     sum += value;
// }
// console.log('Sum: ' + sum);

// continue keyword
// for (let i = 0; i < 10; i++) {
//     // if true, skip the remaining part of the body
//     if (i % 2 === 0) continue;
//     console.log(i); // 1, then 3, 5, 7, 9
// }

// let fruits2 = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < fruits2.length; i++) {
//     console.log(fruits2[i]);
// }

// for (let i of fruits2) {
//     console.log(i);
// }

// let user1 = {
//     name: "John",
//     age: 30,
//     "likes birds": true
// };

// for (let i in user1) {
//     console.log(i, user1[i]);
// }