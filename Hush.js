/*
for ( intitialization expression ; conditional expression; update clause)
*/

for ( a =5; a < 10 ; a = a + 1){
	console.log(a);
	
}
/*this for loop prints 
5
6
7
8
9
*/

/* this for loop will start a at the value 5 
and each time the loop finished its going 
to update a by 1 and if a is less than 10 its going to
do the loop again and again 

Now lets recreate this in a while loop
*/

a = 5;
while (true){
	if (a >= 10){
		break;
	}
	console.log(a)
	a = a+1;
}

