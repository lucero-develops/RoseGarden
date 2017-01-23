/*
Let's create a text adventure game with JavaScript.
Let's set a senario in which we encounter a zombie,
choose a weapon to fight the zombie with,
and have a 50/50 chance of ethier defeating the zombie with 
our weapon or getting bitten and losing the game.
*/

alert("This is a zombie attack, you for was searching " +
	"for food but found a zombie !");
var weapon = prompt("Look for a weapon ! There is " +
	"a bow and arrow, an axe, or a rubber chicken?");
var randomNumber = Math.round(Math.random());

alert("you attacked the zombie with your" + "" + weapon);

if(randomNumber ===0){
	alert("The zombie bites you. You lose!!!");
}
else if(randomNumber===1){
	alert("You killed the zombie with your" +
		weapon + ". You Win!");
}

