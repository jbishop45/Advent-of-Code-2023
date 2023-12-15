const {input} = require('./input');

const forward = false;

let extrap = 0;
let sum_of_extraps = 0;
for (let i=0; i<input.length; i++) {
      extrap = 0;
      seq = input[i].split(' ');
      seqs = [seq];
      // compute differences
      while (seq.some(x=>parseInt(x)!=0)) {
            seq = differences(seq);
            seqs.push(seq);
      }
      // extrapolate
      for (let j=2; j<=seqs.length; j++) {
            if (forward) { //backward extrapolate
                  extrap += parseInt(seqs[seqs.length-j][seqs[seqs.length-j].length-1]); 
            } else {
                  extrap *= -1;
                  extrap += parseInt(seqs[seqs.length-j][0]); 
            }
      }
      sum_of_extraps += extrap;
}


function differences(sequence) {
      let output = [];
      for (let i=1; i<sequence.length; i++) {
            output.push(parseInt(sequence[i])-parseInt(sequence[i-1]));
      }
      return output;
}

console.log(sum_of_extraps);