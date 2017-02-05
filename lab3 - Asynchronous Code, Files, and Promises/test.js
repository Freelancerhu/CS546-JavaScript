const test = require("./textMetrics");

console.log(isNaN(' '));
console.log(test.simplify("Hello, my friends! This is a great day to say hello.\n\n\tHello! 2 3 4 23"));
console.log("bb");



test.createMetrics("Hello, my friends! This is a great day to say hello.\n\n\tHello! 2 3 4 23");



//for(let i = 0; i != tem.length; ++i){
//	console.log(tem[i]);
//}