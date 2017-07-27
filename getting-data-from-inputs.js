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
    
    
    
    
    
    
}







