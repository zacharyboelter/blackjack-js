
//Initial variables
//set player to object
let player = {
    name: 'zachary'.toUpperCase(),
    chips: 1500
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
// Query selector variables
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');
let playerEl = document.querySelector('#player-el');

function getRandomNum() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard;
    }
}

// Start game for onclick start game button ~~ Update initial variables when start game is initiaited
function startGame() {
    isAlive = true;
    let firstCard = getRandomNum();
    let secondCard = getRandomNum();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

playerEl.textContent = `${player.name}: $${player.chips}`


// Main game logic
function renderGame() {
    if (sum <= 20) {
        message = 'Do you want another card?';
    } else if (sum === 21) {
        message = 'Blackjack! You win!';
        hasBlackJack = true;
    } else {
        message = 'Bust... You lose, loser.';
        isAlive = false;
    }

    console.log(hasBlackJack);
    console.log(isAlive);
    // Update html 
    // cardsEl.textContent = `Cards: ${cards} `;

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' ';
    }

    sumEl.textContent = `Sum:  ${sum}`;
    messageEl.textContent = `You have ${sum}, ${message}`;
    console.log(`You have ${sum}, ${message}`);
}


// new card button with updating document
function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let thirdCard = getRandomNum();
        sum += thirdCard;
        cards.push(thirdCard);
        renderGame();
    }
}