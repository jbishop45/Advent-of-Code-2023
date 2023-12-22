const {input} = require('./input');
// const input = [
//       '....|',
//       '..F-J',
//       '.FS7.',
//       '.L-J.',
//       '.....'
// ]

const connections = {
      'N': ['|','L','J','S'],
      'E': ['-','L','F','S'],
      'S': ['|','7','F','S'],
      'W': ['-','J','7','S']
};

// Find Starting Point
let s_i = -1, s_j = -1;
for (let i=0; i<input.length; i++) {
      for (let j=0; j<input[0].length; j++) {
            if (input[i][j] == 'S') {
                  s_i = i; 
                  s_j = j;
                  break;
            }
      }
}
// Try Going Each Cardinal Direction From Start
let trajectory = null; i=0;
const compass = Object.keys(connections);
while ((trajectory===null)&&(i<compass.length)) {
      dir = compass[i];
      trajectory = checkPathFromStart(s_i,s_j,dir);
      i++;
}

function checkNextNeighbor(trajectory) {
      const len = trajectory.length;
      const i = trajectory[len-1][0], j = trajectory[len-1][1];
      const prev_i = trajectory[len-2][0], prev_j = trajectory[len-2][1]; 
      const current_pipe = input[i][j];
      // Check North
      if (((i-1)>-1)&&((i-1)!=prev_i)) {
            north_pipe = input[i-1][j];
            if ((connections['N'].includes(current_pipe)) && (connections['S'].includes(north_pipe))) {
                  trajectory.push([i-1,j]);
            }
      }
      // Check South
      if (((i+1)<input.length)&&((i+1)!=prev_i)) {
            south_pipe = input[i+1][j];
            if ((connections['S'].includes(current_pipe)) && (connections['N'].includes(south_pipe))) {
                  trajectory.push([i+1,j]);
            }
      }
      // Check West
      if (((j-1)>-1)&&((j-1)!=prev_j)) {
            west_pipe = input[i][j-1];
            if ((connections['W'].includes(current_pipe)) && (connections['E'].includes(west_pipe))) {
                  trajectory.push([i,j-1]);
            }
      }
      // Check East
      if (((j+1)<input[0].length)&&((j+1)!=prev_j)) {
            east_pipe = input[i][j+1];
            if ((connections['E'].includes(current_pipe)) && (connections['W'].includes(east_pipe))) {
                  trajectory.push([i,j+1]);
            }
      }
      if (trajectory.length > len) {return trajectory;} else {return null;}
}

function checkPathFromStart(s_i,s_j,direction) {
      // Append Start
      let trajectory = [];
      trajectory.push([s_i,s_j]);
      // Append First Pipe 
      let c_i=s_i, c_j=s_j;
      if (direction=='N') {c_i -= 1;} else
      if (direction=='E') {c_j += 1;} else
      if (direction=='S') {c_i += 1;} else 
      if (direction=='W') {c_j -= 1;}
      trajectory.push([c_i,c_j]);
      // Explore Until Loop or Deadend
      while (trajectory!=null) {
            if (checkLoop(trajectory)) {break;}
            trajectory = checkNextNeighbor(trajectory);
      }
      return trajectory;
}

function checkLoop(trajectory) {
      pos = trajectory[trajectory.length-1];
      pipe = input[pos[0]][pos[1]];
      return (pipe=='S');
}

console.log((trajectory.length-1)/2)