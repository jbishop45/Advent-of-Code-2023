const {input} = require('./input');

function galaxies(image) {
      let galaxies = {'row': [], 'col': []};
      for (let i=0; i<image.length; i++) {
            for (let j=0; j<image[0].length; j++) {
                  if (image[i][j]==='#') {
                        galaxies['row'].push(i);
                        galaxies['col'].push(j);
                  }
            }
      }
      return galaxies;
}

function sum_of_distances(galaxies, expansion_factor) {
      let sum = 0;
      const num_gal = galaxies['row'].length;
      // iterate through combinations
      let r_min, r_max, c_min, c_max;
      let expansion_count;
      for (let i=0; i<num_gal-1; i++) {
            for (let j=i+1; j<num_gal; j++) {
                  expansion_count = 0;
                  r_i = galaxies['row'][i];
                  c_i = galaxies['col'][i];
                  r_j = galaxies['row'][j];
                  c_j = galaxies['col'][j];
                  if (r_i<r_j) {r_min=r_i; r_max=r_j;} else {r_min=r_j; r_max=r_i;}
                  if (c_i<c_j) {c_min=c_i; c_max=c_j;} else {c_min=c_j; c_max=c_i;}
                  for (let r=r_min+1; r<r_max; r++) {
                        if (!galaxies['row'].includes(r)) {expansion_count++;}
                  }
                  for (let c=c_min+1; c<c_max; c++) {
                        if (!galaxies['col'].includes(c)) {expansion_count++;}
                  }
                  sum += (r_max-r_min) + (c_max-c_min) + expansion_count*(expansion_factor-1);
            }
      }
      return sum;
}

g = galaxies(input);
console.log(sum_of_distances(g,1e6))