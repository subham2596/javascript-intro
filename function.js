


// Functions in JS
// Function is a block of code to get a desired output.
// If any particular functionality is used multiple times in a program or multiple program, instead of writing the entire logic again and again, we just write it once and call it whenever needed.
// Function helps to decreease the redundancy.
// Function may or may not contain arguments.
// We need to call the function after declaration to get the functionality of the function.
// If we have declared the function with arguments, it is mandatory to pass same number of parameters while calling the same function.

// Syntax of writing function - 
// function functionName( args ){      //function declaration
//     executable statements;
//     executable statements;
// }
// functionName( parameters );         //function call


// example - 1
// function grinder(items){
//     console.log("Grinding...", items)
// }
// grinder("tomatoes");  // Grinding... tomatoes
// grinder("potatoes");  // Grinding... potatoes


// example - 2
// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(2,3);  // 5
// add(22,23); // 45

// calculate the TDS => govt => TDS is 10%
// function calculateTDS(salary){
//     let tds = salary * 0.1;
//     console.log(tds);
// }
// calculateTDS(34500);
// calculateTDS(89700);

// when we want to use the function output outside the function, we use return statement to get and use the value ouside of the function.
// function calculateTDS(salary){
//     let tds = salary * 0.1;
//     return tds;
//     // console.log(tds);
// }
// let outTDS = calculateTDS(40000); // storing the calculated value in a variable outside of the function.
// console.log(outTDS);


// general function syntax
// function functionName(args){
//     code;
// }

// arrow function - modern approach of writing functions. recommended way.
// arrowFunctionName = (args) => {
//     code;
// }

// example - 1
// cube = (num) => {
//     console.log(num * num * num);
// }
// cube(2);  // 8
// cube(3);  // 27


// cube = (num) => {
//     return(num * num * num);
// }
// console.log(cube(2));  // 8
// console.log(cube(3));  // 27

// // even if you have only one line fo executable statement inside the function, we can ommit the curly braces as well.
// cube = (num) => num * num * num;  // this acts as return statement on its own. only for one line of code.
// console.log(cube(5));
// // (For multiple executable statements inside function block, we cannot write like that.)
