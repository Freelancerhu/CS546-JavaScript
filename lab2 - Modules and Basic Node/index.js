const prompt = require("prompt");
const printShape = require("./printShape");


function getInfo(){
	prompt.start();
	
	const Shape = {
		name: 'shape',
        description: 'Which shape do you want to print?("T"= "t"="triangle","S"="s"="square","R"="r"="rhombus")', 
        type: 'string',                
        default: 'triangle',             
        required: true                        
    };
	
	const Lines = {
		name: 'lines',
        description: 'How many lines do your want to print?',
        type: 'number',                 
        default: '1',             
        required: true 
	};
	    
	const Quit = {
	    name: 'quit',
        description: 'Do you want to quit after this operation?',
        type: "boolean",
		default: false,
        required: true
    };
	
	function stringToShape(str){
		if (!str) {
			return "triangle";
		}
		else if (str === "T" || str === "t" || str === "triangle") {
			return "triangle";
		}
		else if (str === "S" || str === "s" || str === "square") {
			return "square";
		}
		else if (str === "R" || str === "r" || str === "rhombus") {
			return "rhombus";
		}
		else {
			throw "Enter a wrong shape. Which shape do you want to print?";
		}
	}
	
	prompt.get([Shape, Lines, Quit], function (err, result) {
		if ( result) {
			try{
				let num = result.lines;
				if(isNaN(num)){
					console.log("Lines is not a number.");
					getInfo();
					return;
				}
				let shape = stringToShape(result.shape);
				let shapeFunction = undefined;
				switch (shape){
					case "triangle" :
						shapeFunction = printShape.triangle;
						break;
					case "square" :
						shapeFunction = printShape.square;
						break;
					case "rhombus" :
						shapeFunction = printShape.rhombus;
						break;
				}
				shapeFunction(num);
			}catch(err){
				console.log(err);
			}
				if(!result.quit){
					getInfo();
				}
			}else if (err){
				console.err(err);
			}
		
	});	
}


getInfo();
