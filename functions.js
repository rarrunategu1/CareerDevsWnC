//FUNCTIONS ARE JUST RECIPES

makeTurkeySandwich
    Get one slice of bread.
    Add turkey.  
    Put a slice of bread on top.  
    
// to turn this recipe into a function add the following:
// note that all the periods became semi colons
// remember parenthesis first then "brace" your hands around the ingredients
function makeTurkeySandwich() {
    Get one slice of bread;
    Add turkey; 
    Put a slice of bread on top;  
}


// to make the turkey sandwich or run the function do the following
// to run all the steps in your function.  
makeTurkeySandwich()



//CUSTOMIZING FUNCTIONS


makeTurkeySandwich
    Get one slice of bread.
    Add turkey.  
    Put a slice of bread on top.  
// using the above recipe from the last lesson, change it to this:
makeSandwichWith ____
    Get one slice of bread.  
    Add ____.  
    Put a slice of bread on top.  
//update the function like so:
function makeSandwichWith(filling) {
    Get one slice of bread;
    Add filling;
    Put a slice of bread on top:
}

makeTurkeySandwich()
//note the "filling" is a variable which would stand for what you
//want to add inside of the sandwich. Note that when making the function
//what's inside of the parenthesis is called parameters.

//makeTurkeySandwich() would turn into this:
makeSandwichWith(ham)
//when using this function the thing inside the parenthesis is called arguments.

//we used functions like the one above before with console.log

console.log('My Todos', todos)

//it's the same thing.  Console.log allows us to control
//what the function prints out.  The makeSandwichWith function
//allows us to tell the code what kind of sandwich to make
//by having the "ham" variable that should have been previously
//created.  To use text instead make sure to use quotation marks.

//A little more on customizing a function
function sayHiTo(person) {
    console.log('hi', person);
}
//to use this function do the following:
sayHiTo('gordon')
//which prints out "hi gordon"
//the "person" parameter is being set to "gordon"
//The above is a value passed into the function.
//Once it's given a value then it returns hi gordon.

//IT SHOULD HAVE A FUNCTION TO DISPLAY TODOS

var todos = ['item 1', 'item 2', 'item 3']
//then outline structure of functions like so:
function functionaName() {
    
}
//to write multiple lines in the braces hit "SHIFT ENTER" or it wont work.
//let's use the following todo function:

function displayTodos() {
    console.log('My Toos:', todos);
}
//Once you hit enter after that, Javascript will know abou the function.
// right after that function enter
displayTodos()
//Once yoou hit enter, javascript will run the code for you.

//FUNCTION TO ADD NEW TODOS

function addTodo() {
    todos.push('new todo');
    } 
//Remember shift enter may help to do multipe lines

addTodo()
//will return undefined
todos
//will return 
["item 1", "item 2", "item 3", "new todo"]

// if you use the displayTodos functions it'll print it out too
displayTodos()
My todos: ["item 1", "item 2", "item 3", "new todo"]

//do another Todo
addTodo()
//then displayTodos will print out an extra array item on your array
displayTodos()
My todos: ["item 1", "item 2", "item 3", "new todo", "new todo"]

//change the function to have displayTodos() at the end of the function so 
//that you can see what happened, like so:
function addTodo() {
    todos.push('new todo');
    displayTodos();
    
}
//hit enter to add the function and use it by doing the following:
addTodo()
//which would return:
My todos: ["item 1", "item 2", "item 3", "new todo", "new todo", "new todo"]

//customize the function by using the parameters and create a new variabe
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
    
}
addTodo('some stuff')
//when you give it the function todo in the parameters you have you have to give it 
//a value as you see above.
































































    






    