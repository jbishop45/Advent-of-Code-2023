const {input} = require('./input');

let sum = 0;
const numeric_input = input
    .map((amended) => {
        return amended
            .split('\n')
            .map(line => line.replaceAll(/zero/gi,"0o"))
            .map(line => line.replaceAll(/one/gi,"o1e"))
            .map(line => line.replaceAll(/two/gi,"t2o"))
            .map(line => line.replaceAll(/three/gi,"t3e"))
            .map(line => line.replaceAll(/four/gi,"4"))
            .map(line => line.replaceAll(/five/gi,"5e"))
            .map(line => line.replaceAll(/six/gi,"6"))
            .map(line => line.replaceAll(/seven/gi,"7n"))
            .map(line => line.replaceAll(/eight/gi,"e8t"))
            .map(line => line.replaceAll(/nine/gi,"n9e"))[0];
    });
    
const calibration_values = numeric_input
	.map((amended) => {
		return amended
            .split('\n')
            .map(line => line.match(/[0-9]/g))
            .map(digits_arr => digits_arr[0].concat(digits_arr[digits_arr.length - 1]))
            .map(Number)[0];
	})
	.forEach(digits => sum += digits);

console.log(sum);