
// //array
// let hobbies = ['cricket', 'cooking', 'coding'];
// console.log(hobbies);       // output - (3) ['cricket', 'cooking', 'coding']

// //fetching
// console.log(hobbies[0]);    // output - cricket
// console.log(hobbies[2]);    // output - coding


// // adding element in array
// // push method of array
// hobbies.push('reading');
// hobbies.push('teaching');
// console.log(hobbies);       // output - (5) ['cricket', 'cooking', 'coding', 'reading', 'teaching']



// //now our array 'hobbies' is containing 5 values - ['cricket', 'cooking', 'coding', 'reading', 'teaching']


// //removing element from the end of the array
// // pop method of array
// hobbies.pop();             // last item 'teaching' got removed
// console.log(hobbies);      // output - (4) ['cricket', 'cooking', 'coding', 'reading']

// // console.log(hobbies.pop());  // --> to display the popped element we need to write like this


// Splice method in Array
// splice method is used to remove single/multiple items from specified index in any Array.
// splice method is also used to add single/multiple items at specified index in any Array.
// syntax - 
// Array.splice(index, numbers, adding elements(optional) )
// index - from which index splice operation should be executed
// numbers - number of items to be removed
// adding elements - give the elements that are to be added (optional)

// example 1 - to remove first element form the array
// this is our current array, hobbies - ['cricket', 'cooking', 'coding', 'reading']
// hobbies.splice(0, 1);     // first item 'cricket' got removed
// console.log(hobbies);     // (3) ['cooking', 'coding', 'reading']


// example 2 - to remove the second element form the array
// let our array be again, hobbies - ['cricket', 'cooking', 'coding', 'reading']
// hobbies.splice(1, 1);     // second item 'cooking' got removed
// console.log(hobbies);     // (3) ['cricket', 'coding', 'reading']


// example 3 - to remove first two elements from the array
// let our array be again, hobbies - ['cricket', 'cooking', 'coding', 'reading']
// hobbies.splice(0, 2);  // first two items got removed
// console.log(hobbies);  //(2) ['coding', 'reading']


// example 4 - remove first item and add a new element
// let our array be again, hobbies - ['cricket', 'cooking', 'coding', 'reading']
// hobbies.splice(0, 1, 'singing');  //first item got removed and the new item added in its place
// console.log(hobbies);  //(4) ['singing', 'cooking', 'coding', 'reading']


// example 5 - no need to remove anything just add a new element in 0 index.
// let our array be again, hobbies - ['cricket', 'cooking', 'coding', 'reading']
// hobbies.splice(0, 0, 'hockey');// no deletion,but a new value got added in the array at specified index '0'.
// // when we don't want to delete any item from the array, we keep the value of 2nd argument in splice as '0'.
// console.log(hobbies)  //(5) ['hockey', 'cricket', 'cooking', 'coding', 'reading']


// example 6 - another example of adding items at 3 index.
// let our array be again, hobbies - ['cricket', 'cooking', 'coding', 'reading']
// hobbies.splice(3,0,'football', 'tennis');  // 2 values got added from 3rd index onwards
// // new values are always added in the specified index onwards.
// console.log(hobbies);  // (6) ['cricket', 'cooking', 'coding', 'football', 'tennis', 'reading']


// to display the output in table format in console, we write - 
// console.table(hobbies);


// updating any element in an array
// let our array be again, hobbies - ['cricket', 'cooking', 'coding', 'reading']
// want to update 'coding' to 'codekaro'
// hobbies[2] = 'codekaro';
// console.log(hobbies);  //(4) ['cricket', 'cooking', 'codekaro', 'reading']  - updated array


//---------------------------------------------------------------------------------------------------------


// Objects in JS - are  basically key-value pairs.

//basic syntax
// let obj = {
//     key1 : "value1",  // every key in object is separated by comma
//     key2 : 12345
// }
// console.log(obj);  //output - {key1: 'value1', key2: 12345}
 

// //example 1
// let users = {
//     name : "Nithesh",
//     email : "nithesh@gmail.com",
//     contact : 9876543210
// }
// console.log(users);  // output - {name: 'Nithesh', email: 'nithesh@gmail.com', contact: 9876543210}

// // to access any particular value in object
// console.log(users.email);

// // to update any particular value in object
// users.name = "Nithesh Kumar";
// console.log(users);  // output - {name: 'Nithesh Kumar', email: 'nithesh@gmail.com', contact: 9876543210}

// //to add a new item pair in object
// users.address = "Karnataka";
// console.log(users);  // output - {name: 'Nithesh Kumar', email: 'nithesh@gmail.com', contact: 9876543210,      address: 'Karnataka'}

// // to delete any particular item in object
// delete users.contact;
// console.log(users);  // output - {name: 'Nithesh Kumar', email: 'nithesh@gmail.com', address: 'Karnataka'}



