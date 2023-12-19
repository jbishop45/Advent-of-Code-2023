const {input} = require('./input');

const seeds = input[0].split(' ').slice(1);

// [destination_start, source_start, range]
const maps = [
      input.slice(3,48).map(i=>i.split(' ')), //seed_to_soil
      input.slice(50,70).map(i=>i.split(' ')), //soil_to_fert
      input.slice(72,98).map(i=>i.split(' ')), //fert_to_h2o
      input.slice(100,139).map(i=>i.split(' ')), //h2o_to_light
      input.slice(141,185).map(i=>i.split(' ')), //light_to_temp
      input.slice(187,223).map(i=>i.split(' ')), //temp_to_humid
      input.slice(225,236).map(i=>i.split(' ')) //humid_to_loc
];

function rangemaps(input, map) {
      const x  = parseInt(input);
      const ds = map.map(i=>parseInt(i[0]));
      const ss = map.map(i=>parseInt(i[1]));
      const r  = map.map(i=>parseInt(i[2]));
      // check if x is in a source range
      for (let i=0; i<ss.length; i++) {
            // if it is, return mapped value
            if ((x>=ss[i])&&(x<=ss[i]+r[i])) {
                  console.log('Input: ' + x)
                  console.log('SS: ' + ss[i] + ' DS: ' + ds[i] + ' Range: ' + r[i])
                  console.log('Output: ' + (ds[i]+x-ss[i]) + '\n')
                  return (ds[i]+x-ss[i]);
            }
      }
      // otherwise return x
      console.log('Direct Map \n')
      return x;
}

let out, locs = [];
for (let s=0; s<seeds.length; s++) {
      out = seeds[s];
      for (let m=0; m<maps.length; m++) {
            out = rangemaps(out,maps[m]);
      }
      locs.push(out);
}

minloc = locs.reduce((a,v)=>((a===undefined)||(v<a))?v:a);

console.log(minloc);