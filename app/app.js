

let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log('Do you want another card?')
} else if (sum === 21) {
    console.log('Blackjack! You win!')
} else if (sum > 21) {
    console.log('Bust... You lose shithead.')
} else {
    console.log('Error')
}