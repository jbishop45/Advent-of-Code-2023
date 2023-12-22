const {input} = require('./input');

springs = input[0].split(' ')[0];
condition_records = input[0].split(' ')[1].split(',').map(Number);

// Finds spring conditions that are forced and removes them 
function identify_constraints(springs, condition_records) {

}

console.log(springs)
console.log(condition_records)