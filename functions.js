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
addTodo('hello there')
//when you give it the function todo in the parameters you have you have to give it 
//a value as you see above.


//FUNCTION TO CHANGE A TODO

function changeTodo() {
    todos[0] = 'some new value';
    
}
//The above function would give you "some new value" on the first item
//every single tie.  you should use the parameters to customize the behavior of your function
//We want to customize the item we're interested in which is represented by the
//0 in the todos brackets.Then we want to customize the new vaue.

//The 0 can be represented by a parameter named position
//The "some new value" can be represented by a newValue parameter
function changeTodo(position, newValue) {
    todos[0] = 'some new value';
    todos[position] =newValue;
    
}
//now that you've put parameters in, you can remove the second line so that
//your function is the following:
function changeTodo(position, newValue) {
    todos[position] =newValue;
    
}

//display your todos
displayTodos()
My todos: ["item 1", "item 2", "item 3", "new todo", "new todo", "new todo", "hello there"]

//changed item 1 to the text changed
changeTodo(0, 'changed')

//The function will be the following
function changeTodo(position, newValue) {
    todos[position] =newValue;
    displayTodos()
}
//change it again 
changeTodo(0, 'changed again')
//which will give you
My todos: ["changed again", "item 2", "item 3", "new todo", "new todo", "new todo", "hello there"]

//FUNCTION TO DELETE A TODO
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

//to delete the first item
displayTodos()
My todos: ["item 2", "item 3", "new todo", "new todo", "hello there"]
//undefined
deleteTodo(0)
//would return
displayTodos()
My todos: ["item 3", "new todo", "new todo", "hello there"]

//deleting the third item

deleteTodo(2)
//which would return
My todos: ["item 3", "new todo", "hello there"]













































































    






    