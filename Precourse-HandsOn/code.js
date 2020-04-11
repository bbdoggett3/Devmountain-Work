    /* ********************************************** 
    * I wrote the same code inline in my HTML file 
    * for some extra practice in understanding these 
    * variables and the declaration tools in working
    * with them. I did some of my own practice on this
    * section of the precourse material in order to feel
    * comfortable working with JS.
    * ***********************************************/    
    
    //KEYWORD LABEL = VALUE
    var name = "Benjamin";

    //KEYWORD LABEL -- this is the declaration
    //LABEL = VALUE -- this is the assignment hence the equal sign.
    var email;
    email = "bendog@gmail.com";

    //Both of these forms of declaring and assigning a value are
    //used in programming and either on is ok.

    //let and const are like var but more specific.

    const hello = "Hello, your name is"; //this cannot be changed.
    /*hello = "World";*/
    //This will throw an error
    // When you are debugging make sure to look for the word
    //"TYPEERROR" in the console, this will give you a start
    // to debugging.

    console.log(hello, name + " and your email is " + email); // here we are accessing
    //the value that is inside our "make-believe-box."

    let age = 999;
    console.log("You are " + age + " years old.");