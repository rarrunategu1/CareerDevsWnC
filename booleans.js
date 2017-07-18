//todoList.addTodo should add objects to our array

//instead of adding an array of text, it will add an array of objects
//we are doing this because we want to represent more data and an object
//will represent more complicated data
//you can add as many properties as you want

//This is what the objects are going to look like
//{
//  todoText: 'item 1',
//  completed: false //boolean value is true or false
//}
//completed will tell us whether the todo has been completed or not
//good way to represent that data is with a boolean value that can be true or false
//you can remove the todos arrays in the var todoList object
//since we are going to have objects instead of simple values.

//modify addTodo function by changing the function(todo) to read function(todoText)
//In the this.todos.push(todo) we want to add an object so we would
//do this.todo.push({})

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todoText) {// addTodo('hi') todoText: 'hi',
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
     this.todos.splice(position, 1);
     this.displayTodos();
  }
};

//you can run the addTodo function in the console like so:
todoList.addTodo('this is an object');
//which would return:
VM829 script.js:4 My Todos [Object]0: Objectcompleted: false todoText: "this is an object"__proto__: Objectlength: 1__proto__: Array(0)
undefined


//todoList.changeTodo should change the todoText property



var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todoText) {// addTodo('hi') todoText: 'hi',
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText; //this.todos[position] is an object;
    //because this is a todo object from the addTodo object we can get to a specific property using the .todoText 
    this.displayTodos();
  },
  // deleteTodo: function(position) {
  //   this.todos.splice(position, 1);
  //   this.displayTodos();
    
  // }
  
};

//enter the code in a console, press enter and addTodo like so
todoList.addTodo('first try');
//it will return
VM435:4 My Todos [Object]0: Objectcompleted: falsetodoText: "first try"__proto__: Objectlength: 1__proto__: Array(0)
undefined
//change like below:
todoList.changeTodo(0, 'second try');
//and it will return
VM435:4 My Todos [Object]0: Objectcompleted: falsetodoText: "second try"__proto__: Objectlength: 1__proto__: Array(0)
undefined


//todoList.toggleCompleted should flip the completed property
//like flipping a light switch

//using the bang operator in the console ! followed by true will give you the opposite which is false
//in the console you can do the following under this bang operator:
var gordonBoolean = false;
//hit enter
undefined
//enter the bang operator
!gordonBoolean
//it returns
true
//and if you set the variable to the bang operator of it
gordonBoolean = !gordonBoolean
//it returns
true

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos);
  },
  addTodo: function(todoText) {// addTodo('hi') todoText: 'hi',
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText; //this.todos[position] is an object;
    //because this is a todo object from the addTodo object we can get to a specific property using the .todoText 
    this.displayTodos();
  },
   deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
    
   },
   toggleCompleted: function(position) {
     var todo = this.todos[position];
     todo.complete = !todo.complete;
     this.displayTodos();
   }
  
};

//run the code and enter:
todoList.addTodo('boolean testing');
//which returns
VM529:5 My Todos [Object]0: Objectcompleted: falsetodoText: "boolean testing"__proto__: Objectlength: 1__proto__: Array(0)
undefined
//enter the following
todoList.toggleCompleted(0);
//which then returns
VM529:5 My Todos [Object]0: Objectcomplete: truecompleted: falsetodoText: "boolean testing"__proto__: Objectlength: 1__proto__: Array(0)
undefined













