// Create a variable and assign  a string value  ‘Hello’ to it.  Take  the characters by using a  greater then (>) operator  to  check if the value of the left operand is greater than the right operator. If yes then it returns true else false.

var string = "Hello";
console.log("H" > "H"); //false
console.log("H" > " "); //true
console.log("H" > " 0 "); //true
console.log("H" > " true "); //true
console.log("H" > " false "); //true
console.log("H" > "e"); //false
console.log("H" > "l"); //false
console.log("H" > "o"); //false