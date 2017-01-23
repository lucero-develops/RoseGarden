/*
Methods
when an object has a property with a 
function as the value, it is referred to 
as a METHOD of that object
*/


var myCoffee = {
	flavor: "black",
	temperature: "hot",
	ounces: 8,
	milk: false,

	reheat: function(){
		if(myCoffee.temperature === "cold"{
			myCoffee.temperature = "hot";
			alert("Your coffee has been reheated");
		}
	}
	// you leave off the  on the last value
	//because the trailing comma causes an error on
	//older browsers
};

myCoffee.temperature = "cold";
// myCoffee["temperature"] = "lukewarm";
// another way to assign a value besides dot notation

myCoffee.reheat();

//








