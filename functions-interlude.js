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





