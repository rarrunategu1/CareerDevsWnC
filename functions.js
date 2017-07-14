//FUNCTIONS ARE JUST RECIPES

makeTurkeySandwich
    Get one slice of bread.
    Add turkey.  
    Put a slice of bread on top.  
    
// to turn this recipe into a function add the following:
// note that all the periods became semi colons
// remember parenthesis first then "brace" your hands around the ingredients
function makeTurkeySandwich() {
    Get one slice of bread;
    Add turkey; 
    Put a slice of bread on top;  
}


// to make the turkey sandwich or run the function do the following
// to run all the steps in your function.  
makeTurkeySandwich()



//CUSTOMIZING FUNCTIONS


makeTurkeySandwich
    Get one slice of bread.
    Add turkey.  
    Put a slice of bread on top.  
// using the above recipe from the last lesson, change it to this:
makeSandwichWith ____
    Get one slice of bread.  
    Add ____.  
    Put a slice of bread on top.  
//update the function like so:
function makeSandwichWith(filling) {
    Get one slice of bread;
    Add filling;
    Put a slice of bread on top:
}

makeTurkeySandwich()
//note the "filling" is a variable which would stand for what you
//want to add inside of the sandwich. Note that when making the function
//what's inside of the parenthesis is called parameters.

//makeTurkeySandwich() would turn into this:
makeSandwichWith(ham)
//when using this function the thing inside the parenthesis is called arguments.

//we used functions like the one above before with console.log

console.log('My Todos', todos)

//it's the same thing.  Console.log allows us to control
//what the function prints out.  The makeSandwichWith function
//allows us to tell the code what kind of sandwich to make
//by having the "ham" variable that should have been previously
//created.  To use text instead make sure to use quotation marks.

//A little more on customizing a function
function sayHiTo(person) {
    console.log('hi', person);
}
//to use this function do the following:
sayHiTo('gordon')
//which prints out "hi gordon"
//the "person" parameter is being set to "gordon"
//The above is a value passed into the function.
//Once it's given a value then it returns hi gordon.




























    






    