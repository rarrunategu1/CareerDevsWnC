//todoList.addTodo should add objects

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



