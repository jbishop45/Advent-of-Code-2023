const {input} = require('./input');

// Types of Hands:
// - 5 of a Kind
// - 4 of a Kind
// - Full House
// - Three of a Kind
// - Two Pair
// - One Pair
// - High Card

// Then compare by first second third fourth fifth if ties - use base 12 :)

const hand_vals = {five_of_a_kind: 6e6, four_of_a_kind: 5e6, full_house: 4e6, three_of_a_kind: 3e6, two_pair: 2e6, one_pair: 1e6, high_card: 0}
const card_vals = {A: 12, K: 11, Q: 10, J: 9, T: 8, 9:7, 8:6, 7:5, 6:4, 5:3, 4:2, 3:1, 2:0}

const score = hand => hand_vals['five_of_a_kind'] + card_vals[hand[0]]*12^4 + card_vals[hand[1]]*12^3 + card_vals[hand[2]]*12^2 + card_vals[hand[3]]*12 + card_vals[hand[4]];

const hand_bids = input[0]


console.log('AAAAA'.score)