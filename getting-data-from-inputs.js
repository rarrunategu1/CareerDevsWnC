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
  },
  deleteTodo: function() {
      var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
      var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
      todolist.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput.value = '';
  }
  };
  
  var view = {
      displayTodos: function() {
             vartodosUl =document.querySelector('ul');
          todosUL.innerHTML = '';
          for (var i = 0; i <todoList.todos.length; i++)
          vartodoLi = document.createElement('li');
          var todo = todoList.todos[i];
          
          var todoTextWithCompletion = '';
          if (todo.completed === true) {
              todoTextWithCompletion = '(x) ' + todo.todoText;
              }else {
             todoTextWithCompletion = '() ' + todo.todoText;
   
              }
              
    
          todoLi.textContent = todoList.todos[i].todoText;
          todosUl.appendChild(todoLi);
          

          
      }
  }
//INSERTING LI ELEMENTS INTO THE DOM      
      
//in plunker preview
var todoLI = document.createElement('li');
//returns undefined
todoLi
//returns <li></li>
var todosUL = document.querySelector('ul');
//returns undefined
todosUl
//returns <ul></ul> which allows the element to appear on the page

todosUl.appendChild(todoLi);
//will insert a bullet on the page
<li></li> //is in there now


//there should be an li element for every todo


















    