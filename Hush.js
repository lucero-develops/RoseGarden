/*
Objects

An object is a collection of properties,
which are described in the form
of key/value pairs.

***We can use objects to model "things" using code.

*/

var coffeeFlavor = "black";
var coffeeTemperature = "hot";
var coffeeOunces= 8;
var coffeeMilk = false;

var myCoffee = {
	flavor: "black",
	temperature: "hot",
	ounces: 8;
	milk: false
	// you leave off the  on the last value
	//because the trailing comma causes an error on
	//older browsers
};

//What if we want to talk about the properties we
//added in our object.   We can use dot notation
//to refernce anything inside our object 

alert(myCoffee.flavor);
//alert box with result "black"



