/** ANCHOR ------------------------------------------------------FUNCTIONS AND SCOPES---------------------------------------------------------- */
/**
 * Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
 * We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). 
 * But we can create functions of our own as well.
 */

function showMessage(sessionNumber) {
    console.log(`Hello everyone to Session: ${sessionNumber}!`);
}
showMessage(5);

// Local variables
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
    console.log(message);
}
showMessage(); // Hello, I'm JavaScript!
console.log(message); // <-- Error! The variable is local to the function

// Outer variables
let userName = 'John';

function showMessage() {
    // let message = 'Hello, ' + userName;
    let message = `Hello, ${userName}`;
    console.log(message);
}
showMessage(); // Hello, John

// *** The function has full access to the outer variable. It can modify it as well.
let userName = 'John'; // Outer variable

function showMessage() {
    userName = "Bob"; // (1) changed the outer variable
    let message = 'Hello, ' + userName; // Inner variable 
    alert(message);
}
console.log(userName); // John before the function call
showMessage();
console.log(userName); // Bob, the value was modified by the function

/**
 * The outer variable is only used if there’s no local one.
 * If a same-named variable is declared inside the function then it shadows the outer one.
 * For instance, in the code below the function uses the local userName. The outer one is ignored:
 */

let userName = 'John';

function showMessage() {
    let userName = "Bob"; // declare a local variable
    let message = 'Hello, ' + userName; // Bob
    console.log(message);
}
// the function will create and use its own userName
console.log(userName);
showMessage();
console.log(userName); // John, unchanged, the function did not access the outer variable

// One Use Case
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let age = +prompt('How old are you?', 18);
if (checkAge(age)) {
    alert('Access granted');
} else {
    alert('Access denied');
}

// ANCHOR -----------------Arrow function

const sum = (a, b) => a + b;
alert(sum(1, 2)); // 3

const sayHi = () => alert("Hello!");
sayHi();

let sum = (a, b) => { // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};
alert(sum(1, 2)); // 3

/**
 * ANCHOR Web Storage
 * Syntax for SAVING data to localStorage: localStorage.setItem("key", "value");
 * Syntax for READING data from localStorage: let lastname = localStorage.getItem("key");
 * Syntax for REMOVING data from localStorage: localStorage.removeItem("key");
 */

localStorage.setItem('test', 'student');
localStorage.setItem('test2', 1);
const object = {
    name: 'student',
    age: 25,
    college: 'MCKVIE'
};
localStorage.setItem('test3', JSON.stringify(object));
console.log(localStorage.getItem('test'));
console.log(localStorage.getItem('test2'));
console.log(+localStorage.getItem('test2'));
console.log(localStorage.getItem('test3'));
console.log(JSON.parse(localStorage.getItem('test3')));

// localStorage.removeItem('test2');
// localStorage.clear();
// console.log(localStorage.key(0))

console.log(localStorage.length);
console.log(Object.keys(localStorage));

sessionStorage.setItem('test', 1);
console.log(sessionStorage.getItem('test'));

/**
 * ANCHOR JS EVENTS
 */

function sayHello() {
    console.log("Hello World")
}

function keydownevent(event) {
    console.log("Pressed a key", event);
}

window.onload = () => {
    console.log('Webpage has loaded');
}

window.onresize = (event) => {
    console.log('Page resized', event);
}