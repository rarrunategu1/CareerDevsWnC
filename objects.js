//WHAT IS AN OBJECT

// objects are use to group related data and functions together

operatingSystem mac
screenSize 15 inchea
purchaseYear 2011

// above is data related to a specific object.  in order to groupt the data
//add curly braces like so:

{
operatingSystem: 'mac',
screenSize: '15 inches',
purchaseYear: 2011
}
//each thing in the braces is a "property".  EAch property must be
//seperated by commas.  within each property threre should be the name of the
//property followed by colon an then the value of the property.
//If you have more than one value for a property separate it with a comma.

//To use it, assign it to a variable

var myComputer = {
operatingSystem: 'mac',
screenSize: '15 inches',
purchaseYear: 2011
};

//hit enter to accept and then if you type myComputer it will print:

Object {operatingSystem: "mac", screenSize: "15 inches", purchaseYear: 2011}

//if you want a specific part of the object do:

myComputer.operatingSystem
//returns
"mac"

myComputer.screenSize
//returns
"15 inches"


//OBJECTS AND FUNCTIONS


//You can place function on objects

{
    name: 'rose'
    sayName: function() {
    console.log();    
    }
}

//above object represents a person.  
//namng a property that's a function is seen on sayName: function(){}
//difference on the sayName function is that in an object, you don't need to
//have the name of the function.  It's optional  So you can leave it as function
//which you see above.

//To represent the object that you're on you can use "this
//when using keyword "this" inside of a function that is on an object
//"this" will refer to that object
{
    name: 'rose'
    sayName: function() {
    console.log(this);    
    }
}

//running this will print out the entire object.
//First we'll name it with a variable.
var rose = {
    name: 'rose'
    sayName: function() {
    console.log(this);    
    }
}

//then type:
rose.sayName()
//It will print out the entire object
Object {name: "rose"}
    name: "rose"
    sayName: function ()
    _proto_: Object 
    
//in order for it to not print the entire object and for it to just print the name

var rose = {
    name: 'rose'
    sayName: function() {
    console.log(this.name);    
    }
}

//Hit enter and do the following:
rose.sayName()
//which will print out 
rose
    














