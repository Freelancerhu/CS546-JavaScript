let exportedMethods = {
	textStr(testStr) {
		if(typeof testStr != "string" || testStr.length == 0) throw("You must provide a string.");
		let rep = /[\W_]/g;
		let lowS = testStr.toLowerCase().replace(rep, '');
		if (lowS.length == 0) throw("You must provide a string.");
		let reverS = lowS.split('').reverse().join('');
		return lowS === reverS;
	}
}

module.exports = exportedMethods;