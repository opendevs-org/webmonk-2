// Higher Order function to run a function on provided input
const mapForEach = (arr, fn) => {
  for (let i of arr) {
    console.log(fn(i));
  }
  return;
};

// A function to return length of string
const calcLengthString = str => `${str} ==> ${str.length}`;

// A array containing string
const strArray = ['Chandler', 'Joey', 'Phoebe', 'Ross', 'Monica', 'Rachel'];

// Passing the array & function to run to the mapForEach function as parameters
mapForEach(strArray, calcLengthString) // HOC (Higher Order Function)