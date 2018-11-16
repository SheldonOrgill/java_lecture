
// Begin

// get out the sauce pan 
// ad some oil
// pur mince into it
// cook the mince
// chop vegies
// Stir- fry the vegies
// taste- test the vegies
        // if the vegies good - remove off stove
        // if vegies arent good add pepper an spice
        // if vegies are cooked






        // same idea more simplified

        // begin

        // COok mince
        // stir_ fry vegies
        // add filing
        // roll together

        // the 1st version  details alll the individuals actions that make up the cooking process.  the 2nd break down of the recipe into broarder steps and instructions concepts that could be re-used for other dishes as well like cook, stir- fry add an roll.


        // Our code so far has mimicked the 1st example( in that its been very literal), but its time to start modularizing our exmample into sub - steps so we can re-use bits an pieces as needed. In Javascript, thse sub-steps are called functions.

        // Functions

        // A function is a group of instructions that performs a particular Task.

        // function sayHello(){
        //     console.log("Hello!");
        // }

        // console.log("Start of program")
        // sayHello();
        // console.log("end of the program");

        // Declaring a Function

        // Creating a function is called Declaration:

        // ==============
        // Declaring a function called myFunction
        // function myFunction(){
            // Function actions
        // }

        // ==========

        // Declaring a function called my Function
        // function myFunction(){
            // Fictions action
        // }
       var name= prompt ("Enter name");
       function greetUser(){
           console.log("Hello " + name);
       }

    //    console.log("Start of program");
       greetUser();
    //    console.log("End of program")

// The Keywords return indicates that a return value will be given , which is specified immediately after the word

function sayHello(){
    return "Hello";
}

console.log("Start of program");
let result = sayHello();
console.log(result);
console.log("End of program");

// Declare myFunction
function myFunction(){
    // calculate return value
    // ...
    return returnValue;
}
// get return value from myFunction();
// ...