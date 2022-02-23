
//Initial variables
let firstCard = getRandomNum();
let secondCard = getRandomNum();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
// Query selector variables
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');


function getRandomNum() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 11) {
        return 11
    } else {
        return randomCard;
    }
} 

// Start game for onclick start game button
function startGame() {
    renderGame();
}


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
    console.log('Drawing a new card from the deck!')

    let thirdCard = getRandomNum();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
}