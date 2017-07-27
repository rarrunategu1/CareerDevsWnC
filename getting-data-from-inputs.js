//OUR FIRST REFACTORING
//refactoring is the process of restructuring existing computer code-change the
//factoring - without changing it's external behavior.  
//Refactoring imporves nonfunctional attributes of the software.

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
    todolist.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
    todolist.toggleAll();
}); 

//You can rewrite the code above to be like the following and it works the same:
var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    }
  };

//THERE SHOULD BE A BUTTON FOR ADDING TODOS

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
  }
  };
//addTodoTextInput code above removes what is written in a section after the search has completed.  Keeps it clear.        
  
  
//THERE SHOULD BE A BUTTON FOR CHANGING TODOS

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
  },
  changeTodo: function() {
      var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
      var changeTodoTextInput = document.getElementById('changeTodoTextInput');
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  }
  };



