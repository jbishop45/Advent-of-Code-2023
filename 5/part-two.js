const {input} = require('./input');

// Get Input Intervals
const seeds = input[0].split(' ').slice(1);
let seed_intervals = [];
for (let i=0; i<seeds.length/2; i++) {
    seed_intervals.push([parseInt(seeds[2*i]),parseInt(seeds[2*i+1])]);
}

// [destination_start, source_start, range]
const maps = [
      input.slice(3,48).map(i=>i.split(' ')),       //seed_to_soil
      input.slice(50,70).map(i=>i.split(' ')),      //soil_to_fert
      input.slice(72,98).map(i=>i.split(' ')),      //fert_to_h2o
      input.slice(100,139).map(i=>i.split(' ')),    //h2o_to_light
      input.slice(141,185).map(i=>i.split(' ')),    //light_to_temp
      input.slice(187,223).map(i=>i.split(' ')),    //temp_to_humid
      input.slice(225,236).map(i=>i.split(' '))     //humid_to_loc
];

// Helper for Parsing Maps Intervals
const intervals = (i=> [parseInt(i[1]),                     // start
                        parseInt(i[1]+parseInt(i[2])-1,     // end
                        parseInt(i[0])-parseInt(i[1]))]);   // transform
// Helper for Sorting Intervals
const sort_by_start = ((intervalA,intervalB)=>intervalA[0]-intervalB[0]);


function interval_maps(input_interval,map_interval) {
    const a = input_interval[0];
    const b = input_interval[1];
    const x = map_interval[0];
    const y = map_interval[1];
    const z = map_interval[2];

    let output_intervals = [];
    
    if (a>x) {
        if (a>y) {      // Case F   x <= y < a <= b

        } else {
            if (b>y) {  // Case E   x <= a <= y < b

            } else {    // Case D   x <= a <= b <= y

            }
        }
    } else {
        if ()       // Case C   a < x <= y < b

    }
}



minloc = locs.reduce((a,v)=>((a===undefined)||(v<a))?v:a);

console.log(minloc);