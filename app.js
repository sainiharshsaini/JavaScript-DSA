// process.stdout.write("Hello Harsh") // it is the function of node environment if nodejs is not installed in your machine, it will not work

// let a = prompt("Enter a Number") // it will give the output in the console window in the browser
// console.log(a);

let prompt = require('prompt-sync')(); // we have to install the prompt-sync package to run the user prompt input in the terminal

let n = prompt('How many more times? ');
process.stdout.write(n)
