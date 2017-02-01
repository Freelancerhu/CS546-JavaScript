module.exports = {
	triangle : function (lines){
		if ( typeof lines !== "number" || lines === undefined){
			throw "Input is not a number";
		}
		if ( lines <= 0){
			throw "Input must be greater than 0.";
		}
		for( let i = 1; i <= lines; ++i){
			let y = "";
			let x = "";
			for ( let sum = lines - i; sum >0; --sum){
				y += " ";
			}
			y += "/";
			if( i > 1 && i === lines){
				for( let j = 1; j < (2*lines -1); ++j){
					y += "-";
				}
			}else if( i !== 1){
				for( let o = 1; o < (2*i -1); ++o){
					y += " ";
				}
			}
			y += "\\";
			console.log(y);
		}
	},
	square : function (lines){
		if ( typeof lines !== "number" || lines === undefined){
			throw "Input is not a number";
		}
		if ( lines <= 1){
			throw "Input must be greater than 1.";
		}
		for (let i = 1; i <= lines; ++i){
			//let y = "|";
			let x = "|";
			if( i !== 1 && i !== lines){
				for( let j = 0; j < lines; ++j){
					x += " ";
				}
			}else{
				for( let j = 0; j < lines; ++j){
					x += "-";
				}
			}
			x += "|";
			console.log(x);
		}
	},
	rhombus : function (lines) {
		if ( typeof lines !== "number" || lines === undefined){
			throw "Input is not a number";
		}
		if ( lines%2 != 0){
			throw "Input must be an even number!";
		}
		if ( lines === 0){
			throw "Input must be greater than 0";
		}
		for( let i = 1; i <= lines; ++i){
			let x = "";
			let y = "";
			let mid = lines/2;
			if( i <= mid){
				for ( let sum = mid-i; sum > 0; --sum){
					x += " ";
				}
				x += "/";
				if( i ===1){
					x += "-";
				}else{
					for ( let j = 1; j <= (2 * i - 1); ++j){
						x += " ";
					}
				}
				x += "\\";
			}else{
				for ( let sum = i - mid; sum > 1; --sum){
					x += " ";
				}
				x += "\\";
				if( i === lines){
					x += "-";
				}else{
					for ( let j = 1; j <= ( 2 * (lines - i + 1) - 1) ; ++j){
						x += " ";
					}
				}
				x += "/";
			}
			console.log(x);
		}
	}
}