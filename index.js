let sum = 0
let cards = []
let isAlive = false
let hasBlackjack = false

let messageEL = document.getElementById("message")
let cardEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")

// Generate a random card
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1

    if (randomCard === 1) {
        return 11 // Ace
    } else if (randomCard > 10) {
        return 10 // Jack, Queen, King
    } else {
        return randomCard
    }
}

// Start a new game
function startGame() {
    isAlive = true
    hasBlackjack = false

    cards = []

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard

    renderGame()
}

// Render game state
function renderGame() {
    // Display cards
    cardEl.textContent = ""

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ♦ "
    }

    // Display sum
    sumEl.textContent =  sum

    // Check game status
    if (sum < 21) {
        messageEL.textContent = "Do you want to draw a new card?"
    } 
    else if (sum === 21) {
        messageEL.textContent = "🎉 Blackjack! You win!"
        hasBlackjack = true
    } 
    else {
        messageEL.textContent = "❌ You're out of the game!"
        isAlive = false
    }
}

// Draw a new card
function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard()

        cards.push(card)
        sum += card

        renderGame()
    }
}