// whats is a condition

// suppose we want to write a programme that makes a user enter a number and then display a message
// if the number is positive.here is corresponding algorithm.

// ============= enter a number 
//  if the number psoitive
//  Display message

// the if statement
// example
// var number = Number(prompt("enter a number"));
// if (number > 0) {
//     console.log(number + " is positive");
        // }

// Basic syntax

// if (conditions){
// statements excuted when the condition is true 
// }

// the pair of opening and closing braces defines what is called a block of code associated with an if sgtatements. this statement represents a test.  it can result in the following : "if the condition is true then excute the instructions int he code block"

// Condition

// a condition is an exprwession that evaluates whether something is true or false. when the value of the condition is true, we say that the conditon is satisfied

// we have already studied numbers and string, two types of data i njavascript. Booleans are anopther type.  this has two possible values: true or false

// Any expression producing  a boolean value (either true of false) can be used as a condition in an if statemment. if the value of this expression is true , the code block asspciated with it is executed.

// === equal to
// !== Not equal to
// < less
// <= Less than or equal to 
// > greater than 
// >= Greater or eqaul to

// var age = Number (prompt("enter a age"));
// if ( age <= 12){
//     console.log(" you can not watch the movie");
// }

// // youll often want to have your code excute one way when something true and another way when somethings neagtive


// var number = Number (prompt("enter a number"));
// if ( number > 0 ){
//     console.log(" + is positive");
// }
// else{
//     console.log(number +" is negative or zero");
// }

// if (condition){
//     code to run when



// Nesting conditions

// you can go to the next level - level and display a specific message if the entered number is zero. Use else if for a second conditional. see this example, which has a positive test case, negative test case, and a last resort of the number being zero:

// var number = Number (prompt("Enter a number:"));
// if (number > 0) {
//     console.log( "is positive");
// } else if (number < 0){
//     console.log("is negative");
// } else{
//     console.log( "is zero");
// }


// var weather = String(prompt("what is the weather like today:"));
//     if(weather === "sunny"){
//         console.log("wear short an tank top");
//     }else if(weather === "cloudy"){
//         console.log("Bomber jacket");
//     } else if(weather === "snowy"){
//         console.log("stay indoors and make a fire")
//     }
