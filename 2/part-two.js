const {input} = require('./input');

let sum = 0;
const sum_of_powers = input
	.map((games) => {
		return games
            .split('\n')
            .map(power_of_min_set)[0]
	})
    .forEach(power => sum += power);

function power_of_min_set(game) {
    const block_arr = game.split(/: |, |; /g)
    let dict = {red: 0, green: 0, blue: 0};
    for (let i = 1; i<block_arr.length; i++) {
          let [count,color] = block_arr[i].split(" ");
          if (dict[color] < parseInt(count)) {dict[color] = parseInt(count)};
    }
    power = dict["red"] * dict["green"] * dict["blue"]
    return power;
}

console.log(sum);