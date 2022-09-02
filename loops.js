


// Loop - repeating a task again and again, for a particular condition.

// for loop
// syntax - 
// for (let var ; condition; increament/decreament opertion){
//     executable code;
// }

// example - 1
// for(let i = 1; i<61; i++){
//     console.log(i);
// }

// example - 2
// let shoppingList = ['Milk', 'Butter', 'Coffee', 'Notebook', 'Pen'];
// for(let i=0; i<shoppingList.length; i++){
//     console.log(shoppingList[i]);
// }

// example - 3
let players = [ {name : "Nithesh",  email : "nithesh@gmail.com"}, 
                {name : "Prerit",   email : "prerit@gmail.com"},
                {name : "Rohit",    email : "rohit@gmail.com"},
                {name : "Soham",    email : "sohham@gmail.com"},
                {name : "Prasanth", email : "prasanth@gmail.com"},
                {name : "Nisha",    email : "nisha@gmail.com"},
                {name : "Harsha",   email : "harsha@gmail.com"},
                {name : "Priya",    email : "priya@gmail.com"},
                {name : "Raja",     email : "raja@gmail.com"},
                {name : "Subham",   email : "subham@gmail.com"}
]

for(let i=0; i<players.length; i++){
    console.log(players[i].name);
}