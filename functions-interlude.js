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



