//COMPUTER SCIENCE NAMES FOR DATA TYPES

//two types - Objects an Primitives

//OBJECTS (can be as complex as you want)
//{} - objects are in curly braces // todoList, arrays, functions


//PRIMITIVES (building blocks)
String  // 'Look at this string!'  //string is the formal name for text
Number  // 1, 2, 3, 4 ...
Boolean // true, false
Undefined   // value that hasn't been set
Null        // 'Nothing'   //this is good to use if there is a test that hasn't been graded, then it's nul


// if it doesn't look like a primitive value then it will be an object


//COMPARISON WITH PRIMITIVES

//Comparison with string
'gordon' === 'gordon';
//returns
true

'gordon1' === 'gordon';
//returns
false


//Comparison with numbers
1 === 1
//returns true

1 === 2
//returns false


//Comparison with booleans

false === false
//returns true

false === true
//returns false

//Comparisons with Undefined and Null

undefined === undefined
//returns true

null === null
//returns true


//COMPARISONS WITH OBJECTS

{} === {}
//returns false

[1, 2, 3] === [1, 2, 3]
//returns false

//javascript see each side as a seperate object
//When you create an object javascript saves that object as a memory address.  
//Each object has a seperate memory address

var houseA = {};

houseA === houseA
//returns true
// giving it a variable will allow the object to return true























