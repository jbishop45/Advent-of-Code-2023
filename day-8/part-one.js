let {input} = require('./input');

directions = input[0].replace(/L/g,'0').replace(/R/g,'1');
let graph_dict = {};
let key = '', left = '', right = '';
for (let i=2; i<input.length; i++) {
    key = input[i].slice(0,3);
    left = input[i].slice(7,10);
    right = input[i].slice(12,15);
    graph_dict[key] = [left,right]; 
}

key = 'AAA';
let num_steps=0;
while (key!='ZZZ') {
    key = graph_dict[key][parseInt(directions[num_steps % directions.length])];
    num_steps++;
}

console.log(num_steps)