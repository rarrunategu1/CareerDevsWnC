//in console enter 
function runWithDebugger(ourFunction) {
debugger;
ourFunction();
}
//returns 
undefined
//in console enter 
runWithDebugger(function logTenNumbers() {
for (var i=0; i < 10; i++) {
console.log(i);
}
});
//returns in sources tab
function runWithDebugger(ourFunction) {ourFunction = logTenNumbers()
debugger;
ourFunction();
}

//setTimeout

//runs a function within a certain amount of time; it counts in milliseconds
//in console enter
setTimeout(function() {
console.log('Wake up Rose!');
}, 5000)

//returns
1
// and after 5 seconds it returns
 Wake up Rose!


//forEach

//in console enter
var students = ['jonathan', 'jenny', 'elliot'];
//returns 
undefined
//in console enter
function logName(name) {
console.log(name);
}
//returns
undefined
//if I want to run logName over every student under the array I'd the following
//but it's alot of work and it's very manual.  

logName(students[0])
//returns
jonathan
undefined

//to make it easier and not have to do it for every student you'd do a for loop

//in console enter
for (var i=0; i < students.length; i++) {
logName(students[i]);
}
//it returns
jonathan
jenny
elliot
undefined

//but theres an easier way to do it to make it even shorter

//all you do is pass in a function and it'll run that for loop for you on every item in the array
students.forEach(logName)
//returns
 jonathan
 jenny
 elliot
undefined
//or if you're entering the function with it if it wasn't previously entered
students.forEach(function logName(name) {
console.log(name);
})
//returns
 jonathan
 jenny
 elliot
undefined
//or you can make the function with no name
students.forEach(function(name) {
console.log(name);
})
//returns
 jonathan
 jenny
 elliot
undefined

//lets create our own forEAch
//this for each is stand alone, it is not a method on an array
//so you have to pass in an array(myArray) and a function (myFunction)

function forEach(myArray, myFunction) {
for (var i=0; i < myArray.lengeth; i++) {
myFunction(myArray[i]);
}
}
//returns
undefined
//enter in console
forEach(students, function(student) {
console.log(student);
})
//will return all the names as well

//next time you call it you can do 
forEach(students, logName)
//which also returns the names


//addEventListener
//handling elements in the DOM
//the event listener listens for the click on the tutorials element to run the function
tutorialsElement.addEventListener('click', function() {
    console.log('The tutorials element was clicked!');
});
//returns undefined and now the function will happen when the click happens

//addEventListener will run the function and when it does it will pass in an event object
//you can choose to ignore the event object and our function just won't use it.  
//everything will still work fine but if you choose to use it, do it like so:

tutorialsElement.addEventListener('click', function(event) {
    console.log(event);
    console.log('The tutorials element was clicked!');
});
//which will return 
The tutorials element was clicked!
MouseEvent {isTrusted: true, screenX: 413, screenY: 146, clientX: 413, clientY: 51...}
The tutorials element was clicked!
//the above event gives you information about the click.  Where the mouse was..etc.



//Buzzwords!  Vocabulary used when talking to other programmers!!

There are two terms that are used:

Higher order functions:
.Functions that accept other functions
.Enhance the behavior of other functions
*examples are runWithDebugger(), forEach(), setTimeout(), and addEventListener() 

Callback functions:
.The functions that are passed into higher order functions
*example is the functions that are passed into higher order functions
 


















