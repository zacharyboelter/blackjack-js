

let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';

let messageEl = document.getElementById('message-el');

function startGame() {
    if (sum <= 20) {
        message = 'Do you want another card? 🙂';
    } else if (sum === 21) {
        message = 'Blackjack! You win! 🥳';
        hasBlackJack = true;
    } else {
        message = 'Bust... You lose, loser. 😭';
        isAlive = false;
    }

    console.log(hasBlackJack);
    console.log(isAlive);
    messageEl.textContent = `You have ${sum}, ${message}`
    console.log(`You have ${sum}, ${message}`);
}