/*
Print all numbers from 1 to 100 with three exceptions:

	-if the number is divisible by 3, print fizz
	-if the number is divisible by 5, print buzz
	-if the number is divisible by 3 AND 5 , print FizzBuzz

*/

for(var i=1; i<=100; i++){
	if(i%3 === 0){
		if(i%5 === 0){
			console.log("FizzBuzz");
		}
		else{
			console.log("fizz");
		}
	}
	else if(i%5 ===0){
		console.log("buzz");
	}
	else {
		console.log(i);
	}
}