// ------------------------------------------------------------------------------------------------------------

// // array inside object

// let hobbies = ['cricket', 'cooking', 'coding', 'reading']
// let users = {
//     name : "Nithesh",
//     email : "nithesh@gmail.com",
//     contact : 9876543210
// }

// users.hobbies = hobbies;  // here we are creating a key with name hobbies in L.H.S and assigning the array,   hobbies that we have already created, in R.H.S. This will create a new element for the object.
// console.log(users);  // output - {name: 'Nithesh', email: 'nithesh@gmail.com', contact: 9876543210, hobbies: Array(4)}
// // output when expanded - 
// // contact: 9876543210
// // email: "nithesh@gmail.com"
// // hobbies: (4) ['cricket', 'cooking', 'coding', 'reading']
// // name: "Nithesh"

// //to access array element inside object - 
// console.log(users.hobbies)  // output - (4) ['cricket', 'cooking', 'coding', 'reading']

// // to access any element from the array inside any object
// console.log(hobbies[2]);  // output - coding  (third element of the array)



// ------------------------------------------------------------------------------------------------------------

// // objects in an array - k/a array of objrcts


// let arr = [ {name : "Nithesh",  email : "nithesh@gmail.com"}, 
//             {name : "Prerit",   email : "prerit@gmail.com"},
//             {name : "Rohit",    email : "rohit@gmail.com"},
//             {name : "Soham",    email : "sohham@gmail.com"},
//             {name : "Prasanth", email : "prasanth@gmail.com"}
// ]

// console.log(arr);  // output - (5) [{…}, {…}, {…}, {…}, {…}]
// // after expanding the output - 
// // (5) [{…}, {…}, {…}, {…}, {…}]
// // 0: {name: 'Nithesh', email: 'abc@gmail.com'}
// // 1: {name: 'Prerit', email: 'prerit@gmail.com'}
// // 2: {name: 'Rohit', email: 'rohit@gmail.com'}
// // 3: {name: 'Soham', email: 'sohham@gmail.com'}
// // 4: {name: 'Prasanth', email: 'prasanth@gmail.com'}
// // length: 5
// // [[Prototype]]: Array(0)

// // to access the first element of the array
// console.log(arr[0]);  // output - {name: 'Nithesh', email: 'nithesh@gmail.com'}

// // to access any particular value - 
// console.log(arr[0].name);  // output - Nithesh

// // adding a new object in the array
// // first creating the object and then pushing it in array
// let user = {name : "Harsha", email : "harsha@gmail.com"};
// arr.push(user);
// console.log(arr);  // output - (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// // after expanding the output - 
// // (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// // 0: {name: 'Nithesh', email: 'nithesh@gmail.com'}
// // 1: {name: 'Prerit', email: 'prerit@gmail.com'}
// // 2: {name: 'Rohit', email: 'rohit@gmail.com'}
// // 3: {name: 'Soham', email: 'sohham@gmail.com'}
// // 4: {name: 'Prasanth', email: 'prasanth@gmail.com'}
// // 5: {name: 'Harsha', email: 'harsha@gmail.com'}

// // arr.push({name: "Subham", email: "subham@gmail.com"});  -  this single line will also work
// // console.log(arr)


// -----------------------------------------------------------------------------------------------------------

// // Small application - Lucky Draw Winners

// // Here we are using an inbuilt JS function - Math.random()
// // Math.random() - always gives a random number within the range (0 to 1, decimal values which are less than 1 but greater than 0.)
// // Now, to get the single digit, we just need to multiply it by 10 and to remove the values after decimal we will use Math.floor() inbuilt JS function, which always returns the floor value.

// let players = [ {name : "Nithesh",  email : "nithesh@gmail.com"}, 
//             {name : "Prerit",   email : "prerit@gmail.com"},
//             {name : "Rohit",    email : "rohit@gmail.com"},
//             {name : "Soham",    email : "sohham@gmail.com"},
//             {name : "Prasanth", email : "prasanth@gmail.com"},
//             {name : "Nisha",    email : "nisha@gmail.com"},
//             {name : "Harsha",   email : "harsha@gmail.com"},
//             {name : "Priya",    email : "priya@gmail.com"},
//             {name : "Raja",     email : "raja@gmail.com"},
//             {name : "Subham",   email : "subham@gmail.com"}
// ]

// // let winner = Math.floor((Math.random())*10);  // this will always give a single digit num (between 0-9)
// // console.log(players[winner]);

// // if the number of elements in array is not 10, can be anything.

// let lengthOfArray = players.length;
// winner = Math.floor((Math.random())*lengthOfArray);  // this will always generate value which is less than the length of array.
// console.log(players[winner].name);




// changing num to binary
let num = 5;
let binary = num.toString(2); // this toString(2) will convert it into binary form.
console.log(binary);









