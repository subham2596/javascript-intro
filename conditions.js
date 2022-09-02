


// if - else

// let age = 20;
// if (age > 18){
//     console.log("You are eligible to vote.");
// }

// else{
//     console.log("You are not eligible to vote.");
// }


// if - else if - else

// let weather = 'sunny';

// if (weather == 'rainy'){
//     console.log("take an umbrella.")
// }

// else if (weather == 'sunny'){
//     console.log("take sunglasses.")
// }

// else if (weather == 'cold'){
//     console.log("take a jacket.")
// }

// else{
//     console.log("It's a beautiful day!")
// }


// About = / == / === 

// '='   - means assignment operator - when we are assigning any value to any variable.
// '=='  - means equivalent operator - when we campare only values of variables.
// '===' - means strict equivalent operator - when we compare both value and datatype of variables.
// It is recommended to use '===' / strictly equal operator while comparing the variables, for better results.


// let age = '18';

// if (age == 18){
//     console.log("checking for ==");
//     console.log(" works fine")
// }
// else{
//     console.log("checking for ==");
//     console.log("error - datatype not matched")
// }

// //--------------------------------------------------

// if (age === 18){
//     console.log("checking for ===");
//     console.log(" works fine")
// }
// else{
//     console.log("checking for ===");
//     console.log("error - datatype not matched")
// }


// Ternary Operator
// syntax - 
// condition ? (statement when true) : (statement when false)
// ? - means if
// : - means else

// example -
// let age = 28;
// let drink = age>18 ? "beer" : "juice";
// console.log(drink)  // output - beer

// nesting of ternary operator - further conditions are added in the false clause always.

// let role = 2;
// let userRole = role == 0 ? "Student" : role == 1 ? "Teacher" : role == 2 ? "Admin" : "Invalid User";
// console.log(userRole);


// Logical Operators &&, ||, !

// let age = 29;
// if (age > 18 && age < 24){
//     console.log("Inside the range.")
// }
// else{
//     console.log("Outside the range.")
// }


// let friend = "Ruchika";
// if (friend == "Nisha" || friend == "Ruchi" || friend == "Ruchika"){
//     console.log("I will be there in the party.")
// }
// else{
//     console.log("I will not be there in the party.")
// }

