/*
What if we want to create multiple instances of an object?

We can create something called an "object constructor",
in which we use a function to create multiple
instances of an object.

Each instance inherits the properties and methods
of its constructor

 */

var steve = {
	name: "Steve";
	tshirtColor: "green"
};

var mike = {
	name: "Mike";
	tshirtColor: "red"
};

function Friend(name, tshirtColor) {
	this.name = name;
	this.tshirtColor = tshirtColor;

}

var steve = new Friend("Steve", "green");
var mike = new Friend("Mike", "red");

alert(steve.name);
//"Steve"

// You get the same result as our object literal but
// but we now can use the "Friend" object as many 
//times as we want and avoid any kind of repetition in our code 











