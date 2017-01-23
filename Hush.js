/*

When you write code ina browser
it becomes part of the 
global window object.

When something is global it means all code can access, change
and use it 

Be careful about creating anything that 
is global in scope

**When we create a variable inside of a function
it CAN"T be accessed from code outside the function. 
Why?  Because it's scope is "local" to that function, meaning
it is invisisble to any other code other than the other code
inside of that function 

*/

var example = "value";
//this is a global variable

function alertExample(){
	alert(example);
	var anotherExample = "?";

}

alertExample();
//This prints 'value' in a alert .

/* so yes our global code is avaiable
inside of functions, and in fact,
it accessible from anywhere in our code.

That way it's really important to understand when
your code is global
*/

alert(anotherExample);
/*

In Java script, new scopes are created 
everytime we create a new function,so it
has function-based scope.






