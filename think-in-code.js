//.toggleAll: if everything's true, make everything false

toggleAll: function() {
    
    var totalTodos === this.todos.length;
    var completedTodos = 0;
    
    //Get number of completed todos.
    for (var i=0; i<totalTodos; i++) {
        if (this.todos[i].complete === true) {
            completedTodos++;
        }
    }
   
   //if everything's true, make everything false
 
    if(completedTodos === totalTodos) {
        //make everything false.
        for (var i=0; i<totalTodos; i++) {
            this.todos[i].completed = false;
        }
        
//the completed code looks like this and it will ONLY WORK IF ALL THE TODOS ARE COMPLETED!

toggleAll: function() {
    var totalTodos === this.todos.length;
    var completedTodos = 0;
    
    //Get number of completed todos.
    for (var i=0; i<totalTodos; i++) {
        if (this.todos[i].completed === true) {
            completedTodos++;
        }
    } //if everything is true make everything false:
    if(completedTodos === totalTodos) {
        for (var i=0; i<totalTodos; i++) {
            this.todos[i].completed = false;
        }
    }
    
    this.displayTodos();
    
    todolist.toggleAll(); //to run on console
    }
}




//.toggleAll: Otherwise, make everything true...this is the else part of this statment

 if(completedTodos === totalTodos) {
        for (var i=0; i<totalTodos; i++) {
            this.todos[i].completed = false;
        }
    } else {
        for (var i = 0; i<totalTodos; i++) {
            this.todos[i].completed = true;
        }
    }
    
    this.displayTodos();
    
    todolist.toggleAll(); //to run on console
    }
}









