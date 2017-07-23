//The DOM is The browser's interpretation of your HTML
//We're only going to use it for javascript

//THERE SHOULD BE 'DISPLAY TODOS' BUTTON AND A 'TOGGLE ALL' BUTTON IN THE APP.
 
 
//CLICKING "DISPLAY TODOS" SHOULD RUN TODOLIST.DISPLAYTODOS
//we want to get access to the display todos button.
var displayTodosButton = document.getElementById('displayTodosButton');
console.log(displayTodosButton);

//we want to run displayTodos method, when someone clicks the display todos button.
displayTodosButton.addEventListener('click', function()
{
    todoList.displayTodos();
});








