let {input} = require('./input');

directions = input[0].replace(/L/g,'0').replace(/R/g,'1');
let graph_dict = {};
let keys = [];
let periods = [];
let key = '', left = '', right = '';
for (let i=2; i<input.length; i++) {
    key = input[i].slice(0,3);
    left = input[i].slice(7,10);
    right = input[i].slice(12,15);
    graph_dict[key] = [left,right]; 
    if (key[2]=='A') {
        keys.push(key);
        periods.push(0);
    }
}

let num_steps=0, prev_steps=0, z_count=false;
for (let i=0; i<keys.length; i++) {
    num_steps = 0;
    prev_steps = 0;
    z_count = false;
    while (periods[i]==0) {
        keys[i] = graph_dict[keys[i]][parseInt(directions[num_steps % directions.length])];
        num_steps++;
        if (keys[i][2] == 'Z') {
            if (z_count) {
                periods[i] = num_steps - prev_steps;
            } else {
                prev_steps = num_steps;
                z_count = true;
            }
            periods[i] = num_steps;
        }
    }
}

// https://stackoverflow.com/questions/47047682/least-common-multiple-of-an-array-values-using-euclidean-algorithm
const gcd = (a, b) => a ? gcd(b % a, a) : b;
const lcm = (a, b) => a * b / gcd(a, b);

// conveniently, the num_steps to arrive at first keys[j][2]=='Z' 
// destination is periodic with directions.length
console.log(periods.reduce(lcm))