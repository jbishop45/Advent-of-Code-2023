let {input} = require('./input');

let x_i, y_i, z_i, vx_i, vy_i, vz_i, 
let x_j, y_j, z_j, vx_j, vy_j, vz_j;
let min=2e14, max=4e14;

for (let i=0; i<input.length; i++) {
    x_i = input[i].split(' @ ')[0].split(', ')[0];
    y_i = input[i].split(' @ ')[0].split(', ')[1];
    z_i = input[i].split(' @ ')[0].split(', ')[2];
    vx_i = input[i].split(' @ ')[1].split(', ')[0];
    vy_i = input[i].split(' @ ')[1].split(', ')[1];
    vz_i = input[i].split(' @ ')[1].split(', ')[2];
    for (let j=i+1; j<input.length; j++) {
        x_j = input[j].split(' @ ')[0].split(', ')[0];
        y_j = input[j].split(' @ ')[0].split(', ')[1];
        z_j = input[j].split(' @ ')[0].split(', ')[2];
        vx_j = input[j].split(' @ ')[1].split(', ')[0];
        vy_j = input[j].split(' @ ')[1].split(', ')[1];
        vz_j = input[j].split(' @ ')[1].split(', ')[2];
        if (vx_j!=vx_i) {

        } else {
            
        }
    }
}
console.log(4e14==x_max)