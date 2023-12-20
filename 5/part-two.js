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
                        parseInt(i[1])+parseInt(i[2])-1,    // end
                        parseInt(i[0])-parseInt(i[1])]);    // transform
// Helper for Sorting Intervals
const _by_start = ((intervalA,intervalB)=>intervalA[0]-intervalB[0]);

let input_intervals = seed_intervals.sort(_by_start);
let map_intervals, output_intervals;
let a,b,x,y,z,i;
for (let m=0; m<maps.length; m++) {
    output_intervals = [];
    map_intervals = maps[m].map(intervals).sort(_by_start);
    console.log('M'+m);
    console.log('Input: ');
    console.log(input_intervals[0])
    console.log('Maps:')
    console.log(map_intervals[0]);
    i = 0;
    // Until Input or Maps Interval Buffers are Empty
    while ((input_intervals.length > 0) && (i < map_intervals.length)) {
        // Iterate Over Maps Intervals
        // (this could be more efficient by shifting elements of a temp maps buffer)
        a = input_intervals[0][0];
        b = input_intervals[0][1];
        x = map_intervals[i][0];
        y = map_intervals[i][1];
        z = map_intervals[i][2];
        if (a>=x) {
            if (a>y) {      // Case F: x<=y<a<=b    No Overlap - Map Left of Input
                
            } else {
                if (b>y) {  // Case E: x<=a<=y<b    Partial Overlap - Map Left of Input
                    input_intervals.shift();
                    input_intervals.unshift([y+1,b]);
                    output_intervals.push([a+z,y+z]);
                } else {    // Case D: x<=a<=b<=y   Full Overlap
                    input_intervals.shift();
                    output_intervals.push([a+z,b+z]);
                }
            }
        } else {
            if (b>y) {      // Case C: a<x<=y<b     Split
                    input_intervals.shift();
                    input_intervals.unshift([y+1,b]);
                    output_intervals.push([a,x-1]);
                    output_intervals.push([x+z,y+z]);
            } else {
                if (b>=x) { // Case B: a<x<=b<=y    Partial Overlap = Map Right of Input
                    input_intervals.shift();
                    output_intervals.push([a,x-1]);
                    output_intervals.push([x+z,b+z]);
                } else {    // Case A: a<=b<x<=y    No Overlap - Map Right of Input
                    output_intervals.push(input_intervals.shift());
                }
            }
        }
        i++;
    }
    // Translate Remaining Input Intervals When Maps Intervals Buffer is Empty
    while (input_intervals.length > 0) {
        output_intervals.push(input_intervals.shift());
    }
    input_intervals = output_intervals.sort(_by_start);
}

console.log(input_intervals)
//minloc = input_intervals.reduce((a,v)=>((a===undefined)||(v[0]<a))?v[0]:a);

console.log(input_intervals[0][0])