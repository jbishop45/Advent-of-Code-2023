const {input} = require('./input');

mask = Array(input.length).fill(Array(input[0].length).join('1'));
trajectory = [];

// Find Starting Point
for (let i=0; i<input.length; i++) {
      for (let j=0; j<input[0].length; j++) {
            if (input[i][j] == 'S') {
                  const s_i = i;
                  const s_j = j;
                  break;
            }
      }
}

connections = {
      'N': ['|','L','J'],
      'E': ['-','L','F'],
      'S': ['|','7','F'],
      'W': ['-','J','7']
};

function checkNorth(i,j,s_i,s_j,trajectory) {
      if (connections['N'].includes(input[i][j])) {
            trajectory.push([i-1,j]);
            if (checkLoop(i-1,j,s_i,s_j)) {

            }
            checkNorth(i-1,j,s_i,s_j);
            checkEast(i-1,j,s_i,s_j);
            checkWest(i-1,j,s_i,s_j);
      }
}
function checkEast() {

}
function checkSouth() {

}
function checkWest() {

}


console.log(s_i);
console.log(s_j);
console.log(input[s_i])