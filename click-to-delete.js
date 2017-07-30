//The 'return' statement
//in the console enter
function multiplyTwoNumbers(a, b) {
var result = a * b;
}
var theProductOf2And10 = multiplyTwoNumbers(2, 10);
undefined
//entering theProductOf2And10 you'd expect a result but it gives you undefined
theProductOf2And10
undefined
//to actually return the value use the return result;
function multiplyTwoNumbers(a, b) {
var result = a * b;
return result;
}
var theProductOf2And10 = multiplyTwoNumbers(2, 10);
undefined

theProductOf2And10
20

//V10 requirements

//There should be a way to create delete buttons

//in the .js file 
// var todoList = {
//   todos: [],
//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//   },
//   changeTodo: function(position, todoText) {
//     this.todos[position].todoText = todoText;
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//   },
//   toggleCompleted: function(position) {
//     var todo = this.todos[position];
//     todo.completed = !todo.completed;
//   },
//   toggleAll: function() {
//     var totalTodos = this.todos.length;
//     var completedTodos = 0;
    
//     // Get number of completed todos.
//     for (var i = 0; i < totalTodos; i++) {
//       if (this.todos[i].completed === true) {
//         completedTodos++;
//       }
//     }
    
//     // Case 1: If everything’s true, make everything false.
//     if (completedTodos === totalTodos) {
//       for (var i = 0; i < totalTodos; i++) {
//         this.todos[i].completed = false;
//       }
//     // Case 2: Otherwise, make everything true.
//     } else {
//       for (var i = 0; i < totalTodos; i++) {
//         this.todos[i].completed = true;
//       }      
//     }
//   }
// };

// var handlers = {
//   addTodo: function() {
//     var addTodoTextInput = document.getElementById('addTodoTextInput');
//     todoList.addTodo(addTodoTextInput.value);
//     addTodoTextInput.value = '';
//     view.displayTodos();
//   },
//   changeTodo: function() {
//     var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
//     var changeTodoTextInput = document.getElementById('changeTodoTextInput');
//     todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
//     changeTodoPositionInput.value = '';
//     changeTodoTextInput.value = '';
//     view.displayTodos();
//   },
//   deleteTodo: function() {
//     var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
//     todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
//     deleteTodoPositionInput.value = '';
//     view.displayTodos();
//   },
//   toggleCompleted: function() {
//     var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
//     todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
//     toggleCompletedPositionInput.value = '';
//     view.displayTodos();
//   },
//   toggleAll: function() {
//     todoList.toggleAll();
//     view.displayTodos();
//   }  
// };

// var view = {
//   displayTodos: function() {
//     var todosUl = document.querySelector('ul');
//     todosUl.innerHTML = '';
//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement('li');
//       var todo = todoList.todos[i];
//       var todoTextWithCompletion = '';

//       if (todo.completed === true) {
//         todoTextWithCompletion = '(x) ' + todo.todoText;
//       } else {
//         todoTextWithCompletion = '( ) ' + todo.todoText;
//       }
      
//       todoLi.textContent = todoTextWithCompletion;
//       todosUl.appendChild(todoLi);
//     }
//   },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
};

//in the console you can now give that deletebutton a var
view.createDeleteButton()
<button class=​"deleteButton">​Delete​</button>​
var roseElement = view.createDeleteButton();
undefined
roseElement
<button class=​"deleteButton">​Delete​</button>​






