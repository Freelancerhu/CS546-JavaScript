const fs = require('fs');

let fileData = exports = module.exports;

fileData.getFileAsString = (path) => {
	return new Promise((fulfill, reject) => {
		if(!path) reject("No path is provided.");
		fs.readFile(path, "utf-8", (error, data) => {
			if(error) {
				reject(error);
			}
			let asString = "";
			asString += data;
			fulfill(asString);
		});
	});
};

fileData.getFileAsJSON = (path) => {
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

fileData.saveStringToFile = (path, data) => {
	return new Promise((fulfill, reject) => {
		if(!path) reject("No path is provided.");
		fs.writeFile(path, data, (error, data) => {
			if(error) {
				reject(error);
			}
			fulfill(data);
		});
	});
};

fileData.saveJSONToFile = (path, data) => {
	return new Promise((fulfill, reject) => {
		if(!path) reject("No path is provided.");
		fs.writeFile(path, JSON.stringify(data, null, 4), (error, data) => {
			if(error) {
				reject(error);
			}
			fulfill(data);
		});
	});
};