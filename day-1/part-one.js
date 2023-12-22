const {input} = require('./input');

let sum = 0;
const calibration_values = input
	.map((amended) => {
		return amended
            .split('\n')
            .map(line => line.match(/[0-9]/g))
            .map(digits_arr => digits_arr[0].concat(digits_arr[digits_arr.length - 1]))
            .map(Number)[0];
	})
	.forEach(digits => sum += digits);

console.log(sum);