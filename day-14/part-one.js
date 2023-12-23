let {input} = require('./input');

let total_load = 0, cube_row = 0, round_counter = 0;
for (let j=0; j<input[0].length; j++) {
    cube_row = 0;
    round_counter = 0;
    for (let i=0; i<input.length; i++) {
        if (input[i][j] == 'O') {
            total_load += (input.length - cube_row - round_counter); 
            round_counter++;
        } else if (input[i][j] == '#') {
            cube_row = i+1;
            round_counter = 0;
        }
    }
}

console.log(total_load)