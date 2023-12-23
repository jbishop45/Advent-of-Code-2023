let {input} = require('./input');

let init_steps = input[0].split(',')
let hash = 0;
let map = Array(256).fill([]);
// Populate Boxes
for (let i=0; i<init_steps.length; i++) {
    label = init_steps[i].split(/-|=/)[0];
    oper = init_steps[i].match(/-|=/);
    hash = 0;
    for (let j=0; j<label.length; j++){
        hash += label.charCodeAt(j);
        hash *= 17;
        hash %= 256;
    }
    ind = map[hash].findIndex(e=>e==label);
    if (oper=='-') {
        if (ind>-1) {
            map[hash].splice(ind,2);
        }
    } else if (oper=='=') {
        focal = parseInt(init_steps[i].split(/-|=/)[1]);
        if (ind>-1) {
            map[hash][ind+1] = focal;
        } else {
            map[hash] = map[hash].concat(label);
            map[hash] = map[hash].concat(focal);
        }
    }
}
// Compute Focusing Power
let focusing_power = 0;
for (let box=0; box<256; box++) {
    for (let slot=0; slot<(map[box].length/2); slot++) {
        focusing_power += ((box+1)*(slot+1)*(map[box][slot*2+1]));
    }
}

console.log(focusing_power)