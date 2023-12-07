const {input} = require('./input');

let state = {
      sum: 0,
      prev_symbols: [],
      curr_symbols: [],
      prev_uncounted_parts: [],
      curr_uncounted_parts: []
};

function update_engine_buffer(line,state) {
      // 1.) Previous Uncounted Parts check
      for (let j = 0; j<state['prev_uncounted_parts'].length; j++) {
            if (state['curr_symbols'].some(s =>((s>=state['prev_uncounted_parts'][j][1]-1)&&(s<=state['prev_uncounted_parts'][j][2]+1)))) {
                  state['sum'] += state['prev_uncounted_parts'][j][0];
            }
      }
      // 2.) Current Uncounted Parts check
      const symbols = state['curr_symbols'].concat(state['prev_symbols']);
      let del_inds = [];
      for (let j = 0; j<state['curr_uncounted_parts'].length; j++) {
            if (symbols.some(s =>((s>=state['curr_uncounted_parts'][j][1]-1)&&(s<=state['curr_uncounted_parts'][j][2]+1)))) {
                  state['sum'] += state['curr_uncounted_parts'][j][0];
                  del_inds.push(j);
            }
      }
      for (let k = del_inds.length-1; k>-1; k--) {
            state['curr_uncounted_parts'].splice(del_inds[k],1)
      }
      // 3.) Replace Previous w/ Current
      state['prev_uncounted_parts'] = state['curr_uncounted_parts'];
      state['prev_symbols'] = state['curr_symbols'];
      return state
}

function search_raw_indices(line,regex) {
      let output = [];
      let ind0 = 0;
      let ind1 = line.search(regex);
      while (ind1 > -1) {
            output.push(ind0+ind1);
            ind0 += ind1+1;
            ind1 = line.slice(ind0).search(regex);
      };
      return output;
}

function identify_engine_parts(line,raw_indices) {
      let parts_arr = [];
      let ind0 = 0; //part start index
      for (let i = 0; i<raw_indices.length; i++) {
            if (raw_indices[i+1] != raw_indices[i]+1) { //check for end of part
                  parts_arr.push([parseInt(line.slice(raw_indices[ind0],raw_indices[i]+1)),raw_indices[ind0],raw_indices[i]]);
                  ind0 = i+1; //update part start index
            }
      }
      return parts_arr;
}

const lines = input;
for (let i = 0; i<lines.length; i++) {
      // populate engine buffer
      state['curr_symbols'] = search_raw_indices(lines[i],/[^0-9|.]/);
      state['curr_uncounted_parts'] = identify_engine_parts(lines[i],search_raw_indices(lines[i],/[0-9]/));
      // check for symbol adjacencies in first line
      let del_inds = [];
      if (i == 0) {
            for (let j = 0; j<state['curr_uncounted_parts'].length; j++) {
                  if (state['curr_symbols'].some(s =>((s>=state['curr_uncounted_parts'][j][1]-1)&&(s<=state['curr_uncounted_parts'][j][2]+1)))) {
                        state['sum'] += state['curr_uncounted_parts'][j][0];
                        del_inds.push(j);
                  }
            }
            for (let k = del_inds.length-1; k>-1; k--) {
                  state['curr_uncounted_parts'].splice(del_inds[k],1)
            }
            state['prev_uncounted_parts'] = state['curr_uncounted_parts'];
            state['prev_symbols'] = state['curr_symbols'];
      }
      // update engine buffer
      if (i > 0) { 
            state = update_engine_buffer(lines[i],state)
      };
}

console.log(state['sum']);