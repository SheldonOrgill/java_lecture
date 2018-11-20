// What is an object

// JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
    // - A metarial that can be seen or touched 
    // - Something  that has a form

    // var pen = {
    //     color: "black",
    //     type : "ballpoint",
    //     brand: "BiC" 
    // };

    // think about objects in the non - programming sense, like a pen. A pen can have different ink colors, be manifactured by different people, have a different tip,  and many other properties.

    // Similarly, an object in programming is an entity that has a properties. each proprety defines a charachteristics of the object. A property can be information associated with the object(the xolor of the pen) or action ( the pens ability to write).

    // What does this have to do with codde?

    // Obeject- orientated programming {OOP for short}





    // JavaScript and Objects

    // like many other languages, JavaScript involves programming objects, so we can say its an object-orientated langauge. it provides a nmber of predefined objects while also letting you vcreate your own.

    // Creating  An object
    // here is the javascript 

    let pen ={
        type: "ballpoint",
        color: "blue",
        brand: "Bic"
    };
    console.log(pen.type);
    console.log(pen.color);
    console.log(pen.brand);

    // The above code defines a var named pen whose value is an object: you can therefore 

    console.log("I have a ", pen.type ,"and the pen color is" ,pen.color, "and the brand of the pen is a" ,pen.brand ,"pen.")

    // Since you know how to access properties,  you can start combin



    // Lets create a cake in JavaScript that has several Properties:

    // price in madibas

    // layers(1,2,3...10)

    let cake = {
        type : "wedding cake",
        layers : "3 layer cake",
        layer1 : "chocolate for the base",
        layer2 : "caremal in the center",
        layer3 : "whispers for the third layer on top"
    }
    console.log(cake.type);
    console.log(cake.layers);
    console.log(cake.layer1);
    console.log(cake.layer2);
    console.log(cake.layer3);

    console.log("The cake i will be creating today is a", cake.type, "it is a",cake.layers,"with the first layer being", cake.layer1, " the second layer being a,", cake.layer2," an the fianl layer of the cake being" ,cake.layer3, ".",);