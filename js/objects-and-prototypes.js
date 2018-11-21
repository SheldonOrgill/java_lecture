// Prototypes. When a function is created in JavaScript, JavaScript engine adds a prototype property to the function. This prototype property is an object (called as prototype object) has a constructor property by default. constructor property points back to the function on which prototype object is a property.

// lets add some more sweet-treats(pastries), as well as a "type" property

// let muffin = {
//     type: "muffin",
//     flavour: "blueberry",
//     layers:  1,
//     price: "R20"
// }


// OBJECTS AND PROTOTYPE

// in addition to its special properties, every JavaScript object has an internal property called prototype. This is a link (know as reference) to another object. When trying to access a property that does not exist in an object JavaScript tries to find this properties in prototype of this object.

var anObject = {
    a: 2
};
// create anotherObject using anObject as a prototype
var anotherObject = Object.create(anObject);

console.log(anotherObject.a); //will be 2
console.log(anotherObject.b);  //undifned

// THE JavaScript Statement Object.create() is used to create the object anotherObject based on the prototype object anObject.

// THis type of relationship between  JavaScript objects is called delegation: an object delegates part of its operation to its prototype.

// CAKE PROTOTYPE

var Pastry = {
    type: "",
    flavour: "",
    layers: "",
    price: "",
    occasion: "",

// DECRIBE THE PASTRY

decribe: function(){
    var decription = "the "+ this.type + "is a " + this.occasion + "pastry, has a " + this.flavour + "flavour," + this.layers + "layer(s), and costs" + this.price + ".";
    return decription;
}
}

var muffin = Object.create(Pastry);
muffin.type = "muffin";
muffin.flavour = "bluebrry";
muffin.layers = "1";
muffin.price = "R20";
muffin.occasion = "breakfast";


var cake = Object.create(Pastry);
cake.type = "cake";
cake.flavour = "vanilla";
cake.layers = 3;
cake.price = "R310";
cake.occasion = "birthday";

console.log(muffin.describe());
console.log(cake.describe());