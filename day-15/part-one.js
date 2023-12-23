let {input} = require('./input');

let init_steps = input[0].split(',')
let sum_of_hash = 0, curr_val = 0;
for (let i=0; i<init_steps.length; i++) {
    curr_val = 0;
    for (let j=0; j<init_steps[i].length; j++){
        curr_val += init_steps[i].charCodeAt(j);
        curr_val *= 17;
        curr_val %= 256;
    }
    sum_of_hash += curr_val;
}

console.log(sum_of_hash)