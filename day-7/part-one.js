let {input} = require('./input');

// Types of Hands:
// - 5 of a Kind
// - 4 of a Kind
// - Full House
// - Three of a Kind
// - Two Pair
// - One Pair
// - High Card

// Then compare by first second third fourth fifth if ties - use base 13 :)


function label_hand_type(hand) {
    let temphand = '';
    // Check for Five
    if (hand.match(RegExp(hand[0],'g')).length == 5) {
        return 'five_of_a_kind';
    }
    // Check for Four
    for (let i=0; i<2; i++) {
        if (hand.match(RegExp(hand[i],'g')).length == 4) {
            return 'four_of_a_kind';
        }
    }
    // Check for Full House and Three
    for (let j=0; j<3; j++) {
        if (hand.match(RegExp(hand[j],'g')).length == 3) {
            temphand = hand.replace(RegExp(hand[j],'g'),'');
            if (temphand.match(RegExp(temphand[0],'g')).length == 2)  {
                return 'full_house';
            // Else Return Three
            } else {
                return 'three_of_a_kind';
            }
        }
    }
    // Check for Two Pair and Pair
    for (let k=0; k<4; k++) {
        if (hand.match(RegExp(hand[k],'g')).length == 2) {
            temphand = hand.replace(RegExp(hand[k],'g'),'');
            // Check for Two Pair
            for (let l=0; l<2; l++) { 
                if (temphand.match(RegExp(temphand[l],'g')).length == 2) {
                    return 'two_pair';
                }
            }
            // Else Return Pair
            return 'one_pair';
        }
    }
    return 'high_card';
}

const hand_vals = {'five_of_a_kind': 6e6, 'four_of_a_kind': 5e6, 'full_house': 4e6, 'three_of_a_kind': 3e6, 'two_pair': 2e6, 'one_pair': 1e6, 'high_card': 0};
const card_vals = {'A': 12, 'K': 11, 'Q': 10, 'J': 9, 'T': 8, '9':7, '8':6, '7':5, '6':4, '5':3, '4':2, '3':1, '2':0};
const score = (hand) => (hand_vals[(label_hand_type(hand))] + card_vals[hand[0]]*13**4 + card_vals[hand[1]]*13**3 + card_vals[hand[2]]*13**2 + card_vals[hand[3]]*13 + card_vals[hand[4]]);
const hand_val_compare = (betA, betB) => score(betA.split(' ')[0]) - score(betB.split(' ')[0]);

input.sort(hand_val_compare);
let total_winnings = 0;
for (let i=0; i<input.length; i++) {
    total_winnings += (parseInt(input[i].split(' ')[1])*(i+1));
}

console.log(total_winnings)