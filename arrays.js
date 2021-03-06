//Store todos
['item 1', 'item 2', 'item 3']
//An array is a "list" in programming. Every item in an array
//should have quotation marks and the list should start and end in a bracket.
//Pressing enter from here will give you the array which should be the following:

["item 1", "item 2", "item 3"]
//this array is stored somewhere but it's kind of lost.
//To get it back we need to give the array a "nickname" as you'll see below:

var todos = ["item 1", "item 2", "item 3"]
//The "nickname for this array of items is "todos".  To create the nickname
//give it the prefix var and after the nickname put the equal sign.  This way
//when you type in todos, it will bring up the array of items as you'll see below:

todos 
//will return
["item 1", "item 2", "item 3"]


//Display Todos
console.log('hello there')
//console.log prints out whatever is in parenthesis after it.
//Text needs to be in quotes.  Pressig entere will give you the following:
hello there

//consle.log can also take multiple items as you'll see below:
console.log('hello there', 'rose')
// this would in return the following when pressing enter:
hello there rose

//using the var todos list from before var todos = ["item 1", "item 2", "item 3"]
// you can use console.log to print the todos out as you'll see below:
console.log(todos)
// will return
["item 1", "item 2", "item 3"]
// remember that todos i the console.log is not in parenthesis
//because it is a variable and not text.

//if you add the following helpful text "My Todos" as you see below:
console.log('My Todos:' ,todos)
// it will return
My Todos: ["item 1", "item 2", "item 3"]



//ADDING NEW ITEMS TO TODOS LIST
My Todos: ["item 1", "item 2", "item 3"]
//using the above array write the following:
toddos.push()
//In the parenthesis you add the new item on the array.
//.push adds it the end of the list.
todos.push('item 4')
//will return
["item 1", "item 2", "item 3", "item 4"]


//CHANGE AN EXISTING TODO
todos
["item 1", "item 2", "item 3", "item 4"]

//using the above todos array you can use the following code
//to remove an item

todos[0]
//The first number in the brackets is in regards to which item it wants to remove.
// this will return
"item 1"

//to change it, do the following
todos[0] = "item 1 updated"
//which will return the following
["item 1 updated", "item 2", "item 3", "item 4"]


//DELETE A TODO
todos
["item 1 updated", "item 2", "item 3", "item 4"]

// to delete an item in the above array use .splice with PARENTHESIS
todos.splice(0, 1)

// the above code removes item 0 in the array, which is
//"item 1 updated".  The next number "1" tells you how many items to delete
//When you press return it should tell you what has been deleted.  
//use todos again to see the new array.















































