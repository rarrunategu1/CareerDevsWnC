//WHAT IS AN OBJECT

// objects are use to group related data and functions together

operatingSystem mac
screenSize 15 inchea
purchaseYear 2011

// above is data related to a specific object.  in order to groupt the data
//add curly braces like so:

{
operatingSystem: 'mac',
screenSize: '15 inches',
purchaseYear: 2011
}
//each thing in the braces is a "property".  EAch property must be
//seperated by commas.  within each property threre should be the name of the
//property followed by colon an then the value of the property.
//If you have more than one value for a property separate it with a comma.

//To use it, assign it to a variable

var myComputer = {
operatingSystem: 'mac',
screenSize: '15 inches',
purchaseYear: 2011
};

//hit enter to accept and then if you type myComputer it will print:

Object {operatingSystem: "mac", screenSize: "15 inches", purchaseYear: 2011}

//if you want a specific part of the object do:

myComputer.operatingSystem
//returns
"mac"

myComputer.screenSize
//returns
"15 inches"


//OBJECTS AND FUNCTIONS


//You can place function on objects

{
    name: 'rose'
    sayName: function() {
    console.log();    
    }
}

//above object represents a person.  
//namng a property that's a function is seen on sayName: function(){}
//difference on the sayName function is that in an object, you don't need to
//have the name of the function.  It's optional  So you can leave it as function
//which you see above.

//To represent the object that you're on you can use "this
//when using keyword "this" inside of a function that is on an object
//"this" will refer to that object
{
    name: 'rose'
    sayName: function() {
    console.log(this);    
    }
}

//running this will print out the entire object.
//First we'll name it with a variable.
var rose = {
    name: 'rose'
    sayName: function() {
    console.log(this);    
    }
}

//then type:
rose.sayName()
//It will print out the entire object
Object {name: "rose"}
    name: "rose"
    sayName: function ()
    _proto_: Object 
    
//in order for it to not print the entire object and for it to just print the name

var rose = {
    name: 'rose'
    sayName: function() {
    console.log(this.name);    
    }
}

//Hit enter and do the following:
rose.sayName()
//which will print out 
rose
    

//V3 REQUIREMENTS
//It should store the todos on an object
//It should have a displayTodos method
//It should have an addTodo method
//It should have a changeTodo method
//It should have a deleteTodo method


//STORE TODOS ARRAY ON AN OBJECT

//var todos = ['item 1', 'item 2', 'item 3'];

//create an object below.  objects surrounded by curly braces
//we want to add a property to our todos in the curly braces
//follow the name of a property with a colon and then put in the value

var todolist = {
  todos: ['item 1', 'item 2', 'item 3']
};
//with the todos: property you can set a name (variable) to access it.
//we named it var todolist which now allows us to remove the previous variable

// on plunker be sure to right click inspect and on the console drop down select "plunker 
//preview target".  Clear the console and when you write todolist you'll see all the following:

//todolist
//Object {todos: Array(3)}todos: Array(3)0: "item 1"1: "item 2"2: "item 3"length: 3__proto__: Array(0)__proto__: Object
//editor-1.2.0.js:2 Event tracked Plunk Save Toolbar undefined undefined


//IT SHOULD HAVE A DISPLAY TODOS METHOD


function displayTodos() {
  console.log('My Todos:', todos);
}

// To change this from a stand alone function to a method on this object  
//you'll go to the var todolist previously created and add another property separated by a comma,
//which will be the displayTodos function.  In console.log you will add 'My Todos' and to refer to the todos property on this object you'd add "this.todos"
//When you're in a method you can access the object you're on using the "this" keyword.
//The dot afterwards allows you to get a hold of a specific property and the property name is todos
//...therefore this.todos.  The stand alone function is no longer necessary

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  }
};

//enter the following in plunker
todoList.displayTodos();
//it would return
script.js:16 My Todos (3) ["item 1", "item 2", "item 3"]
undefined


//IT SHOULD HAVE AN ADDTODO METHOD


//below is the old function

//function addTodo(todo) {
//  todos.push(todo);
//  displayTodos();
//}
// add the new method addTodo and remove the old one
//Note that since todos is defined on the object then we 
//can name the todos.push and the displayTodos with a "this.""

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  }
  
 //on plunker inspect you'd add the following:
 todoList.addTodo('plunker');
 //and it would return:
VM2884:1 My Todos (4) ["item 1", "item 2", "item 3", "plunker"]
undefined
 
 
//IT SHOULD HAVE A CHANGETODO METHOD


//change this old changeTodo function into a changeTodo method
//function changeTodo(position, newValue) {
//  todos[position] = newValue:
//  displayTodos();
//}


var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  }
};

//hit save and open up console and try to run the change in plunker preview target:
todoList.changeTodo(0, 'first');
//hit enter and it returns:
VM3157:1 My Todos (3) ["first", "item 2", "item 3"]
undefined












 











