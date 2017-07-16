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


