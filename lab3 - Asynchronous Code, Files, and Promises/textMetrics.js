module.exports = {
	simplify : function(data){
		let temString = data.toLowerCase();
		let XX = temString.replace(/\W+/g, " ");
		return XX;
	},
	
	createMetrics : function(data) {
		console.log("CreatNetrics");
		let scanString = data;//传进来的数据
		let totalLetters = 0;//总字母数
		
		let totalWords = 0;// the number of words.
		
		let uniqueWords = 0;// total number of unique words that appear in the text.
		
		let longWords = 0;//number of words in the text that are 6 or more letters long.
		
		let averageWordLength = 0;//the average number of letters in a word in the text.
		let tem = [];
		let temS = "";
		let temN = "";
		let x = 0;
		let res = {};
		let wordOccurrences = {};
		
		for(let i = 0; i != data.length; ++i){
			if(isNaN(scanString[i])){
				++totalLetters;//总字母数
			}
			if( isNaN(scanString[i])){
				temS += scanString[i];
			}else if(/^\d+$/.test(scanString[i])){
				++totalLetters;
				temN += scanString[i]
			} 
			
			if((i+1) === scanString.length){
				if(isNaN(scanString[i])){
					let j = 0;
					for(let i = 0; i < x; ++i){
						if(tem[i] !== temS){
							++j;
						}
					}
					if(j === x){
						++uniqueWords;
					}

					if(temS.length >= 6){
						longWords++;
					}
					tem[x] = temS;
					++totalWords;

				}else{
					let j = 0;
					for(let i = 0; i < x; ++i){
						if(tem[i] !== temN){
							++j;
						}
					}
					if(j === (x)){
						++uniqueWords;
					}
					++totalWords;
					tem[x] = temN;
				}
			}
			
			
			if((scanString[i] === ' ' && (i+1) !== scanString.length)){
				if( (temS !== "" )){
					let j = 0;
					for(let i = 0; i < x; ++i){
						if(tem[i] !== temS){
							++j;
						}
					}
					if(j === (x)){
						++uniqueWords;
					}
					if(temS.length >= 6){
						longWords++;
					}
					++totalWords;
					tem[x] = temS;
					x++;
					
				}
				if( (temN !== "" )){
					let j = 0;
					for(let i = 0; i < x; ++i){
						if(tem[i] !== temN){
							++j;
						}
					}
					if(j === x){
						++uniqueWords;
					}
					++totalWords;
					tem[x] = temN;
					x++;
				}
				temS = "";
				temN = "";
			}
		}
		averageWordLength = totalLetters / totalWords;
		for(let i = 0; i != x+1; ++i){
			if(tem[i] !== "" ){
				let num = 1;
				for(let j = 0; j != x+1; ++j){
					if((tem[i] === tem[j])&&(i != j)){
						++num;
						tem[j] = "";
					}
					wordOccurrences[tem[i]] = num;
				}
			}
		}
		
		
		
		
		
		
		
		//console.log("the number of letters = " + totalLetters);
		//console.log("the number of words = " + totalWords);
		//console.log("the number of unique = " + uniqueWords);
		//console.log("the number of longWords = " + longWords);
		//console.log("the number of averageWordLength = " + averageWordLength);
		
		res["totalLetters"] = totalLetters;
		res['totalWords'] = totalWords;
		res['uniqueWords'] = uniqueWords;
		res['longWords'] = longWords;
		res['averageWordLength'] = averageWordLength;
		res['wordOccurrences'] = wordOccurrences;
		
		
		
		
		
		
		//console.log(res);
		//console.log(wordOccurrences);
		
		
		return res;
	}
	
	
	
	
}