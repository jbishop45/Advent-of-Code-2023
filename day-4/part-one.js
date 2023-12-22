const {input} = require('./input');

let total_points = 0;
let card_points = 0;
for (let i=0; i<input.length; i++) {
      win_nums = input[i].replace(/\s+/g,' ').split(' |')[0].split(': ')[1].split(' ');
      our_nums = input[i].replace(/\s+/g,' ').split('| ')[1].split(' ');
      card_points = 0;
      for (let j=0; j<our_nums.length; j++) {
            if (win_nums.includes(our_nums[j])) {
                  if (card_points == 0) {
                        card_points = 1;
                  } else {
                        card_points *= 2;
                  }
            }
      }
      total_points += card_points;
}



console.log(total_points);