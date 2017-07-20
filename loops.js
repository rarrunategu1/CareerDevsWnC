//the for loop

i=0 //initialization
say "hey" if i<3 //condition if true it will keep giving until it's false
increase i by 1 //final expression

0 "hey"
1 "hey"
2 "hey"
3

//this is how you would accomplish if you were talking to the computer in english

//in code it works like this:

for (initialization, condition, final expression) {
    console.log("hey");
}

//which will be the following for the code:

for (var i=0; i<3; i++) {
    console.log("hey");
}

//LOOPING OVER ARRAYS

for (var i=0; i<3; i++) {
    console.log(i);
}

//if you console log i it will print 
//0
//1
//2


for (var i=0; i<3; i++) {
    console.log("hey");
}

//will return 
//hey
//hey
//hey

var testArray = ['item 1', 'item 2', 'item 3'];

testArray[0] //returns item 1
testArray[1] //returns item 2

//you can this to your advantage inside of our for loop

for (var i=0; i<3; i++) {
    console.log(testArray[i]);
}

//and it will return as the variable i will access all the different items in the array
//item 1
//item 2
//item 3

//you can also take the condition i<3 and change it to the following (still gives same result), which is better to use

for (var i=0; testArray.length; i++) {
    console.log(testArray[i]);
}

//this is better in case you have more than 3 Arrays, for example if you add one, it will just go with the length of the array, not limiting it.

