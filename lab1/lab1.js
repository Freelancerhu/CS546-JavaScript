function sumOfSquares(x, y, z){
	if(isNaN(x)) throw "x is not a number";
	if(isNaN(y)) throw "y is not a number";
	if(isNaN(z)) throw "z is not a number";
	let sum = x*x + y*y + z*z;
	return sum;
}

function sayHelloTo(x, y, z){
	if(x == null){
		throw "No content.";
	}
	else if(y == null){
		console.log(`Hello, ${x}!`);
	}
	else if(z == null){
		console.log(`Hello, ${x} ${y}. I hope you are having a good day!`);
	}
	else{
		console.log(`Hello, ${z} ${x} ${y}! Have a good evening!`);
	}
}

let cupsOfCoffee = (x) =>{
	if( x <= 0 ){
		throw "Number must be bigger than 0."
	}
	if(isNaN(x)){
		throw "Must enter a number."
	}
	let string1 = "";
	for( let i = x; i > 0; i--){
		if( i > 2){
			let num = i - 1;
			string1 += `${i} cups of coffee on the desk! ${i} cups of coffee!\n`;
			string1 += `Pick one up, drink the cup, ${num} cups of coffee on the desk!\n`;
		}
		else if( i == 2){
			let num = i - 1;
			string1 += `${i} cups of coffee on the desk! ${i} cups of coffee!\n`;
			string1 += `Pick one up, drink the cup, ${num} cup of coffee on the desk!\n`;
		}	
		else{
			string1 += `${i} cup of coffee on the desk! ${i} cup of coffee!\n`;
			string1 += "Pick it up, drink the cup, no more coffee left on the desk!";
		}
	}
	return string1;
}

function countOccurrencesOfSubstring( x, y){
	if(typeof x != 'string')
		throw "Must enter string.";
	if(typeof y != 'string')
		throw "Must enter string.";
	var ind = 0, ind1 = 0, count = 0;
	for( var i = 0; i < x.length && (ind1 != -1); i++){
		ind1 = x.indexOf( y, ind);
		ind = ind1 + 1;
		count = i;
	}
	return count;
}

function randomizeSentences( string1 ){
	if(typeof string1 != 'string')
		throw "Must enter string.";
	let res = string1.split(/[.!]/);
	//console.log(res.length);
	var random = [], len = res.length-1;
    for (var i = 0; i < len; i++) {
      var index = Math.floor(Math.random()*(len - i));
      random.push(res[index]);
      res.splice(index,1);
    }
	var sent = "";
	for(let i = 0; i < len; i++){
		if(random[i] == " Hello, world")
			sent = sent + random[i] + "!";
		else{
			sent = sent + random[i] + ".";
		}
	}
	return sent;
}


try{
	console.log(sumOfSquares(5, 3, 10));
}
catch(err){
	console.log(err);
}
try{
	sayHelloTo(); // throws 
}
catch(err){
	console.log(err);
}
try{
	sayHelloTo("Phil"); // logs: Hello, Phil! 
}
catch(err){
	console.log(err);
}
try{
	sayHelloTo("Phil", "Barresi"); //logs: Hello, Phil Barresi. I hope you are having a good day!
}
catch(err){
	console.log(err);
}
try{
	sayHelloTo("Phil", "Barresi", "Mr."); // logs: Hello, Mr. Phil Barresi! Have a good evening!
}
catch(err){
	console.log(err);
}

try{
	console.log(cupsOfCoffee(5));
}
catch(err){
	console.log(err);
}

try{
	console.log(countOccurrencesOfSubstring("hello world", "o"));
}
catch(err){
	console.log(err);
}
try{
	console.log(countOccurrencesOfSubstring("Helllllllo, class!", "ll"));
}
catch(err){
	console.log(err);
}

var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
try{
	console.log(randomizeSentences(paragraph));
}
catch(err){
	console.log(err);
}