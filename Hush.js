var a = 10;

if (a > 5) {
	a = a * 2;
}

//there are curtain expression
//that would not result in true or false by themselves
// if(a)  , the if statement is expecting a true or false
//if not it has to convert 

/*falsy:
0 -0 NaN 
""
falsy
null
undefined

so memorize this list and if its on the falsy list its 
truthy 

example */

var b  = 0;

if (b) {
	b = b * 3;
}

/* b is falsy because its in the falsy list , so our 
if statment reads "if false" not "if true"