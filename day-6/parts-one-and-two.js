const {input} = require('./input');
const math = require('mathjs'); //requires npm install mathjs

// INPUT
// Time: race duration (ms)
// Distance: race record distance (mm)

// Toy boat has a starting speed of 0 mm/ms
// For each (ms) holding button, gains 1 mm/ms

// PART ONE
const times = input[0].replace(/\s+/g,' ').split(' ').slice(1);
const distances = input[1].replace(/\s+/g,' ').split(' ').slice(1);
let output_1 = 1;
for (let i=0; i<distances.length; i++) {
    output_1 *= ways_to_win(parseInt(times[i]),parseInt(distances[i]));
}

// PART TWO
const time = parseInt(input[0].replace(/\s+/g,'').slice(5));
const distance = parseInt(input[1].replace(/\s+/g,'').slice(9));
const output_2 = ways_to_win(time,distance); 

function ways_to_win(duration,record) {
    // distance_margin_over_record = hold_time*(duration-hold_time) - record = -hold_time^2 + duration*hold_time - (record+0.0001)
    // intercepts = -duration/2 +/- sqrt(duration^2 + 4*(record)/2
    let intercept_1 = math.ceil(duration/2 - math.sqrt(duration**2 - 4*(record+0.0001))/2); //add eps to record since we must beat record
    let intercept_2 = math.floor(duration/2 + math.sqrt(duration**2 - 4*(record+0.0001))/2);
    // set intercept to 1 instead of 0, since 0 acceleration cannot finish race
    // set intercept to (duration-1), since holding button whole duration cannot finish race
    if (intercept_1 < 1) {
        intercept_1 = 1;    
    } else if (intercept_1 > duration-1) {
        intercept_1 = duration-1;
    }
    if (intercept_2 < 1) {
        intercept_2 = 1; 
    } else if (intercept_2 > duration-1) {
        intercept_2 = duration-1; 
    }
    return (intercept_2 - intercept_1 + 1);
}

console.log(output_1);
console.log(output_2);