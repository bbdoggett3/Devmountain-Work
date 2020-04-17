//Here is my objects practice from the pre-course

//This is a object
var person = {
    name: "Joe Dirt",   //name here is the key, and 'Joe Dirt' is the value.
    state: "Alabama",
    haircut: "Mullet",
    age: 32
}

var person2 = {
    name: "Gandalf",
    state: "Middle Earth",
    haircut: "long",
    age: "unknown"
}

function sayHello(greetedPerson) {
    console.log("Hello, " + greetedPerson.name + ". You are from " + greetedPerson.state + ". I like your " + greetedPerson.haircut);
    console.log(greetedPerson.name + " is " + greetedPerson.age +" years old.");
}

//This keeps things really simple when programming. It is part of computational thinking.
sayHello(person);
sayHello(person2);

//BELOW WAS USED IN MY EXAMPLE PRACTICE BEFORE I CREATED A FUNCTION.
//console.log("Hello, " + person.name + ". You are from " + person.state + ". I like your " + person.haircut);
//console.log(person.name + " is " + person.age +" years old.");