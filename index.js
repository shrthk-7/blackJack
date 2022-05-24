function getRandomCard() {
    return Math.floor(Math.random()*13 + 1);
}

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = 0
let plays = 0, wins = 0, loses = 0

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let cards = []
let instructionsStatus = false

function viewInstructions() {
    if(instructionsStatus){
        document.getElementById("instructions").style = "display:none;"
        instructionsStatus = false
    }
    else{
        document.getElementById("instructions").style = "display:visible;"
        instructionsStatus = true
    }


}
function statCounter() {
    document.getElementById("plays").textContent = "Plays: " + plays
    document.getElementById("wins").textContent = "Wins: " + wins
    document.getElementById("loses").textContent = "Loses: " + loses
}
function restartBtn() {
    document.getElementById("newCard-el").style = "display:none;"
    document.getElementById("startGame-el").style = "display:visible;"
    document.getElementById("startGame-el").textContent = "Restart Game"
}
function initializeBtn() {
    document.getElementById("startGame-el").style = "display: none;"
    document.getElementById("newCard-el").style = "display: visible;"
}
function startGame() {

    plays += 1

    cards = []
    sum = 0
    
    initializeBtn()
    newCard()

}
function renderGame() {

    let cardName = ""
    cardsEl.textContent = "Cards: "
    for(let i = 0; i<cards.length; i += 1){

        if(cards[i] == 1) {cardName = 'A';}
        else if(cards[i] == 11) {cardName = 'J'; cards[i] = 10;} 
        else if(cards[i] == 12) {cardName = 'Q'; cards[i] = 10;}
        else if(cards[i] == 13) {cardName = 'K'; cards[i] = 10;}
        else cardName = cards[i]
            
        cardsEl.textContent += cardName + " "
    }
    
    sum = 0
    for(let Card of cards)
        sum += Card
    
    sumEl.textContent = "Sum: " + sum
    
    if(sum < 21) {
        message = "Hmmm...do you want to draw a new card?"
        messageEl.textContent = message
    }
    else if(sum === 21) {
        message = "You've got Blackjack!"
        messageEl.textContent = message
        wins += 1
        statCounter()
        restartBtn()
    }
    else {
        message = "You're out of the game"
        messageEl.textContent = message
        loses += 1
        statCounter()
        restartBtn()
    }
}
function newCard() {
    let card = getRandomCard()
    cards.push(card)
    renderGame(sum)
}
