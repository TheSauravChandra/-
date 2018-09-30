///////////////Made by SauravC.////////////////
//#########sauravchandra757@yahoo.com#########//
/////General Object tools//////////////////////
function OBJS(name,n){  // name=man  or man() , n=number of objects;   Since we can't create arrays of objects directly in JavaScript.
			var x=new Array(n);
			for (var i=0;i<x.length;++i) eval("x[i] = new "+name+";");
			return x;
} 
// eg. var x = OBJS('man()',8); // returns man[8] fxn made objects, for class simply type 'man'
//     Helps in instanciating the whole array at once & returning Array Object.
