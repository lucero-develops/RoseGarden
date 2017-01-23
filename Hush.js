/*
Looping over an array

*/

var friends =["Steve","Anthony","Eric","Neil","Nick","Cam"];

//for(init_loop; condition; update to the loop

function greetFriends(){
	for(var i=0; i  friends.length; i++){
		console.log("Oh hi " + friends[i]);
	}
}

greetFriends();
// "Oh hi Steve"
// "Oh hi Anthony"
// "Oh hi Eric"
// "Oh hi Neil"
// "Oh hi Nick"
// "Oh hi Cam"