//The 'return' statement
//in the console enter
function multiplyTwoNumbers(a, b) {
var result = a * b;
}
var theProductOf2And10 = multiplyTwoNumbers(2, 10);
undefined
//entering theProductOf2And10 you'd expect a result but it gives you undefined
theProductOf2And10
undefined
//to actually return the value use the return result;
function multiplyTwoNumbers(a, b) {
var result = a * b;
return result;
}
var theProductOf2And10 = multiplyTwoNumbers(2, 10);
undefined

theProductOf2And10
20


