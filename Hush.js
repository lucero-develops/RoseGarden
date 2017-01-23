//Switching things up 

var sign = prompt("What is your atrological sign?");

alert("sensing...sensing your future.");

switch(sign) {
	case "Taurus":
		alert("Good Fortune is near ");
		break;
	case "Virgo":
		alert("Your emotions will make you feel things");
		break;
	case "Leo":
		alert("Let the power of the sun charge you ");
		break;
	default:
		alert("please enter a valid sign");
		break;
	
}

/*if you don't include a break; the next case will act as true 
so its important to add your breaks