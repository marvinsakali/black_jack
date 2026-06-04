let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let message = ""
let messageEL = document.getElementById('message')
let cardEl = document.getElementById('cards')
let sumEl = document.querySelector('#sum')


function startGame(){
    renderGame()
}

function renderGame() {
    cardEl.textContent = " "
    for (let i = 0; i < cards.length ; i++){
        cardEl.textContent += cards[i] + " ♦ "
    }
    // cardEl.textContent = firstCard + " ♦ "  + secondCard + " ♠"
    sumEl.textContent = sum
    if (sum < 21){
        let message = "Try another number"
        messageEL.textContent = message
        
    } else if (sum === 21){
        let message = "Congrats you won"
        messageEL.textContent = message
    } else {
        let message = "You are out of the game!"
        messageEL.textContent = message
    }
}

function newCard(){
    let card = 6
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}