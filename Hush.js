// Meet Therapy, the Java Script Care Robot!

/* A confirm pop up returns a boolean value(true or false)
	- if "ok" is clicked, it returns true
	- if "cancel" is clicked, it returns no
*/

var sad = confirm("Would you like to be cheere up?");

//This is the same as saying while (sad === true)
while (sad) {
	alert("What do you call a boomerang that doesn't come back? .... A stick!");
	var yes = confirm("would you like to continue our session?");

	if(yes){
		var response = prompt("tell me about your troubles: ", "type your feelings here");

		if(response){
			alert("I am sorry you are feeling that way. Keep pushing forward");
			sad = false;
		}
		else{
			sad = false;
		}
	}
}



/*
Another Example:

var userLoggedIn = false;

while(userLoggedIn){
	//display login info
}

*/