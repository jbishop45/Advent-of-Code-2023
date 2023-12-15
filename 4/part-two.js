const {input} = require('./input');

let card_counts = Array(input.length).fill(1);
let matches = 0;
for (let i=0; i<input.length; i++) {
      win_nums = input[i].replace(/\s+/g,' ').split(' |')[0].split(': ')[1].split(' ');
      our_nums = input[i].replace(/\s+/g,' ').split('| ')[1].split(' ');
      matches = 0;
      for (let j=0; j<our_nums.length; j++) {
            if (win_nums.includes(our_nums[j])) {
                matches++;
            }
      }
      for (let k=1; k<=matches; k++) {
            card_counts[i+k] += card_counts[i];
      }
}
output = card_counts.reduce((partialSum, x) => partialSum + x, 0);

console.log(output);