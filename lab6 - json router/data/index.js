const fs = require('fs');

let fileData = exports = module.exports;

fileData.read = (path) => {
	return new Promise((fulfill, reject) => {
		if(!path) reject("No path is provided.");
		fs.readFile(path, "utf-8", (error, data) => {
			if(error) {
				reject(error);
			}
			try{
				let asJson = JSON.parse(data);
				fulfill(asJson);
			} catch (parsingError){
				reject(parsingError);
			}
		});
	});	
};

