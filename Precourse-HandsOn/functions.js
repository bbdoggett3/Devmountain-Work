//Here is my examples/practice with functions
//What is a funtion?
//How to define a funtion? Declaration vs expression vs arrow?
//How to invoke a function?
//What is a return statement?

//SECTION 1
//Function Delcaration 
//function createVar() {
//    let myName = "Ben";
//}

//Function Expression 
//let createVar = function() {
//    let myName = "Ben";
//}

//Function Arrow
//let createVar = () => {
//    let myName = "Ben";
//}

//SECTION 2
//How to invoke a funtion
//function createVar() {
//    let myName = "Ben";
//    console.log("What is your name? " + myName);
//}

//createVar();

//SECTION 3
//function returnName() {
//    return "Ben";
//}

//let result = returnName();
//console.log(result);

//SECTION 4 PROBELM 1
//create a fuction declaration that returns 2 + 2:
function sumReturn() {
    var num1 = 2;
    var num2 = 2;
    var sum = num1 + num2;

    return sum;
}

//YOU CAN DO IT TWO WAYS, YOU CAN...
//create another variable to store it...
//or you can just call the function itself SEE EXAMPLES BELOW...

//let result = sumReturn();
console.log(sumReturn());

//SECTION 5 PROBLEM 2
//Create a function expression that returns the string "Hello"
let createString = function() {

    var stringHello = "Hello";

    return stringHello; 
}

console.log(createString());

//SECTION 6 PROBLEM 3
//Create an arrow function that returns the boolean true
//Is there a shorter syntax?
let returnTrue = () => {
    return true;
}
//let result = returnTrue();    YOU COULD USE THIS FORMAT AS WELL TO CATCH THE RETURN AND STORE IT SOMEWHERE.
console.log(returnTrue());

//Is there a shorter syntax?
//let returnTrue = () => true;
//let result = returnTrue();
//console.log(result);