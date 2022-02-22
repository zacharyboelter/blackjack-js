

let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;


if (sum <= 20) {
    console.log('Do you want another card? 🙂');
} else if (sum === 21) {
    console.log('Blackjack! You win! 🥳');
    hasBlackJack = true;
} else {
    console.log('Bust... You lose, loser. 😭');
    isAlive = false;
} 

console.log(hasBlackJack);
console.log(isAlive);