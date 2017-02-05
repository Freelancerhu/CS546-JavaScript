const testMetrics = require("./textMetrics");
const fileData = require("./fileData");

let stringRes = "";



fileData.getFileAsJSON('chapter1.result.json').then((jsonData) => {
	console.log(jsonData);
}).catch((err) => {
	fileData.getFileAsString("chapter1.txt").then((fileData) => {
		return testMetrics.simplify(fileData);
	}).catch((error) => {
		console.log("There was an error simplify the original file")
		console.log(error);
		return stringRes;
	}).then((stringData) => {
		//console.log(stringData);
		fileData.saveStringToFile('chapter1.debug.txt', stringData);
		return stringData;
	}).then( (stringM) => {
		return testMetrics.createMetrics(stringM);
	}).then( (mJson) => {
		console.log(mJson);
		return fileData.saveJSONToFile('chapter1.result.json', mJson);
	}).then(() => {
		console.log("Done.");
	}).catch( (err) => {
		console.log(err);
	});
});


/*
fileData.getFileAsString("chapter1.txt").then((fileData) => {
	return testMetrics.simplify(fileData);
}).catch((error) => {
	console.log("There was an error simplify the original file")
	console.log(error);
	return stringRes;
}).then((stringData) => {
	console.log(stringData);
	fileData.saveStringToFile('chapter1.debug.txt', stringData);
	return stringData;
}).then( (stringM) => {
	return testMetrics.createMetrics(stringM);
}).then( (mJson) => {
	console.log(mJson);
	return fileData.saveJSONToFile('chapter1.result.json', mJson);
}).then(() => {
	console.log("Done.");
}).catch( (err) => {
	console.log(err);
});
*/
fileData.getFileAsJSON('chapter2.result.json').then((jsonData) => {
	console.log(jsonData);
}).catch((err) => {
	fileData.getFileAsString("chapter2.txt").then((fileData) => {
		return testMetrics.simplify(fileData);
	}).catch((error) => {
		console.log("There was an error simplify the original file")
		console.log(error);
		return stringRes;
	}).then((stringData) => {
		//console.log(stringData);
		fileData.saveStringToFile('chapter2.debug.txt', stringData);
		return stringData;
	}).then( (stringM) => {
		return testMetrics.createMetrics(stringM);
	}).then( (mJson) => {
		console.log(mJson);
		return fileData.saveJSONToFile('chapter2.result.json', mJson);
	}).then(() => {
		console.log("Done.");
	}).catch( (err) => {
		console.log(err);
	});
});


fileData.getFileAsJSON('chapter3.result.json').then((jsonData) => {
	console.log(jsonData);
}).catch((err) => {
	fileData.getFileAsString("chapter3.txt").then((fileData) => {
		return testMetrics.simplify(fileData);
	}).catch((error) => {
		console.log("There was an error simplify the original file")
		console.log(error);
		return stringRes;
	}).then((stringData) => {
		//console.log(stringData);
		fileData.saveStringToFile('chapter3.debug.txt', stringData);
		return stringData;
	}).then( (stringM) => {
		return testMetrics.createMetrics(stringM);
	}).then( (mJson) => {
		console.log(mJson);
		return fileData.saveJSONToFile('chapter3.result.json', mJson);
	}).then(() => {
		console.log("Done.");
	}).catch( (err) => {
		console.log(err);
	});
});

