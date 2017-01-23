/*
FizzBuzz is a common coding exercise that is well known as a coding 
question asked in interviews that is designed to filter of candidates

Let's try a modified version

Generate a random number between 0 aand 5. If the result is
devisible by 3 alert "fizz". If the number is divisible by 5,
alert "buzz", otherwise print the number to the console.
*/

/* My attempt
var randomNumber = math.randomNumber(0,5);

var fizz = randomNumber % 3

var buzz = randomNumber % 5

if (fizz ===0){
	alert("fizz");
}
else if(buzz===0){
	alert("buzz":)
}
else{
	console.log("randomNumber")
}
*/

//Solution

var randomNumber = Math.round(Math.random()*5);

console.log(randomNumber);

if(randomNumber%3===0  && randomNumber !=0){
	//this was added 
	if(randomNumber%5===0){
		alert("FizzBuzz");
	}
	else{
		alert("fizz");		
	}
}
else if(randomNumber%5===0 && randomNumber !=0){
	alert("buzz");
}
else{
	console.log(randomNumber);
}

//code has defect , prints fizz when value is 0
//  != can be used to solve this 

/*
add alert "FizzBuzz!" when random number
is divisible by 3 and 5 , must increase
random number range to make fizzbuzz  happen 

else if(randomNumber%3===0 && randomNumber%5===0){
	alert("FizzBuzz")
}


This try function currectly 


