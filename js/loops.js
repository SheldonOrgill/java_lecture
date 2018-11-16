// while loops

// A while loop lets you repeat code while a certain condition is true.

console.log("starts of the program");
let number = 1;
while(number <=20){
    console.log(number);
    number++;
}
console.log("end of the program");

// =================Basic Syntax ======================

// ==============

// while (condition){
//     // code run while the condition is true

// }

// =============

// Before each loop itertation (++), condition in perntheses is evaluted to determine whether it is true or not. Tje code associated with a loop called body



// if the conditions true the code in the while loops's body run.  afterwards, the condition is  re-evaluated to see if its still true or not. The cycle continues!


// if the condition  is false, the loop stop running or doesnt run.

// For loop

// youll often need to write loops with conditions that are based on hwta happens in the loop body, like in our example. Javascript  offers another loop type  to account for this : th e for loop



// =================

// for (intialization; condition ; final- expression){
//     // code to run when condition is true
// }


// this is a little more complicated that while loop Syntax:

// intualization only happens , when the code 1st kicks off

// the condition is evalutated once before the loop runs each time. if it is true, the code runs. runs if not, the code doesnt run

// the final expression is evaulted after the loop run each time. Its often used to update a counter variable, as we saw in the while loop example

// for ( var counter = 1; counter <= 5; counter++ ){
//     console.log(counter);
// }

// which loop should i use

// let letter = "";
// while (letter !=="X"){
//     letter = prompt("Type any letter or X to Exit");
//     console.log(letter);
// }
