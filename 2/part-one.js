const {input} = require('./input');

let sum = 0;
const possible_games = input
	.map((games) => {
		return games
            .split('\n')
            .map(check_possibility)[0]
	})
      .forEach(game_id => sum += game_id);
      
function check_possibility(game) {
      const block_arr = game.split(/: |, |; /g)
      let game_id = parseInt(block_arr[0].split(" ")[1])
      for (let i = 1; i<block_arr.length; i++) {
            const [count,color] = block_arr[i].split(" ");
            if ((color=="red" && count > 12) || (color=="green" && count > 13) || (color=="blue" && count > 14)) {game_id = 0};
      }
      return game_id;
}

console.log(sum);